// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)

let firstName = 'Oksana';
let middleName = 'Romanivna';
let lastName = 'Kushniaryk';

// let person = `${firstName} ${middleName} ${lastName}`;

let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);