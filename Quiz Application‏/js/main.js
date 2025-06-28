const jsPDF = window.jspdf?.jsPDF || window.jsPDF;
const pdf = new jsPDF();

let usernameInput = document.getElementById("username");
let startQuizBtn = document.getElementById("startQuiz");
let questionNumberInput = document.getElementById("questionNumber");
let difficultyButtons = document.querySelectorAll(".difficulty button");
let quizApp = document.querySelector(".quiz-app");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let feedback = document.querySelector(".feedback");
let submitButton = document.querySelector(".submit-button");
let countdown = document.querySelector(".countdown");
let counter = document.getElementById("current");
let totalCounter = document.getElementById("total");
let resultsContainer = document.querySelector(".results");
let downloadBtn = document.getElementById("downloadPdf");
let toggleDark = document.getElementById("toggleDarkMode");
let chartCanvas = document.getElementById("resultChart");

let quizData = [];
let userAnswers = [];
let currentIndex = 0;
let correctAnswers = 0;
let timerInterval;

// dark mode
if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark-mode");
}
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark", document.body.classList.contains("dark-mode"));
});

startQuizBtn.onclick = async () => {
  const username = usernameInput.value.trim();
  const questionCount = +questionNumberInput.value;
  if (!username || questionCount < 1) return alert("ادخل اسمك وعدد الأسئلة");

  try {
    let questions = await fetch("html_questions.json").then(res => res.json());
    quizData = questions.slice(0, questionCount); // filter depending on the difficulty

    localStorage.setItem("quizUser", username);
    localStorage.setItem("quizScore", JSON.stringify({ score: 0, total: questionCount }));

    currentIndex = 0;
    correctAnswers = 0;
    userAnswers = [];
    document.querySelector(".settings").style.display = "none";
    quizApp.classList.remove("hidden");
    totalCounter.textContent = quizData.length;
    showQuestion();
  } catch (err) {
    alert("خطأ في تحميل الأسئلة. تأكد من وجود ملف html_questions.json وتشغيل الموقع عبر Live Server");
    console.error(err);
  }
};

function showQuestion() {
  clearInterval(timerInterval);
  if (currentIndex >= quizData.length) return showResults();

  const q = quizData[currentIndex];
  counter.textContent = currentIndex + 1;
  quizArea.innerHTML = `<h2 class="text-xl font-semibold mb-4">${q.title}</h2>`;
  answersArea.innerHTML = [1, 2, 3].map(i => `
    <div class="answer mb-2">
      <input type="radio" id="ans${i}" name="question" data-answer="${q[`answer_${i}`]}">
      <label for="ans${i}" class="cursor-pointer">${q[`answer_${i}`]}</label>
    </div>`).join("");

  startTimer();
}

submitButton.onclick = () => {
  const selected = document.querySelector("input[name='question']:checked");
  const answer = selected ? selected.dataset.answer : null;
  const q = quizData[currentIndex];
  const correct = q.right_answer === answer;

  if (correct) correctAnswers++;

  userAnswers.push({
    question: q.title,
    user: answer || "لم يتم الاختيار",
    correct: q.right_answer,
    explanation: q.explanation,
    isCorrect: correct
  });

  feedback.innerHTML = correct
    ? `<p class='correct text-green-600 font-bold'>برافو!  ما شاء الله على الشطارة</p>`
    : `<p class='wrong text-red-600 font-bold'>للأسف حاول تاني ، المره الجايه هتصيب: ${q.right_answer}</p>`;

  if (q.explanation) {
    feedback.innerHTML += `<p class='explanation text-blue-700'>${q.explanation}</p>`;
  }

  clearInterval(timerInterval);
  setTimeout(() => {
    feedback.innerHTML = "";
    currentIndex++;
    showQuestion();
  }, 1500);
};

function startTimer() {
  let seconds = 15;
  countdown.textContent = `الوقت المتبقي: ${seconds} ث`;
  timerInterval = setInterval(() => {
    seconds--;
    countdown.textContent = `الوقت المتبقي: ${seconds} ث`;
    if (seconds <= 0) {
      clearInterval(timerInterval);
      submitButton.click();
    }
  }, 1000);
}

function showResults() {
  quizArea.innerHTML = answersArea.innerHTML = countdown.innerHTML = "";
  const percent = Math.round((correctAnswers / quizData.length) * 100);
  let msg = percent >= 90 ? "ممتاز!" : percent >= 70 ? "جيد جدًا" : "بحاجة للمحاولة مجددًا";
  resultsContainer.innerHTML = `
    <div class="final-score text-xl font-bold">درجتك: ${correctAnswers}/${quizData.length} (${percent}%)</div>
    <p>${msg}</p>`;
  drawChart(percent);
}

function drawChart(percent) {
  new Chart(chartCanvas, {
    type: "doughnut",
    data: {
      labels: ["إجابات صحيحة", "إجابات خاطئة"],
      datasets: [{
        data: [percent, 100 - percent],
        backgroundColor: ["#4caf50", "#f44336"]
      }]
    },
    options: { responsive: true, plugins: { legend: { position: "bottom" } } }
  });
}

downloadBtn.onclick = () => {
  const doc = new jsPDF();
  let y = 20;
  doc.text("تقرير النتيجة", 105, y, null, null, "center");
  y += 10;
  userAnswers.forEach((q, i) => {
    doc.text(`${i + 1}. ${q.question}`, 10, y); y += 6;
    doc.text(`إجابتك: ${q.user}`, 10, y); y += 6;
    doc.text(`الصحيحة: ${q.correct}`, 10, y); y += 6;
    doc.text(`التفسير: ${q.explanation || "-"}`, 10, y); y += 10;
  });
  doc.save("quiz_result.pdf");
};
