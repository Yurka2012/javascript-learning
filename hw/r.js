// Вивести на екран всі числа від 1 до 10 за допомогою циклу while.

// Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.
// Вивести на екран таблицю множення числа 7 за допомогою циклу for.
// Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.
// Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.
// Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
// За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

    // Task 1: Display all numbers from 1 to 10 using a while loop
    let i = 1;
    while (i <= 10) {
      console.log(i);
      i++;
    }

    // Task 2: Display all even numbers from 2 to 20 using a for loop
    for (let i = 2; i <= 20; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }

    // Task 3: Display a multiplication table for the number 7 using a for loop
    for (let i = 1; i <= 10; i++) {
      console.log(7 + ' x ' + i + ' = ' + (7 * i));
    }

    // Task 4: Display all elements of an array with numbers from 1 to 5 using a while loop
    const arr = [1, 2, 3, 4, 5];
    let j = 0;
    while (j < arr.length) {
      console.log(arr[j]);
      j++;
    }

    // Task 5: Display all numbers from 1 to 10, except for the number 7 using a for loop
    const arr2 = [1, 2, 3, 4, 5, 6, 8, 9, 10];
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] === 7) {
        continue;
      }
      console.log(arr2[i]);
    }

    // Task 6: Display all numbers less than n using a while loop
    function displayNumbersLessThanN(n) {
      let i = 1;
      while (i < n) {
        console.log(i);
        i++;
      }
    }
    displayNumbersLessThanN(20);

    // Task 7: Display all numbers from 1 to 20, except for numbers divisible by 3 using a for loop
    for (let i = 1; i <= 20; i++) {
      if (i % 3 === 0) {
        continue;
      }
      console.log(i);
    }