let x3: undefined = undefined
let y3: null = null
// let z3: string = undefined

function doSomething(x: string | null){
    if(x == null){

    }else{
        console.log('hello, '+ x.toUpperCase())
    }
}

function liveDangerously(x?:number | null){
    console.log(x!.toFixed)
}