/* Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст
([{name: 'Иван', age: 23},...]) и возвращает массив,
где каждый элемент представляет из себя строку
"Имя: Иван, возвраст: 23". */

function formatEmployees(employees) {
  const result = [];
  for (let i = 0; i < employees.length; i += 1) {
    const employee = employees[i];
    result.push(`Имя: ${employee.name}, возраст: ${employee.age}`);
  }
  return result;
}

console.log(formatEmployees([{ name: 'Иван', age: 23 }, { name: 'Mapa', age: 99 }]));
