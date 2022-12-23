"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function getSmallPet() {
    let fish = {
        name: 'shark',
        swim: () => {
        }
    };
    let bird = {
        name: 'shark',
        fly: () => {
        }
    };
    return Math.random() > 0.5 ? bird : fish;
}
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
const zoo = [getSmallPet(), getSmallPet(), getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1 = zoo.filter(isFish);
const underWater2 = zoo.filter(isFish);
const underWater3 = zoo.filter((pet) => {
    if (pet.name === 'frog') {
        return false;
    }
    return isFish(pet);
});

console.log(zoo.length)
console.log(underWater1.length)
console.log(underWater2.length)
console.log(underWater3.length)
