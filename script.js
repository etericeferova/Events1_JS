// 1 Marker

// class Marker {
//   constructor(color, inkPercentage) {
//     this.color = color;
//     this.inkPercentage = inkPercentage;
//   }

//   print(text) {
//     let printedText = "";
//     for (let char of text) {
//       if (this.inkPercentage <= 0) {
//         console.log(`The ${this.color} marker has run out of ink.`);
//         break;
//       }

//       printedText += char;
//       if (char !== " ") {
//         this.inkPercentage -= 0.5;
//       }
//     }

//     console.log(`%c${printedText}`, `color: ${this.color}`);
//     console.log(`Remaining ink: ${this.inkPercentage.toFixed(1)}%`);
//   }
// }

// class RefillableMarker extends Marker {
//   refill() {
//     this.inkPercentage = 100;
//     console.log(
//       `The ${this.color} marker has been refilled. Ink: ${this.inkPercentage}%`
//     );
//   }
// }

// const simpleMarker = new Marker("blue", 10);
// console.log("--- Simple Marker in Action ---");
// simpleMarker.print("Hello, world!");
// simpleMarker.print("A bit more text.");

// console.log("\n--- Refillable Marker in Action ---");
// const refillableMarker = new RefillableMarker("red", 5);
// refillableMarker.print("Text in red.");
// refillableMarker.refill();
// refillableMarker.print("Refilled marker is ready!");

//             2 Date

// class ExtendedDate extends Date {
//   getDateText() {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//     const dayOfWeek = days[this.getDay()];
//     const month = months[this.getMonth()];
//     const day = this.getDate();

//     return `${dayOfWeek}, ${day} ${month}`;
//   }

//   isFutureOrCurrent() {
//     const currentDate = new Date();
//     return this >= currentDate;
//   }
//   isLeapYear() {
//     const year = this.getFullYear();
//     return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
//   }

//   getNextDate() {
//     const nextDay = new Date(this);
//     nextDay.setDate(this.getDate() + 1);
//     return nextDay;
//   }
// }

// const extendedDate = new ExtendedDate();

// console.log("Date as text:", extendedDate.getDateText());

// console.log("Is future or current date:", extendedDate.isFutureOrCurrent());

// console.log("Is leap year:", extendedDate.isLeapYear());

// const nextDate = extendedDate.getNextDate();
// console.log("Next date:", nextDate.getDateText());

//                                            3 Employee

// class Employee {
//   constructor(name, position, salary) {
//     this.name = name;
//     this.position = position;
//     this.salary = salary;
//   }
// }

// class EmpTable {
//   constructor(employees) {
//     this.employees = employees;
//   }

//   getHtml() {
//     let html = '<table border="1">';
//     html += "<thead>";
//     html += "<tr><th>Name</th><th>Position</th><th>Salary</th></tr>";
//     html += "</thead>";
//     html += "<tbody>";

//     this.employees.forEach((employee) => {
//       html += `<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tr>`;
//     });

//     html += "</tbody>";
//     html += "</table>";

//     return html;
//   }
// }

// const employees = [
//   new Employee("John Doe", "Manager", "$5000"),
//   new Employee("Harry Potter", "Boss", "$3000"),
//   new Employee("Jack Sparrow", "Captain", "$1000"),
// ];

// const empTable = new EmpTable(employees);

// document.body.innerHTML = empTable.getHtml();

// 4

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let html = "<table>";
    html += "<thead>";
    html += "<tr><th>Name</th><th>Position</th><th>Salary</th></tr>";
    html += "</thead>";
    html += "<tbody>";

    this.employees.forEach((employee) => {
      html += `<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tr>`;
    });

    html += "</tbody>";
    html += "</table>";

    return html;
  }
}

class StyledEmpTable extends EmpTable {
  constructor(employees) {
    super(employees);
  }

  getStyles() {
    return `
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th, td {
          padding: 10px;
          text-align: left;
          border: 1px solid #ddd;
        }
        th {
          background-color: #4CAF50;
          color: white;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        tr:hover {
          background-color: #ddd;
        }
      </style>
    `;
  }

  getHtml() {
    let html = super.getHtml();

    let styles = this.getStyles();

    return styles + html;
  }
}

const employees = [
  new Employee("John Doe", "Manager", "$5000"),
  new Employee("Harry Potter", "Boss", "$3000"),
  new Employee("Jack Sparrow", "Captain", "$1000"),
];

const styledEmpTable = new StyledEmpTable(employees);

document.getElementById("styled-employee-table").innerHTML =
  styledEmpTable.getHtml();
