type Point = {
    x: number
    y: number
}

function printCoord1(pt: Point){

}

printCoord1({
    x: 100,
    y: 200
})

type ID = number | string
function printNewID(id: ID){

}
printNewID(100)
printNewID('hello')

type UserInputSanitizedString = string
function sanitizedInput(str: string): UserInputSanitizedString{
    return str.slice(0,2)
}

let userInput = sanitizedInput("hello")
userInput = 'sssss'