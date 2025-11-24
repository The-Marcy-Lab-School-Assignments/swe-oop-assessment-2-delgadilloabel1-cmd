class Phone {
  #password;

  constructor(brand, model, password) {
    this.brand = brand;
    this.model = model;
    this.#password = password;
    this.batteryLevel = 100;
  }

  makeCall(num) {
    this.batteryLevel -= 5;
    return `Calling ${num}`;
  }

  charge() {
    this.batteryLevel = 100;
    return `Phone fully charged`;
  }

  unlock(password) {
    if (password === this.#password) {
      return true;
    } else {
      return false;
    }
  }

  get battery() {
    return this.batteryLevel;
  }
}

class iPhone extends Phone {
  constructor(model, password, numberOfCameras) {
    super("Apple", model, password);
    this.numberOfCameras = numberOfCameras;
    this.batteryLevel = 100;
  }

  makeCall(num) {
    const parentMessage = super.makeCall(num);
    return `${parentMessage} using FaceTime audio`;
  }

  faceTime(name) {
    this.batteryLevel -= 10;
    return `Facetiming ${name}`;
  }
}

// TEST YOUR CODE HERE
// const flipPhone = new Phone("Nokia", "Flip", "TimeToLearn882");
// console.log(flipPhone); // Phone { brand: "Nokia", model: "Flip", batteryLevel: 100 }

// // 1. Making a call and checking battery
// console.log(flipPhone.makeCall("123-456-7890")); // Calling 123-456-7890
// console.log(flipPhone.battery); // 95

// // 2. Charging and checking battery
// console.log(flipPhone.charge("123-456-7890")); // Phone fully charged
// console.log(flipPhone.battery); // 100

// // 3. Unlocking the phone
// console.log(flipPhone.unlock("TimeToLearn882")); // Phone unlocked
// console.log(flipPhone.unlock("TimetoLearn882")); // Invalid Password

// const smartPhone = new iPhone("iPhone 14 Pro", "TimeToLearn882", 3);

// console.log(smartPhone); // iPhone { brand: "Apple", model: "iPhone 14 Pro", numberOfCameras: 3, batteryLevel: 100}

// // 1. Making a call
// console.log(smartPhone.makeCall("555-1234")); // Calling 555-1234 using FaceTime audio
// console.log(smartPhone.batteryLevel); // Should be 95

// // 2. Using the faceTime method
// console.log(smartPhone.faceTime("Alice")); // Facetiming Alice
// console.log(smartPhone.batteryLevel); // Should be 85

// // 3. Charge the phone
// console.log(smartPhone.charge()); // Phone fully charged
// console.log(smartPhone.batteryLevel); // Should be 100

// // 4. Unlock the phone
// console.log(smartPhone.unlock("0000")); // Invalid password
// console.log(smartPhone.unlock("TimeToLearn882")); // true
// DO NOT REMOVE
module.exports = { Phone, iPhone };
