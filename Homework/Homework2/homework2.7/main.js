// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).

let time = 60;

if (time >= 0 && time < 15) {
    console.log("it's a first part of hour");
}else if (time >= 15 && time <= 30) {
    console.log("it's a second part of hour");
}else if (time >= 31 && time <= 45) {
    console.log("it's a third part of hour");
}else if (time >= 46 && time <= 59) {
    console.log("it's a fourth part of hour");
}else if (time === 60) {
    console.log("it's an hour");
} else {
    console.log("error");
}
