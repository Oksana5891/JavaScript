let user1 = {
    id: 1,
    name: "John",
    age: 25,
    skills: ["Engineering", "html", "Javascript", "Java"],
    wife: {
        name: "Mary",
        age: 24,
    }
}

console.log(user1);
console.log(user1.id);
console.log(user1["name"]);
console.log(user1.skills[2]);
console.log(user1.wife.name);