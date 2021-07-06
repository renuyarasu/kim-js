// Modern Javascript Crash Course
// let, let  and const

let age = 30;
if (true) {
    let age = 90;
    console.log('Inside: ', age);
}
console.log('Outside: ', age);

// Inside:  90
// Outside:  30