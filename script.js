// Modern Javascript Crash Course
// Classes
class Animal {
    eat = () => console.log('Dogs are eating...');
}
class Dog extends Animal {
    weight = 20;
    age = 5;
    bark = () => console.log('Bhow...! Bhow...! Bhow...! Bhow...!');
}
puppy = new Dog();
puppy.bark();
puppy.eat();