// if (true) {
//     console.log("Hello World!");
// }

// let color = 'red';
// if (color === 'green') {
//     console.log('stop')
// } else {
//     console.log('Go!')
// }

// let age = +prompt("What is your age?"); // + -> перетворення з string в number
// if (age >= 18) {
//     console.log('Welcome to the website!');
// } else {
//     console.log("Stop!");
// }

// let color = prompt("What is your favorite color?");
// if (color === "red")
//     { console.log('stop');
// } else if (color === "green") {
//    if (confirm("Does the road clear?")) {
//        console.log('go');
//    } else {
//        console.log('just wait');
//    }
// } else if (color === "yellow") {
//     console.log('wait');
// } else {
//     console.log('error');
// }

let color = prompt("What is your favorite color?");
let isRoadClear = confirm('Does the road clear')
if (color === "red")
{ console.log('stop');
} else if (color === "green" && isRoadClear) {
    console.log('go');
} else if (color === "yellow") {
    console.log('wait');
} else {
    console.log('error');
}