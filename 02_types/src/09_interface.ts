interface Point2{
    x: number
    y: number
}

function printCoord2(pt: Point2){

}

printCoord2({
    x: 100,
    y: 200
})

//扩展接口
// interface Animal{
//     name: string
// }
// interface Bear extends Animal{
//     honey: boolean
// }

// const bear: Bear = {
//     name: 'winie',
//     honey: true
// }

// console.log(bear.name)
// console.log(bear.honey)

type Animal = {
    name: String
}
type Bear = Animal & {
    honey: boolean
}
const bear: Bear = {
    name: 'winnie',
    honey: true
}

//向现有类型添加字段
interface MyWindow{
    count: number
}
interface MyWindow{
    title: string
}

const w: MyWindow = {
    title: 'hello te',
    count: 1
}
//类型创建不能更改
// type MyWindow2 = {
//     title: string
// }

// type MyWindow2 = {
//     count: number
// }