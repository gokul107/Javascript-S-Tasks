// Level 1 //
// Task 1 //

// variables
const name = "Arun";
const age = 20;
const department = "CSE";
const cgpa = 8.7;
//concatenation
console.log("Name: " + name + ", Age: " + age +
            ", Department: " + department + ", CGPA: " + cgpa);
//Template literals
console.log(`Name: ${name}, Age: ${age}, Department: ${department}, CGPA: ${cgpa}`);

// Task 2 //
let a = 20;
let b = 10;
// Add
console.log("Addition:" ,(a + b));
// Sub
console.log("Subtraction: ",(a - b));
// Multi
console.log("Multiplication: ",(a * b));
// Div
console.log("Division:" ,(a / b));
// Mod
console.log("Modulus: ",(a % b));
// Power
console.log("Power:",(a ** b));

// Task 3 //
const age1 = Number(prompt("Enter your age:"));
if (age1 >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}

// Level 2
//Task 4 //

const marks = Number(prompt("Enter your marks:"));
if (marks >= 90 && marks <= 100) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else if (marks >= 60) {
  console.log("Grade: D");
} else {
  console.log("Fail");
}

// Task 5 //
const correctUsername = "admin";
const correctPassword = "1234";
const username = prompt("Enter username:");
const password = prompt("Enter password:");

if (username === correctUsername && password === correctPassword) {
  console.log("Login successful");
} else if (username !== correctUsername && password === correctPassword) {
  console.log("Invalid username");
} else if (username === correctUsername && password !== correctPassword) {
  console.log("Invalid password");
} else {
  console.log("Invalid credentials");
}

// Task 6 //
let balance = 10000;
const amount = Number(prompt("Enter withdrawal amount:"));

if (amount <= 0) {
  console.log("Amount must be greater than 0");
} else if (amount > balance) {
  console.log("Insufficient balance");
} else if (amount % 100 !== 0) {
  console.log("Amount must be a multiple of 100");
} else {
  balance = balance - amount;
  console.log("Withdrawal successful. Remaining balance:" + balance);
}

//Level 3
// Task 7 //

const numTable = Number(prompt("Enter a number:"));
for (let i = 1; i <= 10; i++) {
console.log(numTable + " x " + i + " = " + (numTable * i));
}

// Task 8 //

let numToReverse = 12345;
let reversed = 0;
while (numToReverse > 0) {
    let lastDigit = numToReverse % 10;
     reversed = reversed * 10 + lastDigit;
    numToReverse = (numToReverse - lastDigit) / 10;
}
console.log("Reversed:", reversed);

// Task 9 //

const correctOTP = 1234;
let attempts = 0;

while (attempts < 3) {
  const enteredOTP = Number(prompt("Enter OTP:"));

  if (enteredOTP === correctOTP) {
    console.log("OTP verified"); break;
  } else {
    attempts++;
    if (attempts < 3) {
      console.log("Try again");
    }
  }
}
if (attempts === 3) {
  console.log("Account blocked");
}
//Level 4 
// Task 10 //

function calculateSalary(basicSalary, bonus) {
  return basicSalary + bonus;
}
console.log(calculateSalary(30000, 5000));

//Task 11

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
console.log(add(15, 5));
console.log(subtract(15, 5));
console.log(multiply(15, 5));
console.log(divide(15, 5));

//Task 12
function checkEligibility(age, height, weight) {
  if (age >= 21 && height >= 170 && weight >= 70) {
    return "Eligible";
  }
  return "Not eligible";
}
console.log(checkEligibility(22, 175, 72));
console.log(checkEligibility(19, 160, 60));

//Level - 5
//Task 13
let cart = ["Laptop", "Mouse", "Keyboard"];

cart.push("Monitor");
cart.splice(cart.indexOf("Mouse"), 1);
cart.unshift("Headset");
cart.pop();

console.log(cart);

//Task 14
let numbers = [10, 45, 23, 89, 12, 67];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

//Task 15
let arr = [1, 2, 3, 2, 4, 1, 5];

let unique = [];

let i = 0;

while (i < arr.length) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
    }
    i++;
}
console.log(unique);

//Level 6
//Task 16
let employees16 = [
{name: "Arun", salary: 30000},
 {name: "Bala", salary: 50000},
 {name: "Kumar", salary: 25000},
 {name: "Ravi", salary: 70000}
];
let highEarners = employees16.filter(emp => 
    {
       return emp.salary >= 40000
    });
console.log(highEarners);

//Task 17
let employees17 = [
  { name: "Arun",  salary: 30000 },
  { name: "Bala",  salary: 50000 },
  { name: "Kumar", salary: 25000 },
  { name: "Ravi",  salary: 70000 }
];
let updated = employees17.map(emp => {
  if (emp.salary < 40000) {
    emp.salary += 5000;
  } else {
    emp.salary += 10000;
  }
  return emp;
});
console.log(updated);

//Task 18
let employees18 = [
    { name: "Arun", salary: 30000 },
    { name: "Bala", salary: 50000 },
    { name: "Kumar", salary: 25000 },
    { name: "Ravi", salary: 70000 }
];

let total = employees18.reduce((sum, emp) => {
    return sum + emp.salary;
}, 0);
console.log(total);

//19
let employees19 = [
    { name: "Arun", salary: 30000 },
    { name: "Bala", salary: 50000 },
    { name: "Kumar", salary: 25000 },
    { name: "Ravi", salary: 70000 }
];

let highSalary = employees19.some(emp => {
    return emp.salary > 100000;
});

console.log("Any employee earning more than 100000:", highSalary);

let minimumSalary = employees19.every(emp => {
    return emp.salary >= 20000;
});
console.log("All employees earning at least 20000:", minimumSalary);

//20
let employees20 = [
  { id: 101, name: "Arun",  department: "IT", salary: 35000 },
  { id: 102, name: "Bala",  department: "HR", salary: 45000 },
  { id: 103, name: "Kumar", department: "IT", salary: 60000 }
];

//1
employees20.forEach(function (emp) {
  console.log(emp.name);
});

// 2
let itEmployees = employees20.filter(function (emp) {
  return emp.department === "IT";
});
console.log(itEmployees);

// 3
let hiked = employees20.map(function (emp) {
  return { ...emp, salary: emp.salary * 1.1 };
});
console.log(hiked);

// 4
let emp45k = employees20.find(function (emp) {
  return emp.salary === 45000;
});
console.log(emp45k);

// 5
let total20 = employees20.reduce(function (sum, emp) {
  return sum + emp.salary;
}, 0);
console.log(total20);

// 6
let above50k = employees20.some(function (emp) {
  return emp.salary > 50000;
});
console.log(above50k);

//7
let allAbove20k = employees20.every(function (emp) {
  return emp.salary > 20000;
});
console.log(allAbove20k);

// 8
let sorted = [...employees20].sort(function (a, b) {
  return b.salary - a.salary;
});
console.log(sorted);

// 9
employees20.forEach(function (emp) {
  let { name, salary } = emp;
  console.log(name, salary);
});

// 10
let newList = [...employees20];
console.log(newList);




