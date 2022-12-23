function printAll(str: string | string[] | null){
    if(typeof str === 'object'){
        // for(const s of str){
        //     console.log(str)
        // }
        
    }else if(typeof str === 'string'){
        console.log(str)
    }else{
        // ...
    }
}