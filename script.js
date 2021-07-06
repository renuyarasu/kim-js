// Modern Javascript Crash Course
// The problem of using let

function fruitColors(fruit) {
    switch (fruit) {
        case 'Apple': {
            let color = 'Red'
            return color
        }
        case 'Banana': {
            let color = 'Yellow'
            return color
        }
        default:
            return 'Other colors';

    }
}
console.log(fruitColors('Apple'));
console.log(fruitColors('Banana'));
console.log(fruitColors('Test'));