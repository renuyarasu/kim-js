// Modern Javascript Crash Course
// Destructuring
[a, b] = [1, 2];
console.log(a, b); // 1,2

[a, b, c, ...remain] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(...remain);

console.log(c);