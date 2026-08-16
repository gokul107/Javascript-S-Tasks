// Level 1 — Variables & Operators //
// 1 //
let salary = 30000;
let bonus = 5000;
let tax = 2000;

let finalSalary = salary + bonus - tax;
console.log("Final Salary : " , finalSalary);

// 2 //

// let a = 10;
// let b = a++;
// let c = ++a;
// console.log(a);
// console.log(b);
// console.log(c);

// predict the output //

a = 12 
b = 10
c = 12

// 3 //

// console.log(10 > 5 && 20 < 10 || 5 === "5");
//  true && false = false || false = false

// console.log(10 < 5 || 20 >= 20 && 5 == "5");
//  false || true && true = false || true = true

// console.log(!(10 > 5));
//   !(true) = false 

// Level 2 //

// 4 //
let balance = 10000;
let withdrawal = 2500;

if (withdrawal <= 0) {
    console.log("Withdrawal must be greater than 0");
}
else if (withdrawal > balance) {
    console.log("You don't have enough balance");
}
else if (withdrawal % 100 !== 0) {
    console.log("Withdrawal must be a multiple of 100");
}
else {
    balance = balance - withdrawal;

    console.log("Withdrawal successful");
    console.log("Your remaining balance is:", balance);
}

// 5 //
let mark = 78;

if (mark >= 90) {
    console.log("Grade A");
}
else if (mark >= 80) {
    console.log("Grade B");
}
else if (mark >= 70) {
    console.log("Grade C");
}
else if (mark >= 60) {
    console.log("Grade D");
}
else {
    console.log("Fail");
}  

// 6 //

let username = "admin";
let password = "1234";
let otp = 5555;

if(username === "admin")
{
    if(password === "1234")
    {
        if(otp === 5555)
        {
            console.log("Login successful");
        }
        else
        {
            console.log("Invalid OTP");
        }
    }
    else
    {
        console.log("Invalid password");
    }
}
else
{
    console.log("Invalid username");
}

// Level 3 //

// 7 //

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 8 //

let num = 7;
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// 9 //
let n=10;

while (n >= 0)
{
    console.log(n);
    n--;
}

// 10 //
let correctOTP = 1234;
let attempts = 0;
while (attempts < 3) {
    let enteredOTP = Number(prompt("Enter OTP:"));
        if (enteredOTP === correctOTP) {
        console.log("OTP verified");
        break;
    } 
    else {
        attempts++;
        console.log("invalid OTP try again");

        if (attempts === 3) {
            console.log("Account blocked");
        }
    }
}

// Level 4 //
// 11 //
let fruits = ["apple", "banana", "orange", "grapes", "mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log("first fruit : " ,fruits[0]);
console.log("last fruit : " ,fruits[fruits.length - 1]);

// 12 //
let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};
for(let n in employee)
{
    console.log(n + " : " + employee[n]);
}

// Level 5 //
// 13 //
function calculator(a, b, operator) {

    if (operator === "+") {
        return a + b;
    }
    else if (operator === "-") {
        return a - b;
    }
    else if (operator === "*") {
        return a * b;
    }
    else if (operator === "/") {
        return a / b;
    }
    else if (operator === "%") {
        return a % b;
    }
    else {
        return "Invalid operator";
    }
}
console.log(calculator(20, 5, "+"));
console.log(calculator(20, 5, "-"));
console.log(calculator(20, 5, "*"));
console.log(calculator(20, 5, "/"));
console.log(calculator(20, 5, "%"));

// 14 //
function salaryDetails(salary, bonus) {
    return salary + bonus;
}

console.log(salaryDetails(40000, 5000));

//15 //
function employee1(name, role = "Trainee") {
    console.log("Name:", name);
    console.log("Role:", role);
}
employee1("Arun");
employee1("Kamal", "Developer");

// Level 6 //
// 16 //
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function calculate(a, b, callback) {
    let result = a + b;
    console.log("Addition:", result);
    console.log("Callback result:", callback(a, b));
}
calculate(20, 10, add);
calculate(20, 10, sub);
calculate(20, 10, mul);

// 17 //
function* rewards() {
    yield "₹100 Cashback";
    yield "10% Discount";
    yield "₹500 Cashback";
    yield "20% Discount";
    yield "Better Luck Next Time";
}
let reward = rewards();
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);

// Level 7 //
// 18 //
let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Express", "MongoDB"];
let fullstack = [...frontend, ...backend];
console.log(fullstack);

// 19 //
let student = ["Arun", "ECE", 8.5, "Developer"];
let [name, branch, cgpa, role] = student;
console.log("Name:", name);
console.log("Branch:", branch);
console.log("CGPA:", cgpa);
console.log("Role:", role);

// 20 //
let company = {
    name: "Stackly",
    employee: {
        name: "Arun",
        role1: "Developer",
        salary1: 50000
    }
};
let {
    employee: {name: employeeName,role1,salary1}} = company;
    console.log(employeeName);
    console.log(role1);
    console.log(salary1);

    // Final Challenge — Mini Project //

 
 let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];
//Print all students
function printStudents() {
    for (let student of students) {
        let { name, department, mark } = student;

        console.log(name, department, mark);
    }
}
console.log("All Students");
printStudents();

//Print only ECE students
function printECE() {
    for (let student of students) {
        let { name, department, mark } = student;

        if (department === "ECE") {
            console.log(name, department, mark);
        }
    }
}
console.log("ECE Students");
printECE();

//Students who scored above 80
function above80() {
    for (let student of students) {
        let { name, mark } = student;

        if (mark > 80) {
            console.log(name, mark);
        }
    }
}
console.log("Students who scored above 80");
above80();

//Total marks
function totalMarks() {
    let total = 0;
    for (let student of students) {
        let { mark } = student;

        total = total + mark;
    }
    console.log("Total:", total);
}
totalMarks();

//Average marks
function averageMarks() {
    let total = 0;
    for (let student of students) {
        let { mark } = student;
        total = total + mark;
    }
    console.log("Average:", total / students.length);
}
averageMarks();

//Highest mark
function highestMark() {
    let highest = 0;
    for (let student of students) {
        let { mark } = student;
        if (mark > highest) {
            highest = mark;
        }
    }
    console.log("Highest:", highest);
}
highestMark();

// Lowest mark 
function lowestMark() {
    let lowest = students[0].mark;
    for (let student of students) {
        let { mark } = student;
        if (mark < lowest) {
            lowest = mark;
        }
    }
    console.log("Lowest:", lowest);
}
lowestMark();