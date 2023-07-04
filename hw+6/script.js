// Задание 1
// Преобразуйте строку js в верхний регистр JS.

// console.log('строка'.toUpperCase());

//! Задание 2
// Создайте функцию, которая в качестве параметров принимает массив строк и строку. 
// Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, 
// которые начинаются с переданной строки. Регистр символов не должен влиять.
// console.log(n(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
// Пример вызова:
// searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
// searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
// searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

// console.log(textArray(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));



// Задание 3
// Округлите число 32.58884:
// До меньшего целого
// До большего целого
// До ближайшего целого

// console.log(Math.floor(32.58884));
// console.log(Math.ceil(32.58884));
// console.log(Math.round(32.58884));


// Задание 4
// Даны числа 52, 53, 49, 77, 21, 32.
// Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.

// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5
// Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

// function getRandomArbitrary(min, max) {
// 	return Math.round(Math.random() * (max - min) + min);
// }
//  console.log(getRandomArbitrary(10, 1));


// Задание 6
// Напишите функцию, которая будет принимать на вход целое число,
// а возвращать массив случайных целых чисел от 0 до переданного числа.
// Длина массива должна быть в 2 раза меньше переданного числа.
// Пример вызова функции
// getRandomArrNumbers(7); // [6, 2, 7] - массив заполнен случайными числами
// от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего
// числа, получаем 3
// getRandomArrNumbers(12); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// от 0 до 12, длина массива 12 / 2 = 6

// const getRandomArrNumbers = (num) => {
// 	return Array.from(Array(Math.round(num / 2)), () => Math.round(Math.random() * num + 0))
// }
// console.log(getRandomArrNumbers(7));
//  console.log(getRandomArrNumbers(12));

// Задание 7
// Напишите функцию, которая на вход принимает 2 целых числа,
//  а в качестве результата возвращает случайное целое число в этом диапазоне.

// function getRandomArbitrary(min, max) {
// 	return Math.round(Math.random() * (max - min) + min);
// }
// console.log(getRandomArbitrary(10, 1));

// Задание 8
// Выведите в консоль текущую дату в стандартном режиме.
// Используйте один из трех рассмотренных в уроке способов.

// let currentDate = new Date();
// console.log(currentDate);

// Задание 9
// Создайте переменную currentDate и сохраните в нее текущую дату.
// Выведите дату, которая наступит через 73 дня после текущей.
// Подсказка
// Решить эту задачу вам помогут 2 метода даты: getDate() и setDate(),
// один из методов должен быть передан в качестве параметра второму.

// let currentDate = new Date(2023, 7, 3);
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);

// Задание 10
// Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
// Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
// Время: <часы>:<минуты>:<секунды>
// Время, которое будет выведено, также хранится в объекте Date.

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// 	"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date();
// let fullDate = 'Дата: ' + myDate.getDate() +
// 	" " + months[myDate.getMonth()] +
// 	" " + myDate.getFullYear() +
// 	", " + days[myDate.getDay()] +
// 	". Время: " + myDate.getHours() +
// 	":" + myDate.getMinutes() +
// 	":" + myDate.getSeconds();

// console.log(fullDate);


