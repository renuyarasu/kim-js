// Modern Javascript Crash Course
// The problem of using let

function fruitColors(fruit) {
    switch (fruit) {
        case 'Apple':
            var color = 'Red'
            return color
        case 'Banana':
            var color = 'Yellow'
            return color

        default:
            return 'Other colors';

    }
}
console.log(fruitColors('Apple')); // Red
console.log(fruitColors('Banana')); // Yellow
console.log(fruitColors('test')); // Other Color

