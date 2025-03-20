/* Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке. */

function getDayWeek(num) {
  switch (num) {
    case (1):
      return 'Понедельник';
    case (2):
      return 'Вторник';
    case (3):
      return 'Среда';
    case (4):
      return 'Четверг';
    case (5):
      return 'Пятница';
    case (6):
      return 'Суббота';
    case (7):
      return 'Воскресенье';
    default: return 'Введите число от 1 до 7';
  }
}

console.log(getDayWeek(7));
