// Задание 1
// Дан массив: [1, 5, 4, 10, 0, 3].
// Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.
// После вывода значения 10 в консоль цикл должен прекратить свою работу.

// const numbs = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbs.length; i++) {
// 	if (numbs[i] >= 10) break;
// 	console.log(numbs[i]);
// }


// Задание 2
// Дан массив:[1, 5, 4, 10, 0, 3].
// Найдите позицию (индекс) числа 4 в этом массиве.
// Подсказка: Задачу можно решить методом перебора элементов или используя метод массива indexOf.

// const numbs = [1, 5, 4, 10, 0, 3]
// console.log(numbs.indexOf(4));


// Задание 3
// Дан массив чисел:[1, 3, 5, 10, 20].
// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

// const numbs = [1, 3, 5, 10, 20]
// console.log(numbs.join(' '))

// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида:[[1, 1, 1], [1, 1, 1], [1, 1, 1]].

// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [0];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = 1;
// 	}
// }
// console.log(arr);

// Задание 5
//  Дан массив:[1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

// let numbs = [1, 1, 1]
// numbs.push(2,2,2)
// console.log(numbs);

// Задание 6
// Дан массив:[9, 8, 7, 'a', 6, 5].С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива.
//  В результате работы программы вывести массив, состоящий из цифр.

// let numbs = [9, 8, 7, 'a', 6, 5]
// numbs.sort()
// numbs.pop()
// console.log(numbs);

// Задание 7
// Дан массив:[9, 8, 7, 6, 5].
// Попросить пользователя угадать число (использовать prompt). Если значение, которое ввёл пользователь, есть в массиве,
// вывести в alert «Угадал», в противном случае вывести «Не угадал».

// const numbs = [9, 8, 7, 6, 5]
// const answer = +prompt('угадай число')
// let resalt = numbs.find((el) => el === answer)? alert ('Угадал') : alert ('Не угадал')

// Задание 8
// Дана строка:'abcdef'.
// Необходимо, чтобы программа вывела в консоль 'fedcba'.

// let str = 'abcdef'
// str = str.split('')
// str = str.reverse()
// console.log(str.join(''));

// Задание 9
// Дан массив:[[1, 2, 3,],[4, 5, 6]].
// Выведите в консоль массив вида:[1, 2, 3, 4, 5, 6] .


// const arr = [[1, 2, 3,], [4, 5, 6]];
// console.log(arr.flat());


// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10).
// Переберите его с помощью цикла for и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// Следующий элемент массива можно получить с помощью индекса: i + 1. Обратите внимание, что у последнего элемента нет следующего.

// let myArray = [];
// for (let i = 0; i < 5; i++) {
// 	myArray.push(Math.floor(Math.random() * 10) + 1);
// }
// console.log(myArray);

// const arr = myArray;
// for (let i = 0; i < arr.length - 1; i++) {
// 	console.log(arr[i] + arr[i + 1]);
// }

// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.
// Подсказка для решения задачи используйте map()

// let myArray = [];
// for (let i = 0; i < 5; i++) {
// 	myArray.push(Math.floor(Math.random() * 10) + 1);
// }
// console.log(myArray);

// const array = myArray.map(el => el ** 2)
// console.log(array);

// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длинны слов.
// Пример вызова: getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);  [5, 0, 4, 19, 5]

// const getLengthWords = source => source.map(str => str.length)

// console.log(getLengthWords(['слово', 'предложение', 'буква']))

// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив содержащий только отрицательные значения.

// const array = []

// function filterPositive(array) {
// 	return array.filter(el => el < 0)
// }
// console.log(filterPositive([-1, 0, 5, -10, 56]));
// console.log(filterPositive([-25, 25, 0, -1000, -2]));


// Необязательные к решению задания
// Ниже вас ждет два необязательных задания.
// Чтобы их решить, вам нужно провести рисеч (или поиск) в открытых источниках через поисковики.
// Если вы не справитесь с этими заданиями на этом уроке, рекомендуем вернуться к ним после изучения урока
// "Встроенные объекты" и приступить к решению ещё раз.

// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода
// Math.random() в диапазоне от 0 до 10.
// В данном массиве найдите все четные значения и добавьте их в новый массив.
// Результат работы программы необходимо вывести в консоль — это будет два массива: исходный массив и массив с четными значениями.


// let myArray = [];
// for (let i = 0; i < 10; i++) {
// 	myArray.push(Math.floor(Math.random() * 10) + 0);
// }
// console.log(myArray);

// const values = myArray
// function evenValues(values) {
// 	return values.filter(el => el % 2 === 0)
// }
// console.log(evenValues(values));

// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью
// Math.random() в диапазоне от 1 до 10.
// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.
// Для получения среднего арифметического необходимо все значения массива сложить и разделить на количество элементов в массиве.


// let myArray = [];
// for (let i = 0; i < 6; i++) {
// 	myArray.push(Math.floor(Math.random() * 10) + 1);
// }
// console.log(myArray);

// let sum = myArray.reduce((a, b) => (a + b)) / myArray.length;
// console.log(sum);