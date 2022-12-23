function greet(name: string){
    console.log('hello,'+name.toUpperCase+'!!')
}
greet('42')

function getFavoriteNumber(): number{
    return 26
}
const names = ['xiaoqian','xiaofeng']
names.forEach(function(s){
    console.log(s.toUpperCase)
})

names.forEach(s => {
    console.log(s.toUpperCase)
})