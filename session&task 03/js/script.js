// If-Else:

// 1.- Even or Odd:
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is Even");
  } else {
    console.log(number + " is Odd");
  }
}
checkEvenOdd(22);
checkEvenOdd(9);

// Grade Checker:

function checkGrade(score) {
  if (score >= 90 && score <= 100) {
    console.log("Grade: A");
  } else if (score >= 80 && score <= 89) {
    console.log("Grade: B");
  } else if (score >= 70 && score <= 79) {
    console.log("Grade: C");
  } else if (score >= 60 && score <= 69) {
    console.log("Grade: D");
  } else {
    console.log("Grade: F");
  }
}

checkGrade(95);
checkGrade(85);
checkGrade(75);
checkGrade(65);
checkGrade(50);

//  Switch Case:

// 1- Day of the Week:

function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log(
        "wrong Input. Kindly Enter a number from 1 to 7 as the days of the week."
      );
  }
}
getDayOfWeek(1);
getDayOfWeek(2);
getDayOfWeek(3);
getDayOfWeek(4);
getDayOfWeek(5);
getDayOfWeek(6);
getDayOfWeek(7);
getDayOfWeek(8);

// Traffic Light System:
function trafficLightRule(color) {
  switch (color.toLowerCase()) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Get Ready");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Invalid color! kindly Enter red, yellow, or green.");
  }
}

trafficLightRule("red");
trafficLightRule("yellow");
trafficLightRule("GREEN");
trafficLightRule("brown");

// For Loop :
// 1- Numbers:
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
// 2- Sum of First N Numbers:

function sumOfNumbers(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  console.log("Sum of first", N, "numbers is:", sum);
}

sumOfNumbers(8);

// Factorial Calculation:

function factorial(N) {
  let fact = 1;
  for (let i = 1; i <= N; i++) {
    fact *= i;
  }
  console.log("Factorial of", N, "is:", fact);
}

factorial(6);
