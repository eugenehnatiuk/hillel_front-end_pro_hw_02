// За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач.
// Врахувати, що користувач може натиснути cancel або нічого не ввести
const userName = prompt("What's your name?");

if (userName === undefined || userName === null || userName === '') {
  alert('Hello, anonym!');
} else {
  alert(`Hello, ${userName}! How are you?`);
}

// Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів.
// Числа вводить користувач, врахувати, що він може ввести невалідні дані
const numberOne = prompt('Enter first digit');
const numberTwo = prompt('Enter second digit');

if (!isNaN(numberOne) && !isNaN(numberTwo)) {
  const mathOperation = prompt('Enter math operation you want to execute');

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
  if (result === undefined) {
    alert(`Something went wrong. Please renew page and try again.`);
  } else {
    alert(`The result of Math operations is: ${result}`);
  }
} else {
  alert('Please enter valid digits in both fields. Renew page and try again.');
}

// Створити скрипт, який отримує від користувача (prompt) два значення і виводить (alert) true, якщо значення рівні, false - якщо ні
const equalCheckMessage = alert(
  'In the next promt enter digits you want to check for equality.'
);

const firstDigit = prompt('Please enter first digit.');
const secondDigit = prompt('Please enter second digit.');

alert(`The digits are equal: ${firstDigit === secondDigit}`);

// Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” %)
const fifthDigitNumber = prompt('Please enter five digits number');
if (!isNaN(fifthDigitNumber) && fifthDigitNumber.length === 5) {
  let fifthDigit = fifthDigitNumber % 10;
  let fourthDigit = Math.floor((fifthDigitNumber % 100) / 10);
  let thirdDigit = Math.floor((fifthDigitNumber % 1000) / 100);
  let secondDigit = Math.floor((fifthDigitNumber % 10000) / 1000);
  let firstDigit = Math.floor(fifthDigitNumber / 10000);

  alert(
    `${firstDigit} ${secondDigit} ${thirdDigit} ${fourthDigit} ${fifthDigit}`
  );
} else {
  alert('Enter valid five digit number');
}
