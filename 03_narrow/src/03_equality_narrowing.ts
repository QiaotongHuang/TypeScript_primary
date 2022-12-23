function example(x: string | number, y: string | boolean){
    if(x === y){
        x.toUpperCase()
        y.toUpperCase()
    }else{
        console.log(x)
        console.log(y)
    }
}

function printAll3(str: string | string[] | null){
    if(str !== null){
        if(typeof str === 'object'){
            for(const s of str){
                console.log(str)
            }
            
        }else if(typeof str === 'string'){
            console.log(str)
        }else{
            // ...
        }
    }
}

interface Container{
    value: number | null | undefined
}

function muityplyvalue(container: Container, factor: number){
    if(container.value != null){
        console.log(container.value)
        container.value *= factor
    }
}
muityplyvalue({value: 5},6)
muityplyvalue({value: null},6)
muityplyvalue({value: undefined},6)
muityplyvalue({value: 8},6)