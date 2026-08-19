// Create an array containing at least 8 employees
let employees = [
    {
        id: 317,
        name: "Harish",
        department: "Backend",
        salary: 46500,
        experience: 2,
        skills: ["Java", "SQL", "Git"],
        joiningDate: new Date("2023-06-15")
    },
    {
        id: 324,
        name: "Keerthi",
        department: "Design",
        salary: 38500,
        experience: 1,
        skills: ["Figma", "Photoshop"],
        joiningDate: new Date("2025-08-18")
        
    },
    {
        id: 331,
        name: "Manoj",
        department: "Networking",
        salary: 53500,
        experience: 4,
        skills: ["Cisco", "Linux", "Networking"],
        joiningDate: new Date("2024-07-20")
    },
    {
        id: 346,
        name: "Swathi",
        department: "Testing",
        salary: 41500,
        experience: 2,
        skills: ["Selenium", "Jira"],
        joiningDate: new Date("2022-09-11")
    },
    {
        id: 352,
        name: "Dinesh",
        department: "Frontend",
        salary: 62500,
        experience: 3,
        skills: ["React", "CSS", "JavaScript"],
        joiningDate: new Date("2021-01-01")
    },
    {
        id: 367,
        name: "Bhavya",
        department: "Accounts",
        salary: 29500,
        experience: 1,
        skills: ["Excel", "Tally"],
        joiningDate: new Date("2020-04-12")
    },
    {
        id: 374,
        name: "Tarun",
        department: "Cloud",
        salary: 92000,
        experience: 5,
        skills: ["AWS", "Docker", "Linux"],
        joiningDate: new Date("2022-02-02")
    },

    {
        id: 389,
        name: "Aishwarya",
        department: "HR",
        salary: 57000,
        experience: 4,
        skills: ["Recruitment", "Excel", "Communication"],
        joiningDate: new Date("2020-09-21")
    }
];

// 1 
console.log("Employee Details:");

employees.forEach((employee)=> {
    console.log(employee);
});

// 2
let highSalary = employees.filter((employee)=> {
    return employee.salary > 40000;
});
console.log("Salary above 40000:");
highSalary.forEach(function(employee) {
    console.log(employee.name, employee.salary);
});

// 3
let employee = employees.find((employee)=>   {
    return employee.id === 389;
});
console.log(" Find Employee Details:");
console.log(employee);

// 4
let totalSalary = employees.reduce((total, employee)=> {
    return total + employee.salary;
}, 0);
console.log("Total Salary:", totalSalary);

// 5
let salaryCheck = employees.some((employee)=> {
    return employee.salary > 100000;
});
console.log(salaryCheck);

// 6
let experience = employees.every((employee)=> {
    return employee.experience >= 1;
});
console.log(experience);

// 7
employees.sort((a, b)=> {
    return b.salary - a.salary;
});

employees.forEach((employee)=> {
    console.log(employee.name, employee.salary);
});

// 8
let newEmployee = {
    id: 395,
    name: "Karthik",
    department: "Support",
    salary: 44000,
    experience: 2,
    skills: ["Linux", "Python"]
};

employees.push(newEmployee);

console.log("After push:");
console.log(employees);

let removedEmployee = employees.pop();

console.log("Removed last employee:");
console.log(removedEmployee);

let firstEmployee = {
    id: 401,
    name: "Nithin",
    department: "Database",
    salary: 59000,
    experience: 3,
    skills: ["MySQL", "MongoDB"]
};

employees.unshift(firstEmployee);
console.log("After unshift:");
console.log(employees);

let removedFirstEmployee = employees.shift();

console.log("Removed first employee:");
console.log(removedFirstEmployee);

// 9
employees.forEach((employee)=> {
    let {
        name,
        department,
        salary
    } = employee;

    let [skill1, skill2, skill3] = employee.skills;

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Salary:", salary);
    console.log("Skills:", skill1, skill2, skill3);
});

// 10
let newEmployees = [...employees];

console.log("Old Employee Array:");
console.log(employees);

console.log("New Employee Array:");
console.log(newEmployees);

// 11
function addEmployeeSkills(name, ...skills) {

    console.log("Employee Name:", name);
    console.log("Skills:", skills);
}
addEmployeeSkills(
    "Karthik",
    "JavaScript",
    "React"
);

//12

function addEmployee(employee) {
    employees.push(employee);

    console.log("Employee added successfully");
}

let newEmployee1 = {
    id: 395,
    name: "Raj",
    department: "Support",
    salary: 44000,
    experience: 2,
    skills: ["Linux", "Python", "Git"]
};

addEmployee(newEmployee1);

function deleteEmployee(id) {

    let index = employees.findIndex(function(employee) {
        return employee.id === id;
    });

    if (index !== -1) {
        employees.splice(index, 1);
        console.log("Employee deleted successfully");
    } else {
        console.log("Employee not found");
    }
}

deleteEmployee(395);

function searchEmployee(id) {

    let employee = employees.find(function(employee) {
        return employee.id === id;
    });

    return employee;
}

console.log("Search Result:");
console.log(searchEmployee(346));

function calculateTotalSalary() {

    let total = employees.reduce(function(sum, employee) {
        return sum + employee.salary;
    }, 0);

    return total;
}

console.log("Total Salary:", calculateTotalSalary());

function displayEmployees() {

    employees.forEach(function(employee) {

        console.log("ID:", employee.id);
        console.log("Name:", employee.name);
        console.log("Department:", employee.department);
        console.log("Salary:", employee.salary);
        console.log("Experience:", employee.experience);
        console.log("Skills:", employee.skills);
    });
}

displayEmployees();

// 13
function salaryCategory(salary) {
    if (salary <= 30000) {
        return "Junior";
    } 
    else if (salary <= 60000) {
        return "Mid Level";
    } 
    else {
        return "Senior";
    }
}
employees.forEach((employee)=> {
 console.log(employee.name + " - " + salaryCategory(employee.salary)
    );
});

//14
employees.forEach(function(employee) {

    let joiningYear = employee.joiningDate.getFullYear();
    let joiningMonth = employee.joiningDate.getMonth();

    console.log("Name:", employee.name);
    console.log("Joining Year:", joiningYear);
    console.log("Joining Month:", joiningMonth);
});

//15
let employeeId = Number(prompt("Enter Employee ID:"));

let selectedEmployee = employees.find(function(employee) {
    return employee.id === employeeId;
});
if (selectedEmployee) {
    console.log("Employee Found");
    console.log("ID:", selectedEmployee.id);
    console.log("Name:", selectedEmployee.name);
    console.log("Department:", selectedEmployee.department);
    console.log("Salary:", selectedEmployee.salary);
    console.log("Experience:", selectedEmployee.experience);
    console.log("Skills:", selectedEmployee.skills);
    console.log("Joining Date:", selectedEmployee.joiningDate);
} else {

    console.log("Employee not found");
}

