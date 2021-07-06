// Modern Javascript Crash Course
// Spread operator [...]
odd = [1, 3, 5];
even = [2, 4, 6];
num = [...odd, ...even];
num.sort()
console.log(num); // [ 1, 2, 3, 4, 5, 6 ]