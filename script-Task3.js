// Task 1 — Employee Eligibility //

let employeeName = prompt("Enter employee name:");
let age = Number(prompt("Enter age:"));
let experience = Number(prompt("Enter experience in years:"));
let salary = Number(prompt("Enter salary:"));

if (age >= 21 && experience >= 1 && salary >= 20000) {
    console.log("Employee is eligible");
} else {
    console.log(employeeName + " is not eligible because:");

    if (age < 21) {
        console.log("- Age must be at least 21.");
    }

    if (experience < 1) {
        console.log("- Experience must be at least 1 year.");
    }

    if (salary < 20000) {
        console.log("- Salary must be at least 20,000.");
    }
}

// Task 2 — ATM Withdrawal //

let balance = 10000;
let withdrawalAmount = Number(prompt("Enter withdrawal amount:"));

if (
    withdrawalAmount > 0 &&
    withdrawalAmount <= balance &&
    withdrawalAmount % 100 === 0
) {
    balance = balance - withdrawalAmount;

    console.log("Withdrawal successful");
    console.log("Remaining balance: ₹" + balance);
} else {
    if (withdrawalAmount <= 0) {
        console.log("Withdrawal amount must be greater than 0");
    } else if (withdrawalAmount > balance) {
        console.log("Insufficient balance");
    } else {
        console.log("Withdrawal amount must be a multiple of 100");
    }
}

// Task 3 — Login System with 3 Attempts //

let correctUsername = "admin";
let correctPassword = "12345";
let attempts = 1;
while (attempts <= 3) {
    let username = prompt("Enter your username:");
    let password = prompt("Enter your password:");

    if (username === correctUsername && password === correctPassword) {
        alert("Login successful"); break;
    } else {
        if (attempts === 3) {
            alert("Account locked");
        } else {
            alert("Invalid username or password. Please try again.");
        }
            attempts++;
    }
}

// Task 4 — Student Grade System //

let math = Number(prompt("Enter Math marks:"));
let english = Number(prompt("Enter English marks:"));
let science = Number(prompt("Enter Science marks:"));
let social = Number(prompt("Enter Social marks:"));
let computer = Number(prompt("Enter Computer marks:"));

let total = math + english + science + social + computer;
let average = total / 5;

let grade;
if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log("Total = " + total);
console.log("Average = " + average);
console.log("Grade = " + grade);

// Task 5 — Number Pattern //

// for loop 1 to 5 // 
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// while loop 5 to 1 //
let j = 5;

while (j >= 1) {
    console.log(j);
    j--;
}


// do-while loop 1 2 3 4 5 //
let k = 1;
let output = "";

do {
    output = output + k + " ";
    k++;
} while (k <= 5);

console.log(output);

// Task 6 — Shopping Cart //

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
 let prices = [50000, 1000, 2000, 15000];

 let total1 = 0;
 for (let i = 0; i < products.length; i++) {
    console.log(products[i] + "-" + prices[i])
     total1 = total1 + prices[i];
 }
 console.log("Total = " + total1);

 //  Task 7 — Employee Object //

 let employee = { name: "Arun", empId: "STK-101", role: "Software Engineer",salary: 45000 };
  
 for(let i in employee)
  {
    console.log(i + ":" + employee[i])
  }

  function calculateBonus()
  {
    let bonus;
    if(employee.salary >= 40000)
    {
        bonus = 5000;
    }
    else {
        bonus = 3000;
    }
    console.log("Bonus  = "  +bonus);
  }
  calculateBonus()

  // Task 8 — Bank Account Functions//

function deposit(balance, amount) {
    console.log("Deposited: ₹" + amount);
       return balance + amount;
}
function withdraw(balance, amount) {
    console.log("Withdrawn:" + amount);

    return balance - amount;
}
function checkBalance(balance) {
    console.log("Current Balance:" + balance);

    return balance;
}
function runBankAccount(startingBalance) {
    let balance = startingBalance;

    balance = deposit(balance, 5000);
    balance = withdraw(balance, 2000);
    balance = checkBalance(balance);

    return balance;
}
runBankAccount(10000);

// Task 9 — Callback Calculator //

function add(a,b){
    return a + b ;
}
function sub(a,b){
    return a - b ;
}
function mul(a,b){
    return a * b ;
}
function div(a,b){
    return a / b ;
}
function calculate(callback,a,b)
{
    let result= callback(a,b)
      console.log(result);
  return result;
}
calculate(add,20,10)
calculate(sub,20,10)
calculate(mul,20,10)
calculate(div,20,10)

