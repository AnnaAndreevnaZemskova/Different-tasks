/* Написать функцию, которая принимает пол человека ('M','F') в виде строки,
результат функции возвращает строку "Ваш пол мужской" (или женский)
или же "Ваш пол не опеределен" */

function getDeterminingGender(gender) {
  switch (gender) {
    case 'M':
      return 'Ваш пол мужской';
    case 'F':
      return 'Ваш пол женский';
    default:
      return 'Ваш пол не опеределен';
  }
}

console.log(getDeterminingGender('M'));
