// 1 За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач.
// Врахувати, що користувач може натиснути cancel або нічого не ввести
const userName = prompt('What\'s your name?');

if (userName === null || userName === '') {
  alert('Hello, anonym!');
} else {
  alert(`Hello, ${userName}! How are you?`);
}

// 2 Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів.
// Числа вводить користувач, врахувати, що він може ввести невалідні дані
const numberOne = prompt('Enter first digit.');
const numberTwo = prompt('Enter second digit.');

if (
  !isNaN(numberOne) &&
  !isNaN(numberTwo) &&
  numberOne !== null &&
  numberTwo !== null &&
  numberOne !== '' &&
  numberTwo !== ''
) {
  const mathOperation = prompt('Enter math operation you want to execute.');

  let result;
  if (mathOperation === '+') {
    result = +numberOne + +numberTwo;
  } else if (mathOperation === '-') {
    result = numberOne - numberTwo;
  } else if (mathOperation === '*') {
    result = numberOne * numberTwo;
  } else if (mathOperation === '/') {
    if (+numberTwo !== 0) {
      result = numberOne / numberTwo;
    } else {
      alert('Error: Division by zero is not allowed.');
    }
  }
  if (!result) {
    alert(`Something went wrong. Please renew page and try again.`);
  } else {
    alert(`The result of Math operations is: ${result}`);
  }
} else {
  alert('Please enter valid digits in both fields. Renew page and try again.');
}

// 3 Створити скрипт, який отримує від користувача (prompt) два значення і виводить (alert) true, якщо значення рівні, false - якщо ні
const equalCheckMessage = alert(
  'In the next promt enter some value you want to check for equality.'
);
const firstValue = prompt('Please enter first value.');
const secondValue = prompt('Please enter second value.');

if (firstValue === null || secondValue === null) {
  alert('Please enter valid digits in both fields. Renew page and try again.');
} else {
  alert(`The digits are equal: ${firstValue === secondValue}`);
}

// 4 Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” %)
const fifthDigitNumber = Number(prompt('Please enter five digit number.'));

if (
  (fifthDigitNumber >= 10000 && fifthDigitNumber <= 99999) ||
  (fifthDigitNumber <= -10000 && fifthDigitNumber >= -99999)
) {
  const number = Math.abs(fifthDigitNumber);
  const fifthDigit = number % 10;
  const fourthDigit = Math.floor((number % 100) / 10);
  const thirdDigit = Math.floor((number % 1000) / 100);
  const secondDigit = Math.floor((number % 10000) / 1000);
  const firstDigit = Math.floor(number / 10000);

  alert(
    `${
      fifthDigitNumber < 0 ? '-' : ''
    } ${firstDigit} ${secondDigit} ${thirdDigit} ${fourthDigit} ${fifthDigit}`
  );
} else {
  alert('Enter valid five digit number.');
}
