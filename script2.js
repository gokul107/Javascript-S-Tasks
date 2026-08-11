// 1 //
{
    var studentName = "Gokul";
    let age = 22;
    const course = "JavaScript";
    let mark = 85;

    console.log("Student Name:", studentName);
    console.log("Age:", age);
    console.log("Course:", course);
    console.log("Mark:", mark);
}

// 2 //
{
    let name = prompt("Enter your name:");
    let age = prompt("Enter your age:");

    console.log("My name is", name);
    alert("My age is " + age);
}

// 3 //
{
    let studentName = "Gokul";
    let age = 22;
    let isStudent = true;
    let address;
    let phoneNumber = null;

    console.log(studentName, typeof (studentName));
    console.log(age, typeof (age));
    console.log(isStudent, typeof (isStudent));
    console.log(address, typeof (address));
    console.log(phoneNumber, typeof (phoneNumber)) ;
}

// 4 //
{
    let products = ["Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"];

    console.log("First product:", products[0]);
    console.log("Third product:", products[2]);
    console.log("Last product:", products[5]);
    console.log("All products:", products);
}

// 5 //
{
    let employee = {
        name: "Gokul",
        age: 22,
        role: "Software Developer",
        salary: 30000
    };

    console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);
}

// 6 //
{
    let price = 500;
    let quantity = 3;
    let totalPrice = price * quantity;
    let discount = totalPrice - 100;
    let finalAmount = discount;
    let averagePrice = totalPrice / quantity;

    console.log("Total Price:", totalPrice);
    console.log("Discount:", 100);
    console.log("Final Amount:", finalAmount);
    console.log("Price per Product:", averagePrice);
}

// 7 //
{
    console.log(25 > 20);
    console.log(15 < 10);
    console.log(50 == "50");
    console.log(50 === "50");
    console.log(100 != "100");
    console.log(100 !== "100");
}

// 8 //
{
 console.log(10 > 5 && 20 > 15 || 5 > 10);
//true && true = true || false = true

console.log(10 < 5 || 20 >= 20 && 5 == "5");
//false || true && true = false || true = true

console.log(15 === "15" || 10 > 5 && 8 < 3);
//false || true && false = false || false = false

console.log(20 >= 20 && 5 !== "5" || 10 < 5);
//  true && true = true || false = true

console.log(25 < 20 || 30 == "30" && 10 >= 10);
//false || true && true = false || true = true
}

// 9 //
{
    let passwordCorrect = true;
    console.log(passwordCorrect ? "Login successful" : "Invalid password");
}

// 10 //
{
    let mark1 = Number("80");
    let mark2 = Number("70");
    let total = mark1 + mark2;

    console.log("Total Marks:", total);
}

// 11 //
{
    let age = 20;

    if (age >= 18) {
        console.log("You can vote");
    } else {
        console.log("You cannot vote");
    }
}

// 12 //
{
    let mark = 85;

    if (mark > 100 || mark < 0) {
        console.log("Invalid Mark");
    } else if (mark >= 90) {
        console.log("A Grade");
    } else if (mark >= 75) {
        console.log("B Grade");
    } else if (mark >= 50) {
        console.log("C Grade");
    } else {
        console.log("Fail");
    }
}

// 13 //
{
    let time = 15;

    if (time >= 1 && time <= 6) {
        console.log("Early Morning");
    } else if (time >= 7 && time <= 12) {
        console.log("Good Morning");
    } else if (time >= 13 && time <= 15) {
        console.log("Good Afternoon");
    } else if (time >= 16 && time <= 19) {
        console.log("Good Evening");
    } else if (time >= 20 && time <= 24) {
        console.log("Good Night");
    } else {
        console.log("Invalid Time");
    }
}

// 14 //
{
   let candidateAge = 22;
let candidateHeight = 175;
let candidateWeight = 72;

if (candidateAge >= 21) {
    if (candidateHeight >= 170) {
        if (candidateWeight >= 70) {
            console.log("Candidate is eligible");
        } else {
            console.log("Candidate is not eligible");
        }
    } else {
        console.log("Candidate is not eligible");
    }
} else {
    console.log("Candidate is not eligible");
}
}

// 15 //
{
    let trafficLight = "green";

    switch (trafficLight) {
        case "red":
            console.log("Stop the vehicle");  break;
        case "yellow":
            console.log("Get ready"); break;
        case "green":
            console.log("Go"); break;
        default:
            console.log("Invalid traffic light");
    }
}