// Задание 1
// настройка программы проверки правильности введенного пароля по следующей алгоритму:

// 1. Создать переменную «пароль» и присвоить ей открытый текст-пароль. (пусть пароль = 'пароль';)
// Создайте вторую переменную и с помощью prompt() спросите у пользователя «Введите пароль».
// Добавить проверку: если пользователь вводит верный пароль, вывести на экран
// "Пароль введен верно".
// Добавить проверку: если пользователь вводит неверный пароль, вывести на экран
// "Пароль введен неправильно"

// постоянный пароль = 'пароль'
// пусть passEntry= prompt('Введите пароль')
// passEntry === пароль? alert("Пароль введен верно"): alert("Пароль введен неправильно")


// Задание 2
// вычисляем переменную и записываем в любом числе. Если с больше 0 и меньше 10, то выведите в консоль «Верно»,
// иначе выведите «Неверно».Проверьте работу скрипта при значении c, равной 0, 10, −3, 2.
// Для решения задачи використовй оператор && (логический И).

// константа с = 5
// с>0 && с<10 ? console.log('верно'): console.log('неверно');

// Задание 3
// настроить две переменные — d и e, запишите в них любые числа.
// иначе выведите «Неверно».Для решения задачи використовй оператор || (логическое ИЛИ).

// константа d = 3
// константа е = 800

// д > 100 || е > 100 ? console.log('верно'): console.log('неверно');

// Задание 4
// Введите код с помощью преобразования типов, чтобы на экран выводилось число 5, а не строка '23':
// пусть а = '2';
// пусть б = '3';
// Код, который нельзя изменить, чтобы изменить дизайн дисплея введите код ниже:
// оповещение(а + б);

// пусть а = 2;
// пусть б = 3;
// оповещение(а + б);

// Задание 5
// Напишите программу, которая определяется по номеру месяца в году, к какому сезону принадлежит этот месяц.
// Например, 1-й месяц (он же январь принадлежит) к сезону «зима».
// Для записи программы використовуйте оператор switch. Для обозначения номера месяца використову переменную monthNumber = 12.
// Просим условия, при котором программа не будет выполняться (количество месяцев больше 13).


// пусть monthNumber = Number(prompt('Введите номер месяца'))

// переключатель (номер месяца) {
// Дело 1:
// случай 2:
// случай 12:
// оповещение('Зима')
// перерыв;
// случай 3:
// случай 4:
// случай 5:
// оповещение('Весна')
// перерыв;
// случай 6:
// случай 7:
// случай 8:
// оповещение('Лето')
// перерыв;
// случай 9:
// случай 10:
// случай 11:
// оповещение('Осень')
// перерыв;
// по умолчанию:
// alert('месяца под таким номером нет')
// }

// Задание 7
// настраиваем программу, проверяющую число на четность/нечетность по следующему алгоритму:

// Создать переменную и присвоить ей значение с помощью метода prompt()«Пожалуйста, введите любое число».
// Добавить проверку: является ли введенное значение числом.
// При вводе строки к составлению приходится либо корректное значение, либо NaN.

// Добавить подтверждение, является ли числом четным или нет.
// Четные поступления на 2 без остатка.

// Добавить проверку: если число четное, то получить сообщение «Число четное» с помощью
// тревога.

// Добавить проверку: если число нечетное, чтобы получить сообщение «Число нечетное» с помощью
// alert.Подсказка: вы можете использовать знак %, чтобы определить полное от деления.


// let num = Number(prompt('Пожалуйста, допустим любое число'))

// если (число % 2 === 0) {
// alert('Число четное')
// }
// иначе если (число % 2 !== 0) {
// alert('Число нечетное')
// } еще {
// оповещение('NaN')
// }





// Задание 8
// Представим, что мы работаем в банке. В нашем банке есть сайт, на который можно зайти с компьютера или телефона, а также мобильное приложение.
// И нам, и клиенту удобно с телефона пользоваться мобильным приложением. Поэтому каждый раз, когда пользователь заходит на сайт с телефона,
// мы должны выдавать ему ссылку на скачивание приложений. Но мы не знаем, iOS или Android он использует.

// Напишите программу, которая пришла, чем пришла (iOS или Android), и вы представили сообщение для варианта.

// Объявите переменную clientOS, которая равна 0 или 1. (0 — iOS, 1 — Android)

// При отработке программы в консоли должно выдаваться сообщение об установке подходящего приложения.

// Например, для iOS появится так:«Установите версию приложения для iOS по ссылке».

// А для Android так:«Установите версию приложения для Android по ссылке».


// let clientOS = Number(prompt('скачать приложение для Android - 1,скачать приложение для iOS - 0'))

// если (клиентОС === 1) {
// alert('Установите версию приложения для Android по ссылке')
// } иначе если (clientOS === 0) {
// alert('Установите версию приложения для Android по ссылке')
// } еще {
// страница alert('Что-то пошло не так. Обновите и попробуйте еще раз')
// }





// Задание 9
// К нам пришли коллеги и рассказали, что нам необходимо знать не только операционную систему телефона, но и год его создания: от этого зависит,
// можно ли приложение для телефона или оно просто не устанавливается.

// Если телефон произведен с 2015 по нынешний год, то приложение будет работать корректно.
// Если телефон выпущен ранее 2015 года, клиенту необходимо посоветовать установить облегченную версию приложения.
// Ваша задача: написать программу, которая выдает сообщение клиента при наличии двух объектов: выявление системы телефона
// (iOS или Android) и года производства.
// Если год выпуска ранее 2015 года, то к сообщению об установке необходимо добавить информацию об облегченной версии.
// Например, для iOS появится так: «Установите облегченную версию приложения для iOS по ссылке».
// А для Android так: «Установите облегченную версию приложения для Android по ссылке».
// При этом для пользователей с телефоном с 2015 года выпуска необходимо вывести обычное предложение об установке приложений.
// Для обозначения года создания використовуйте переменную clientDeviceYear, где необходимо указать 2015 год.
// Важно: вложенность больше двух этажей не ниже (условный оператор внутри условного оператора).


// let clientOS = (prompt('скачать приложение для Android - 1 \n скачать приложение для iOS - 0'))

// let clientDeviceYear = (prompt('скачать на устройство с 2015 года выпуска 1 \n скачать приложение на устройство 2015 года выпуска 0'))

// если (clientOS && clientDeviceYear == 1) {
// alert('Установите версию приложения для Android по ссылке')
// } иначе если (clientOS > clientDeviceYear) {
// alert('Установите облегченную версию приложения для Android по ссылке')
// } else if (clientOS === clientDeviceYear) {
// alert('Установите облегченную версию приложения для iOS по ссылке')
// } иначе если (clientOS < clientDeviceYear) {
// alert('Установите версию приложения для iOS по ссылке')
// } еще {
// страница alert('Что-то пошло не так. Обновите и попробуйте еще раз')
// }

