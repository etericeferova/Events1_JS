// 1. Написать функцию, которая принимает 2 числа и возвра
// щает -1, если первое меньше, чем второе; 1 – если первое
// больше, чем второе; и 0 – если числа равны.

// numb1 = prompt("Enter the first number:");
// numb2 = prompt("Enter the second number:");
// function compareNumbers(a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// console.log(compareNumbers(numb1, numb2));

//  2. Написать функцию, которая вычисляет факториал пере
// данного ей числа.

// numb = prompt("Enter the number:");
// function findFactorial(numb) {
//   let result = 1;
//   if (numb == 1 || numb == 0) {
//     return 1;
//   }
//   for (let i = 2; i <= numb; i++)
//    {
//     result *= i;
//   }
//   return result;
// }
// let factorial = findFactorial(numb);
// console.log(factorial);

//  3. Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число. Например: цифры
// 1, 4, 9 превратятся в число 149.

// function combineDigits() {
//     let digit1 = prompt("Enter the first digit:");
//     let digit2 = prompt("Enter the second digit:");
//     let digit3 = prompt("Enter the third digit:");

//     let newNumber = digit1 * 100 + digit2 * 10 + digit3 * 1;
//     return newNumber;
//   }
//   let result = combineDigits();
//   console.log("Number:", result);

//  4. Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь. Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрата.

// function calculateArea() {
//   let length = prompt("Enter the length:");
//   let width = prompt("Enter the width:");

//   if (width === "") {
//     return length ** 2;
//   } else {
//     return length * width;
//   }
// }
// let area = calculateArea();
// console.log("The area is:", area);

//  5. Написать функцию, которая проверяет, является ли пере
// данное ей число совершенным. Совершенное число – это
// число, равное сумме всех своих собственных делителей.

// let numb = prompt("Enter a number to check number is perfect number or not:");

// function isPerfectNumber(numb) {
//   let sum = 0;

//   for (let i = 1; i < numb; i++) {
//     if (numb % i == 0) {
//       sum += i;
//     }
//   }
//   return sum == numb;
// }

// if (isPerfectNumber(numb)) {
//   console.log(numb + " is a perfect number.");
// } else {
//   console.log(numb + " is not a perfect number.");
// }

//  6. Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать,
// совершенное число или нет.

// function showPerfectNumbersInRange(min, max) {
//   for (let i = min; i <= max; i++) {
//     if (isPerfectNumber(i)) {
//       console.log(i + " is a perfect number.");
//     }
//   }
// }
// let minOfRange = prompt("Enter the min value of the range:");
// let maxOfRange = prompt("Enter the max value of the range:");

// showPerfectNumbersInRange(minOfRange, maxOfRange);

//  7. Написать функцию, которая принимает время (часы, мину
// ты, секунды) и выводит его на экран в формате «чч:мм:сс».
// 1
// Домашнее задание №4
//  Если при вызове функции минуты и/или секунды не были
// переданы, то выводить их как 00.

// function formatTime(hours, minutes, seconds)
// {
//   if (minutes == "") {
//     minutes = 0;
//   }
//   if (seconds == "") {
//     seconds = 0;
//   }
//   let formattedHours = hours;
//   if (hours < 10) {
//     formattedHours = "0" + hours;
//   }
//   let formattedMinutes = minutes;
//   if (minutes < 10) {
//     formattedMinutes = "0" + minutes;
//   }
//   let formattedSeconds = seconds;
//   if (seconds < 10) {
//     formattedSeconds = "0" + seconds;
//   }
//   return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
// }

// let hours = prompt("Enter hours:");
// let minutes = prompt("Enter minutes:");
// let seconds = prompt("Enter seconds:");

// let time = formatTime(hours, minutes, seconds);
// console.log("Time: " + time);

//  8. Написать функцию, которая принимает часы, минуты и
// секунды и возвращает это время в секундах.

// function timeInSeconds(hours, minutes, seconds)
//{
//   let inSeconds = hours * 3600 + minutes * 60 + seconds;
//   return inSeconds;
// }
// let hours = prompt("Enter hours:");
// let minutes = prompt("Enter minutes:");
// let seconds = prompt("Enter seconds:");

// let result = timeInSeconds(hours, minutes, seconds);
// console.log("Time in seconds: " + result);

//  9. Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в
// виде строки «чч:мм:сс».

// function secondsToTime(seconds)
// {
//   let hours = Math.floor(seconds / 3600);
//   let minutes = Math.floor((seconds % 3600) / 60);
//   let remainingSeconds = seconds % 60;

//   let formattedHours = hours;
//   if (hours < 10) {
//     formattedHours = "0" + hours;
//   }
//   let formattedMinutes = minutes;
//   if (minutes < 10) {
//     formattedMinutes = "0" + minutes;
//   }
//   let formattedSeconds = remainingSeconds;
//   if (remainingSeconds < 10) {
//     formattedSeconds = "0" + remainingSeconds;
//   }
//   return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
// }
// let seconds = prompt("Enter the time in seconds:");

// let result = secondsToTime(seconds);
// console.log("Time: " + result);

//  10. Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2
// даты, и возвращает результат в виде строки «чч:мм:сс». При
// выполнении задания используйте функции из предыду
// щих 2-х заданий: сначала обе даты переведите в секунды,
// узнайте разницу в секундах, а потом разницу переведите
// обратно в «чч:мм:сс»

// function timeDifference(hours1,mins1,sec1,hours2,mins2,sec2)
// {
//   let date1InSeconds = timeInSeconds(hours1, mins1, sec1);
//   let date2InSeconds = timeInSeconds(hours2, mins2, sec2);

//   let differenceInSeconds = Math.abs(date1InSeconds - date2InSeconds);

//   let hours = Math.floor(differenceInSeconds / 3600);
//   let mins = Math.floor((differenceInSeconds % 3600) / 60);
//   let secs = differenceInSeconds % 60;

//   let formattedHours;
//   if (hours < 10) {
//     formattedHours = "0" + hours;
//   } else {
//     formattedHours = hours;
//   }

//   let formattedMinutes;
//   if (mins < 10) {
//     formattedMinutes = "0" + mins;
//   } else {
//     formattedMinutes = mins;
//   }

//   let formattedSeconds;
//   if (secs < 10) {
//     formattedSeconds = "0" + secs;
//   } else {
//     formattedSeconds = secs;
//   }

//   return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
// }

// let hours1 = prompt("Enter the hours for the first date:");
// let mins1 = prompt("Enter the minutes for the first date:");
// let sec1 = prompt("Enter the seconds for the first date");

// let hours2 = prompt("Enter the hours for the second date:");
// let mins2 = prompt("Enter the minutes for the second date:");
// let sec2 = prompt("Enter the seconds for the second date:");

// let result = timeDifference(hours1,mins1,sec1,hours2,mins2,sec2);
// console.log("Differance between the dates: " + result);
