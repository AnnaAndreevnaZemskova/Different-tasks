/* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5]
и функция возращает среднее арифметическое, (округлить результат до десятых) */

import round from 'lodash/round.js';

function arithmeticMean(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  const result = sum / arr.length;
  const roundingUp = round(result, 1);
  return roundingUp;
}

console.log(arithmeticMean([1, 2, 3, 4, 6]));
