# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded.

As a quick guide, check the following before submitting:

- [x] Answered all parts of every question
- [x] No typos or grammar mistakes (use grammarly!)
- [x] Accurately uses relevant technical terminology
- [x] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [x] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming?

Provide a code snippet to illustrate _encapsulation_.

## Response 1

Encapsulation is the idea of keeping related **data (properties)** and the **functions (methods)** that work on that data all inside one unit, a **class**.  
It also gives you control over how that data is **accessed or changed**. Instead of everything being public, you can **hide certain details** and only expose what you want other parts of the program to interact with.

This makes your code more organized and protects your data from being changed in ways it shouldn’t be.

```js
Example:
class BankAccount {
  #balance = 0; // private property

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Not enough funds");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();

account.deposit(100);
account.withdraw(30);

console.log(account.getBalance()); // 70
```

In this example, the `#balance` is **hidden from the outside world**. You can’t change it directly, you have to use the methods provided.

That’s **encapsulation** in action.

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

The `this` keyword refers to the **object that is currently executing the function**. Its value depends on **how and where** the function is called.  
In a class constructor, `this` refers to the **new instance** being created. Inside other class methods, `this` still refers to that same instance.

`this` is useful because it allows each instance of a class to **maintain and update its own data**. Instead of writing separate functions or variables for each object, `this` lets you write reusable methods that automatically work on whichever instance calls them.

In the code snippet, `this` refers to the individual `Counter` instance. So inside `increment()`, `this.count++` updates the `count` property of **whichever object calls the method**.

- When you call `counterA.increment()`, `this` refers to `counterA`, so its count increases.
- When you call `counterB.increment()`, `this` refers to `counterB`, so its count increases independently.

This is why the final output logs different values for `counterA.count` and `counterB.count`.

---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

**Poly-** means _many_  
**Morph-** means _to change form_

Together, **polymorphism** refers to the ability of an object or method to take on **many forms** or show **different behaviors** depending on the context.

In OOP, a single function name or operator can behave differently depending on the object it’s being used on. This is most clearly seen through **method overriding**.

**Inheritance** is the most common way to achieve polymorphism. When a parent class is extended by a subclass, polymorphism is guaranteed:  
the subclass inherits the parent’s properties and methods, but can also **override** those methods to provide its own unique implementation.

For example:  
All `Dog` are `Pet`, but not all `Pet` are `Dog`.

If the `Pet` class has a `sleep()` method, the `Dog` class can override it to create a specific “dog sleep” behavior (like snoring loudly), while a `Cat` class could implement a different “cat sleep” behavior (like curling up on a shelf).

Calling `sleep()` on any of these objects will automatically run the correct version based on the object’s type.  
This is the power of **polymorphism**.

**Example:**

```js
class Pet {
  constructor(name, energyLevel, happinessLevel) {
    this.name = name;
    this.energyLevel = energyLevel;
    this.happinessLevel = happinessLevel;
  }

  // This is the base method
  sleep() {
    this.energyLevel += 10;
    return `${this.name} slept and is fully recharged! Energy level: ${this.energyLevel}`;
  }
}

class Dog extends Pet {
  constructor(name, energyLevel, happinessLevel) {
    // Inherit properties from the Pet class
    super(name, energyLevel, happinessLevel);
  }

  // The Dog class provides its own unique implementation of the inherited sleep() method.
  sleep() {
    this.energyLevel += 15; // Dogs sleep deeper!
    return `${this.name} slept loudly and is super-charged! Energy level: ${this.energyLevel}`;
  }
}

// Testing
const pet1 = new Pet("Craig", 10, 3);
console.log(pet1.sleep()); // This calls the sleep() method from the Pet class

const dog1 = new Dog("Canelo", 10, 5);
console.log(dog1.sleep()); // This calls the overridden sleep() method from the Dog class
```

---

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4

**Part A:**

I would create a **parent class** named `Pet`, and the specific animal types (`Cat`, `Dog`, and `Bird`) would be the **child classes** (subclasses) that extend `Pet`.  
The `Pet` parent class would contain all the **common properties and methods** shared by all animals: `name`, `energyLevel`, `happinessLevel`, and the `sleep()` method.

Each child class (`Cat`, `Dog`, `Bird`) would then inherit these common features from `Pet` and would only need to define its **unique ability**:

- `Cat.hunt()`
- `Dog.chase()`
- `Bird.fly()`

All instances would still be fundamentally a `Pet`, allowing them to be treated interchangeably where common actions are concerned.

**Part B:**

Using **inheritance** for this example offers major advantages, especially **code reuse** and **easier debugging**.

- **Code Reuse:**  
  Instead of defining the properties (`name`, `energyLevel`, `happinessLevel`) and the `sleep()` method three separate times (once for each animal class), we only define them **once** in the parent `Pet` class. This makes the code cleaner, reduces mistakes, and keeps behavior consistent across all pet types.

- **Debugging:**  
  If there is a bug or a needed change to a shared feature (like how `sleep()` works), you only need to update the code **in one place**—the `Pet` class. You don’t have to go through all three child classes, which makes debugging much simpler and faster.
