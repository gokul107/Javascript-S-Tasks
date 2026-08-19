let staff = [
    {
        empId: 101,
        empName: "Ravi",
        team: "Java",
        pay: 32000
    },
    {
        empId: 102,
        empName: "Sneha",
        team: "Testing",
        pay: 42000
    },
    {
        empId: 103,
        empName: "Vijay",
        team: "Support",
        pay: 55000
    }
];

function showStaff() {

    console.log("\n--- Staff Details ---");

    if (staff.length === 0) {
        console.log("No staff available");
        return;
    }
    staff.forEach(function(person) {

        console.log(
            "ID:", person.empId,
            "Name:", person.empName,
            "Team:", person.team,
            "Salary:", person.pay
        );

    });
}
function addStaff() {

    let newId = Number(prompt("Enter Staff ID:"));
    let newName = prompt("Enter Staff Name:");
    let newTeam = prompt("Enter Team:");
    let newPay = Number(prompt("Enter Salary:"));

    let newPerson = {
        empId: newId,
        empName: newName,
        team: newTeam,
        pay: newPay
    };

    staff.push(newPerson);

    console.log("Staff added successfully");
}

function findStaff() {

    let staffName = prompt("Enter Staff Name:");

    let result = staff.find(function(person) {

        return person.empName.toLowerCase() === staffName.toLowerCase();

    });

    if (result) {
        console.log("Staff Found:");
        console.log(result);
    } else {
        console.log("Staff not found");
    }
}

function findHighPay() {

    let minimumPay = Number(prompt("Enter minimum salary:"));

    let result = staff.filter(function(person) {

        return person.pay >= minimumPay;

    });

    console.log("\n--- High Salary Staff ---");

    if (result.length === 0) {
        console.log("No staff found");
        return;
    }

    result.forEach(function(person) {

        console.log(person.empName, "-", person.pay);

    });
}

function getTotalPay() {

    let totalPay = staff.reduce(function(total, person) {

        return total + person.pay;

    }, 0);

    console.log("Total Salary:", totalPay);
}

function arrangeByPay() {

    staff.sort(function(first, second) {

        return first.pay - second.pay;

    });

    console.log("\n--- Staff Sorted By Salary ---");

    staff.forEach(function(person) {

        console.log(person.empName, "-", person.pay);

    });
}

function removeStaff() {

    let removeId = Number(prompt("Enter Staff ID to delete:"));

    let position = staff.findIndex(function(person) {

        return person.empId === removeId;

    });

    if (position !== -1) {

        staff.splice(position, 1);

        console.log("Staff deleted successfully");

    } else {

        console.log("Staff not found");

    }
}

let menuChoice;

do {

    menuChoice = Number(prompt(
        "STAFF MANAGEMENT SYSTEM\n\n" +
        "1. Display All Staff\n" +
        "2. Add Staff\n" +
        "3. Search Staff\n" +
        "4. Find High Salary Staff\n" +
        "5. Calculate Total Salary\n" +
        "6. Sort By Salary\n" +
        "7. Delete Staff\n" +
        "8. Exit\n\n" +
        "Enter your choice:"
    ));

    switch (menuChoice) {

        case 1:
            showStaff();
            break;

        case 2:
            addStaff();
            break;

        case 3:
            findStaff();
            break;

        case 4:
            findHighPay();
            break;

        case 5:
            getTotalPay();
            break;

        case 6:
            arrangeByPay();
            break;

        case 7:
            removeStaff();
            break;

        case 8:
            console.log("Program ended");
            break;

        default:
            console.log("Please enter a valid choice");
    }
} while (menuChoice !== 8);