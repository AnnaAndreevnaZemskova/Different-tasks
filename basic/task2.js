/* Написать функцию, которой передаем имя, фамилия и возраст,
и получаем строку "Привет Иван Петров с возрастом 17 лет"
(только здесь данные, которые были переданы в функцию) */

function getGreeting(name, surname, age) {
  let age1;
  if (age.endsWith('1')) {
    age1 = 'лет';
  } else if (age.endsWith('2') || age.endsWith('3') || age.endsWith('4')) {
    age1 = 'года';
  } else {
    age1 = 'лет';
  }
  return `Привет ${name} ${surname} с возрастом ${age} ${age1}`;
}

console.log(getGreeting('Иван', 'Петров', '27'));
