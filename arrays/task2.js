/* Сделай функцию, которая принимает массив любых целых чисел,
которая возращает истинну, если хотя бы один элемент нечетный, если все четные, то false. */

function areAllNotEven(arr) {
  for (const num of arr) {
    if (num % 2 !== 0) {
      return true;
    }
  }
  return false;
}

console.log(areAllNotEven([14, 1, 12]));
