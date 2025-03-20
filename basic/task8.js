/* Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение
(Иван имеет возраст 44 и он зрелый).
А также вызови внутри своей функции, функцию из прошлого задания */

import getAgeStatus from './task7.js';

function describePerson(name, age) {
  const status = getAgeStatus(age);
  return `${name} имеет возраст ${age} и он ${status}`;
}

console.log(describePerson('Иван', 44));
