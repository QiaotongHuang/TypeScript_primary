let testString = 'hello world'
testString = 'nihao'

const constantString = 'hello world'
// constantString = ''

let x2 : 'hello' = 'hello'
// x = 'world'

function printText(s: string, alignment: 'left' | 'right' | 'center'){}

printText('hello','left')
// printText('hello','center2')

function compare(a: string,b: string): -1 | 0 | 1{
    return a==b ? 0 : a > b ? 1 : -1
}

interface Options{
    width: number
}
function configure(x: Options | 'auto' ){

}

configure('auto')
// configure('aotumatic')
configure({width: 3})

let b1: true = true
let b2:false = false

const obj2 = {
    count: 0
}
if(true){
    obj2.count = 1
}

function handleRequest(url: string, method: 'GET' | 'POST'){

}

const req = {
    url : 'https://examples.com',
    method: 'GET'
} as const
handleRequest(req.url, req.method) 