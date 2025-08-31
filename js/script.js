// Part 1: Variables and conditionals
let score = 75;

if (score >= 50) {
  console.log("You passed!");
} else {
  console.log("You failed!");
}

// Part 2: Custom functions
function greetUser(name) {
  return "Hello, " + name + "!";
}

function squareNumber(num) {
  return num * num;
}

// Part 3: Loops
let numbers = [1, 2, 3, 4, 5];

// For loop
for (let i = 0; i < numbers.length; i++) {
  console.log("Number: " + numbers[i]);
}

// While loop
let count = 0;
while (count < 3) {
  console.log("While loop count: " + count);
  count++;
}

// Part 4: DOM interactions
document.getElementById("runBtn").addEventListener("click", function () {
  // Change text content
  document.getElementById("message").textContent = greetUser("Student");

  // Change style
  document.getElementById("title").style.color = "blue";

  // Add list items dynamically
  let list = document.getElementById("list");
  list.innerHTML = ""; // clear before adding
  numbers.forEach(num => {
    let li = document.createElement("li");
    li.textContent = "Square of " + num + " is " + squareNumber(num);
    list.appendChild(li);
  });
});
