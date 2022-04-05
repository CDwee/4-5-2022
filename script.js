// Started at 4:52 4-5-2022

// Coding Challenge #4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
if (dogSarah.curFood > dogSarah.recFood) {
  console.log('Your dog is eating too much!');
} else if (dogSarah.curFood < dogSarah.recFood) {
  console.log("Your dog isn't eating enough!");
} else if (dogSarah.curFood === dogSarah.recFood) {
  console.log('Your dog is eating perfectly fine!');
}

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch, ownersEatTooLittle);

// 4.
console.log(
  `${ownersEatTooMuch[0]}, ${ownersEatTooMuch[1]}, and ${ownersEatTooMuch[2]}'s dogs all eat too much!`
);
console.log(
  `${ownersEatTooLittle[0]}, ${ownersEatTooLittle[1]}, and ${ownersEatTooLittle[2]}'s dogs all eat too little!`
);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
const okay =
  dogs.curFood > dogs.recFood * 0.9 && dogs.curFood < dogs.recFood * 1.1;
console.log(dogs.some(dog => okay));

// 7.
const goodDog = dogs.filter(dog => okay).flatMap(dog => dog.owners);
console.log(goodDog);

// 8.
const dogWeight = dogs.weight;
console.log(dogWeight);
dogs.sort((a, b) => b - a);
console.log(dogs);

// Ended at 6:58 4-5-2022
