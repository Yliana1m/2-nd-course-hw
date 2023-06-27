

function game1() {
	let numberMonth = Number(prompt('Введите номер месяца'));
	function seasons(num) {
		if (num <= 0 || num >= 13) {
			alert('Вы ввели неверное число');
		} else if (num === 1 || num === 2 || num === 12) {
			alert('Зима');
		} else if (num >= 3 && num <= 5) {
			alert('Весна');
		} else if (num >= 6 && num <= 8) {
			alert('Лето');
		} else {
			alert('Осень');
		}
	}
	seasons(numberMonth);
}


function game2() {
	let rememberWord = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
	rememberWord = rememberWord.sort(() => Math.random() - 0.5);
	alert(rememberWord);
	rememberWord[0] = rememberWord[0].toLowerCase();
	rememberWord[6] = rememberWord[6].toLowerCase();
	let rememberWord1 = (prompt('Введите первое слово'))
	let rememberWord2 = (prompt('Введите последнее слово'))
	function word(rememberWord) {
		if (rememberWord[0] === rememberWord1 && rememberWord[6] === rememberWord2) {
			alert('Поздравляю,вы угадали!');
		} else if (rememberWord[0] === rememberWord1 || rememberWord[6] === rememberWord2) {
			alert('Вы были близки к победе!');
		} else {
			alert('Oба ответа неверные');
		}
	}
	word(rememberWord);
}

function game3() {
	const riddle = {
		guestion: 'Висит груша нельзя скушать',
		correctAnswer: 'лампочка',
		hints: ['это несъедобно', 'это не фрукт'],
	}
	let tries = 2;
	let userAnswer = prompt(riddle.guestion);
	if (userAnswer === riddle.correctAnswer) {
		alert('Правильный ответ');
	}
	while (userAnswer !== riddle.correctAnswer && tries !== 0) {
		let userAnswer = prompt('Подсказка:' + riddle.hints[tries - 1]);
		tries--;

		if (userAnswer === riddle.correctAnswer) {
			alert('Правильный ответ');
			break;
		}
		if (tries === 0) {
			alert('Попытки закончились,попробуй в другой раз.');
		}
	}
}



