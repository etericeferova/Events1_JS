// 1. Написать функцию возведения числа в степень.

// function inPow(number, pow) {
//   if (pow == 0) {
//     return 1;
//   }
//   return number * inPow(number, pow - 1);
// }
// let number = prompt("Enter the number:");
// let pow = prompt("Enter the pow:");

// console.log(inPow(number, pow));

// 2. Написать функцию поиска наибольшего общего делителя.

// function findGcd(numb1, numb2) {
//   if (numb2 == 0) {
//     return numb1;
//   }

//   return findGcd(numb2, numb1 % numb2);
// }

// let number1 = prompt("Enter the first number:");
// let number2 = prompt("Enter the second:");

// let result = findGcd(number1, number2);
// console.log("Great common deniminator:", result);

// 3. Написать функцию для поиска максимальной цифры в числе.

// let maxDigit = 0;
// function findMaxDigit(numb, maxDigit) {
//   if (numb === 0) {
//     return maxDigit;
//   }

//   const digit = numb % 10;
//   maxDigit = digit > maxDigit ? digit : maxDigit;

//   return findMaxDigit(Math.floor(numb / 10), maxDigit);
// }

// const numb = prompt("Enter the number:");
// console.log("Max digit:", findMaxDigit(numb));

// 4. Написать функцию, которая определяет простое ли пере
// данное число.

// function isPrime(numb, divisor = 2) {
//   if (numb <= 1) return false;
//   if (divisor === numb) return true;
//   if (numb % divisor === 0) return false;
//   return isPrime(numb, divisor + 1);
// }

// const numb = prompt("Enter the number:");
// const result = isPrime(numb);
// if (result) {
//   alert("Number is prime.");
// } else {
//   alert("Not prime.");
// }

// 5. Написать функцию для вывода всех множителей передан
// ного числа в возрастающем порядке.
// Например: число 18 – множители 2 * 3 * 3.

// function getFactors(numb, divisor = 2, factors = []) {
//   if (numb == 1) {
//     return factors;
//   }

//   if (numb % divisor == 0) {
//     factors.push(divisor);
//     numb /= divisor;
//   } else {
//     divisor++;
//   }

//   return getFactors(numb, divisor, factors);
// }

// const numb = prompt("Enter the number:");
// console.log("Factors:", getFactors(numb));

// 6. Написать функцию, которая возвращает число Фибоначчи
// по переданному порядковому номеру.
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на
// том, что каждое число равно сумме двух предыдущих чисел.
// Например: порядковый номер 3 – число 2, порядковый
// номер 6 – число 8.

// function getFibonacciNumber(n) {
//   if (n === 1 || n === 2) {
//     return 1;
//   }

//   return getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
// }

// const numb = prompt("Enter position:");
// console.log("Fibonacci number:", getFibonacciNumber(numb));

// Lesson1

// function showName(showing) {
//   console.log("${showing} {this.name} ");
// }

// const user1 = {
//   name: "Anna",
// };

// const user2 = {
//   name: "Ali",
// };

// const showUser1Name = showName.bind(user1);
// showUser1Name("User:");

// //2

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     console.log("this", this);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   return callback();
// }

// const boundGetFullName = customer.getFullName.bind(customer);
// makeMessage(boundGetFullName);

// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       console.log("this", this);
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };

//   function makeMessage(callback) {
//     return callback();
//   }

//   // customer.getFullName();

//   makeMessage(customer.getFullName);

// Mini Game

// const magician = {
//   name: "Albus",
//   health: 850,
// };

// const warrior = {
//   name: "Jan",
//   health: 1000,
// };

// function heal(amount) {
//   this.health += amount;
//   console.log(
//     `${this.name} has been healt ${amount} and now his health: ${this.health}`
//   );
// }

// function takeDamage(amount) {
//   this.health -= amount;
//   if (this.health < 0) this.health = 0;
//   console.log(
//     `${this.name} has been damaged ${amount} and now health: ${this.health}`
//   );
// }

// function takeInfo() {
//   console.log(`Name: ${this.name}.Health: ${this.health}`);
// }

// const magicianHeal = heal.bind(magician);
// const warriorHeal = heal.bind(warrior);

// const magicianTakeDamage = takeDamage.bind(magician);
// const warriorTakeDamage = takeDamage.bind(warrior);

// const magicianInfo = takeInfo.bind(magician);
// const warriorInfo = takeInfo.bind(warrior);

// magicianTakeDamage(300);
// warriorHeal(150);
// magicianInfo();
// warriorInfo();

//3

// function greetUser(name, delay) {
//   setTimeout(() => {
//     alert(`Hello, ${name}!`);
//   }, delay);
// }

// const name = prompt("Enter your name:");

// greetUser(name, 5000);

// 4

// function startCount(seconds) {
//   const interval = setInterval(() => {
//     seconds -= 1;
//     console.log(seconds);

//     if (seconds <= 0) {
//       clearInterval(interval);
//       console.log("Time is over!");
//     }
//   }, 1000);
// }

// const seconds = prompt("Enter the seconds:");

// startCount(seconds);

// // 5
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`Hello, I'm  ${this.name} I'm ${this.age} .`);
//   }
// }

// const person1 = new Person("Maya", 19);

// person1.introduce();

// Lesson2

//1
// Реализовать класс, описывающий простой карандаш. В классе должны быть следующие компоненты:

// Поле, которое хранит твёрдость грифеля (например, "HB", "2B").
// Поле, которое хранит оставшуюся длину карандаша (в сантиметрах).
// Метод для письма:
// Метод принимает строку и выводит её в консоль.
// Каждый символ, кроме пробела, уменьшает длину карандаша на 0,1 см.
// Если длина карандаша закончилась, вывод прекращается.
// Метод для заточки карандаша:
// Метод уменьшает длину карандаша на 1 см, но восстанавливает возможность писать.
// Создать класс, описывающий механический карандаш, унаследовав его от простого карандаша, с добавлением:

// Поля, которое хранит запас сменных грифелей.
// Метода для замены грифеля (если грифель закончился).

class Pencil {
  constructor(hardness, length) {
    this.hardness = hardness;
    this.length = length;
    this.lengthToWrite = 1;
    this.usedLength = 0;
  }

  write(text) {
    let writtenText = "";
    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      if (this.length <= 0) {
        console.log("You have to sharpe your pencil to write.");
        break;
      }

      if (this.usedLength >= this.lengthToWrite) {
        console.log("You have to sharpe your pencil to write.");
        break;
      }

      writtenText += char;

      if (char !== " ") {
        this.length -= 0.1;
        this.usedLength += 0.1;
      }
    }
    console.log(`The written text: "${writtenText}"`);
  }

  sharpen() {
    if (this.length > 1) {
      this.length -= 1;
      this.usedLength = 0;
      console.log("The pencil has been sharpened!");
    } else {
      console.log("The pencil can't be sharpened because it's too short.");
    }
  }
}

class MechanicalPencil extends Pencil {
  constructor(hardness, length, leadStock) {
    super(hardness, length);
    this.leadStock = leadStock;
  }

  replaceLead() {
    if (this.leadStock > 0) {
      this.leadStock -= 1;
      this.usedLength = 0;
      console.log("Lead has been replaced.");
    } else {
      console.log("No spare leads available.");
    }
  }
}

const mechanicalPencil = new MechanicalPencil("HB", 11, 5);

mechanicalPencil.write("Hello, world!");
mechanicalPencil.sharpen();
mechanicalPencil.write("Hello.");
mechanicalPencil.replaceLead();
