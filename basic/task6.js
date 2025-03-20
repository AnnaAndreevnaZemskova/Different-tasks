/* Написать функцию, которой передаем имя,
и она возраващает приветствие в зависимости от времени
суток (Доброе утро\день\вечер\ночи Иван) */

function getGreetingTime(name) {
  const date = new Date();
  const timeDay = date.getHours();
  if (timeDay <= 6) {
    return `Доброй ночи ${name}`;
  } if (timeDay <= 12) {
    return `Доброе утро ${name}`;
  } if (timeDay <= 18) {
    return `Добрый день ${name}`;
  }
  return `Добрый вечер ${name}`;
}

console.log(getGreetingTime('Иван'));
