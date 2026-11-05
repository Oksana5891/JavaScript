let users = [
    {
        id: 1,
        name: "John",
        age: 20,
        status: true,
        skills: ['html', 'js', 'java', 'sql']
    },
    {
        id: 2,
        name: "Max",
        age: 30,
        status: false,
        skills: ['html', 'NextJs', 'java', 'sql']
    },
    {
        id: 3,
        name: "Mary",
        age: 25,
        status: true,
        skills: ['html', 'js', 'java', 'mongoDB']
    },
    {
        id: 4,
        name: "Daniel",
        age: 35,
        status: false,
        skills: ['react', 'js', 'java', 'sql']
    }
];

let user0 = users[0];

console.log(users);
console.log(users[0]);
console.log(user0.age);
console.log(users[1].skills[1]);

let user = users[0];
let skill = user['skills'];
console.log(skill[2]);