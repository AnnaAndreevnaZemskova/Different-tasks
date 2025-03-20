/* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5],
и переносит первый элемент массива в конец (например можно засунуть первый элемент в конец,
затем удалить первый элемент), попробуй несколькими способами сделать, если догадаешься */

function getTransfersTheFirstElement(arr) {
  const firstElement = arr.splice(0, 1)[0];
  arr.splice(arr.length, 1, firstElement);
  return arr;
}

console.log(getTransfersTheFirstElement([1, 2, 3, 4, 5]));

/* или

function getTransfersTheFirstElement (arr) {
  arr.push(arr[0]);
  arr.shift();
  return arr;
}

getTransfersTheFirstElement([1,2,3,4,5]) */
