type Fish2 = {
    name: string
    swim: () => void
}

type Bird2 = {
    name: string
    fly: () => void
}

function isFish(pet: Fish2 | Bird2): pet is Fish2{
    return (pet as Fish2).swim !== undefined
}

function getSmallPet(): Fish2 | Bird2{

    let fish: Fish2 = {
        name: 'shark',
        swim: () => {

        }
    }

    let bird: Bird2 = {
        name: 'shark',
        fly: () => {
            
        }
    }

    return true ? bird : fish
}

let pet = getSmallPet()

if (isFish(pet)) { 
    pet.swim()
} else {
    pet.fly()
}

const zoo: (Fish2 | Bird2)[] = [getSmallPet(), getSmallPet(), getSmallPet(), getSmallPet(), getSmallPet()]
const underWater1: Fish2[] = zoo.filter(isFish)
const underWater2: Fish2[] = zoo.filter(isFish) as Fish2[]

const underWater3: Fish2[] = zoo.filter((pet):pet is Fish2 => {
    if(pet.name === 'frog'){
        return false
    }
    return isFish(pet)
})