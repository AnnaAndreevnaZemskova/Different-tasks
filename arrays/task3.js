/* Сделай функцию, которая принимает массив любых целых чисел,
которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15]) */

function getMultiplesOfFive(arr) {
  const newArr = [];
  for (const num of arr) {
    if (num % 5 === 0) {
      newArr.push(num);
    }
  }
  return newArr;
}

console.log(getMultiplesOfFive([1, 2, 5, 12, 15, 21]));
