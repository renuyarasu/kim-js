// Modern Javascript Crash Course
// Classes
console.clear();
class Animals {
    eat = () => console.log('Dogs are eating...');

}
class Dog extends Animals {
    age = 5;
    weight = 20;
    bark = () => console.log('Bhow..! Bhow..! Bhow..! Bhow..! Bhow..!');
    eat = () => console.log('Dogs are eat meat');
}
puppy = new Dog;
puppy.bark(); // Bhow..! Bhow..! Bhow..! Bhow..! Bhow..!
puppy.eat(); // Dogs are eating...