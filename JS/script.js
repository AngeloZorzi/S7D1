//Primo Esercizio//

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}

const user1 = new User("Mario", "Rossi", 23, "Italy");
const user2 = new User("Jack", "Black", 35, "England");

console.log("USER-1", user1);
console.log("USER-2", user2);
console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1));

//Secondo Esercizio//

const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");
const petList = document.getElementById("pet-list");
const pets = [];

class YourPet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  compareOwner(otherOwner) {
    if (this.ownerName === otherOwner.ownerName) {
      return `${this.petName} e ${otherOwner.petName} hanno lo stesso padrone`;
    } else {
      return `${this.petName} e ${otherOwner.petName} non hanno lo stesso padrone`;
    }
  }
}
const form = document.getElementById("user-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("FORM SUBMITTED");
  const owner = new YourPet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );
  console.log("Pet Saved", owner);
  pets.push(owner);
  console.log(pets);
  if (pets.length > 1) {
    console.log(pets[0].compareOwner(pets[1]));
  }

  form.reset();
});
