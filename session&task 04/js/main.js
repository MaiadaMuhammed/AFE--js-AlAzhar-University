// 1- Constructor Function
function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;

  this.display = function () {
    console.log(` Name: ${this.name},
              Age: ${this.age},
             Email: ${this.email}`);
  };
}

let user1 = new User("Maiada", 21, "maiada@example.com");
let user2 = new User("Loran", 25, "loranmnn@example.com");

user1.display();
user2.display();

user1.age = 20;
user1.email = "maiada22@example.com";

user1.country = "Egypt";
user2.country = "Saudi Arabia";

console.log(user1);
console.log(user2);

// Let's delete Loran's email
delete user2.email;
console.log(user2);

// Let's delete maiada's age
delete user1.age;
console.log(user1);
