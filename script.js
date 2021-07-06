// Modern Javascript Crash Course
// var, let  and const

var age = 30;
if (true) {
    var age = 90;
    console.log('Inside: ', age);
}
console.log('Outside: ', age);

// Inside:  90
// Outside:  90