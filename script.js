// Modern Javascript Crash Course
// Spread operator [...]

boy = {
    name: 'VedaGna',
    weight: 11,
}
boyAge = {
    ...boy,
    age: 5
}
console.log(boyAge.name); // VedaGna
console.log(boyAge.age);// 5