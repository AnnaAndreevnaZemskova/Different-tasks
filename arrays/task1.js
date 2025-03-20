/* Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну,
если все элементы четные, если бы хотя бы один элемент не четный, то false. */

function areAllEven(arr) {
  for (const num of arr) {
    if (num % 2 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(areAllEven([14, 1, 12]));
