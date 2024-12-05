// Задание 1
//  Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необ
// ходимое количество и куплен или нет. Написать несколько функ
// ций для работы с таким массивом.

//  1. Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
//  2. Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необ
// ходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.

// let shoppingListArray = [
//   { name: "Milk", quantity: 5, bought: true },
//   { name: "Bread", quantity: 3, bought: false },
//   { name: "Chockolate", quantity: 7, bought: true },
// ];

// function showShoppingList(list) {
//   console.log("Shopping List:");
//   const sortedList = list.sort((a, b) => a.bought - b.bought);

//   for (let i = 0; i < sortedList.length; i++) {
//     console.log(
//       sortedList[i].name +
//         " - " +
//         sortedList[i].quantity +
//         " (" +
//         (sortedList[i].bought ? "Bought" : "Not Bought") +
//         ")"
//     );
//   }
// }

// function addProduct(list, name, quantity) {
//   const product = list.find(
//     (item) => item.name.toLowerCase() === name.toLowerCase()
//   );

//   if (product) {
//     product.quantity += quantity;
//   } else {
//     list.push({ name, quantity, bought: false });
//   }
// }

// function buyProduct(list, name) {
//   const foundProduct = list.find(
//     (item) => item.name.toLowerCase() === name.toLowerCase()
//   );

//   if (foundProduct) {
//     foundProduct.bought = true;
//   } else {
//     console.log(`Product "${name}" is not found!`);
//   }
// }

// buyProduct(shoppingListArray, "Bread");
// addProduct(shoppingListArray, "Chicken", 3);
// showShoppingList(shoppingListArray);

//  Задание 2
//  Создать массив, описывающий чек в магазине. Каждый эле
// мент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.
//  1.
// Распечатка чека на экран.
//  2. Подсчет общей суммы покупки.
//  1
// Домашнее задание №2
//  3. Получение самой дорогой покупки в чеке.
//  4. Подсчет средней стоимости одного товара в чеке.

// let checkListArray = [
//   { name: "Milk", quantity: 5, price: 3 },
//   { name: "Caviar", quantity: 7, price: 150 },
//   { name: "Water", quantity: 10, price: 1.5 },
// ];

// function purchaseAmount(list) {
//   totalAmount = 0;
//   for (i = 0; i < checkListArray.length; i++) {
//     totalAmount += list[i].quantity * list[i].price;
//   }
//   return totalAmount;
// }

// function getMostExpensiveItem(list) {
//   return list.reduce((maxItem, item) =>
//     item.quantity * item.price > maxItem.quantity * maxItem.price
//       ? item
//       : maxItem
//   );
// }

// function showCheckList(list) {
//   for (let i = 0; i < list.length; i++) {
//     console.log(
//       list[i].name +
//         " - quantity: " +
//         list[i].quantity +
//         " price per 1: " +
//         list[i].price
//     );
//   }
//   total = purchaseAmount(checkListArray);
//   console.log("Total price:", total);
// }

// function calculateAverageItemPrice(list) {
//   let totalPrice = 0;
//   let totalItems = 0;

//   for (let i = 0; i < list.length; i++) {
//     totalPrice += list[i].quantity * list[i].price;
//     totalItems += list[i].quantity;
//   }

//   if (totalItems > 0) {
//     return totalPrice / totalItems;
//   } else {
//     return 0;
//   }
// }

// showCheckList(checkListArray);
// calculateAverageItemPrice(checkListArray);

// Задание 3
//  Создать массив css-стилей (цвет, размер шрифта, выравнива
// ние, подчеркивание и т. д.). Каждый элемент массива – это объ
// ект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
// <p></p>, добавив в открывающий тег атрибут style со всеми сти
// лями, перечисленными в массиве.

// function applyStyles(styles, text) {
//   const styleString = styles
//     .map((style) => `${style.name}: ${style.value};`)
//     .join(" ");

//   document.write(`<p style="${styleString}">${text}</p>`);
// }

// const styles = [
//   { name: "color", value: "red" },
//   { name: "font-size", value: "10px" },
//   { name: "text-align", value: "center" },
// ];

// const text = "Styled text";

// applyStyles(styles, text);

// Задание 4
//  Создать массив аудиторий академии. Объект-аудитория со
// стоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.
//  1.
// Вывод на экран всех аудиторий.
// 2. Вывод на экран аудиторий для указанного факультета.
//  3. Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
// 4. Функция сортировки аудиторий по количеству мест.
//  5. Функция сортировки аудиторий по названию (по алфа-
// виту)

// const audiences = [
//   { name: "Auditorium 1", seats: 15, faculty: "Math" },
//   { name: "Auditorium 2", seats: 17, faculty: "Cibernetics" },
//   { name: "Auditorium 3", seats: 10, faculty: "Philosophy" },
//   { name: "Auditorium 4", seats: 20, faculty: "Estetics" },
// ];

// function displayAllAudiences() {
//   audiences.forEach((audience) => {
//     console.log(
//       `Name: ${audience.name}, Seats: ${audience.seats}, Faculty: ${audience.faculty}`
//     );
//   });
// }

// function displayAudiencesByFaculty(faculty) {
//   const filteredAudiences = audiences.filter(
//     (audience) => audience.faculty === faculty
//   );
//   filteredAudiences.forEach((audience) => {
//     console.log(
//       `Name: ${audience.name}, Seats: ${audience.seats}, Faculty: ${audience.faculty}`
//     );
//   });
// }

// function displaySuitableAudiences(group) {
//   for (let i = 0; i < audiences.length; i++) {
//     const audience = audiences[i];
//     if (
//       audience.seats >= group.students &&
//       audience.faculty === group.faculty
//     ) {
//       console.log(
//         `Name: ${audience.name}, Seats: ${audience.seats}, Faculty: ${audience.faculty}`
//       );
//     }
//   }
// }

// function sortAudiencesBySeats() {
//   const sorted = [...audiences].sort((a, b) => a.seats - b.seats);
//   sorted.forEach((audience) => {
//     console.log(
//       `Name: ${audience.name}, Seats: ${audience.seats}, Faculty: ${audience.faculty}`
//     );
//   });
// }

// function sortAudiencesByName() {
//   const sorted = [...audiences].sort((a, b) => a.name.localeCompare(b.name));
//   sorted.forEach((audience) => {
//     console.log(
//       `Name: ${audience.name}, Seats: ${audience.seats}, Faculty: ${audience.faculty}`
//     );
//   });
// }

// console.log("All audiences:");
// displayAllAudiences();

// console.log("Audiences for Math faculty:");
// displayAudiencesByFaculty("Math");

// console.log("Suitable audiences for group:");
// const group = { name: "Group 1", students: 12, faculty: "Physics" };
// displaySuitableAudiences(group);

// console.log("Audiences sorted by seats:");
// sortAudiencesBySeats();

// console.log("Audiences sorted by name:");
// sortAudiencesByName();
