// let user = {
//     id: 1,
//     name: "John",
// }
//
// user.age = 20;
// user['status'] = true;
// console.log(user);
//
// delete user.status;
// console.log(user);

// Примітивні типи даних: number, string, boolean

let a = 100;
let b = a;
b = b + 10; // 110
console.log(a); // 100
console.log(b);

// Референціальні типи:

let user = {name: 'Oksana'};
let user2 = user;
user2.age = 40;
console.log(user2);
console.log(user);