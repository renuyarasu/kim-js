// Modern Javascript Crash Course
// Spread operator [...]

const showValues = (...args) => {
    // console.log(...args);
    for (i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
showValues('Apples', 'Bananas', 'Oranges')