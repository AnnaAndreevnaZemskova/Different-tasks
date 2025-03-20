/* Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста
(1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый

export function ageStatus() {
  for (let i = 1; i <= 100; i++) {
    let status;
    if (i <= 17) {
      status = 'ребенок';
    } else if (i <= 30) {
      status = 'молодой';
    } else if (i <= 55) {
      status = 'зрелый';
    } else {
      status = 'старый';
    }
    console.log(`${i} - ${status}`);
  }
} */

function getAgeStatus(age) {
  if (age <= 17) return 'ребенок';
  if (age <= 30) return 'молодой';
  if (age <= 55) return 'зрелый';
  return 'старый';
}

function printAges() {
  let result = '';
  for (let i = 1; i <= 100; i += 1) {
    const status = getAgeStatus(i);
    result += `${i} - ${status}\n`;
  }
  return result;
}

console.log(printAges());

export default getAgeStatus;
