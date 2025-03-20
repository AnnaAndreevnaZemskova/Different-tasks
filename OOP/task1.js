/* Реализуйте класс Worker (Работник), который будет иметь
следующие свойства: name (имя), surname (фамилия),
rate (ставка за день работы), days (количество отработанных дней).
Также класс должен иметь метод getSalary(), который будет выводить
зарплату работника. Зарплата - это произведение (умножение) ставки
rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName); //выведет 'Иванов Иван'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31 */
