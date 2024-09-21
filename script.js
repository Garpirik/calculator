

let symboloperation = "+"
const pi = 3.14;




const operation = (symbol,a,b) =>{
    switch(symbol){
        case "+": return(sum(a,b))
        case "-": return(minus(a,b));
        case "/": return(sd(a,b));
        case "*": return(multiply(a,b));
        case "%": return(percentdivide(a,b))
    }
}


const sum = (a,b) =>{
    return a+b;
}
const minus = (a,b) =>{
    return a-b;

}
const divide =  (a,b) =>{
    return a/b
}
const percentdivide = (a,b) =>{
    return a%b;
}
const multiply = (a,b) =>{
    return a*b;

} 



const degree =  ( degrees,  ...args) =>{
    if(args.length === 1){    return Math.pow(args[0],degrees)}
    else{
            return Math.pow(operation(symboloperation, args[0],args[1]), degrees)
    }
}   

const root =  ( ...args) =>{
    if(args.length === 1){    return Math.sqrt(args[0])}
    else{
            return Math.sqrt(operation(symboloperation, args[0],args[1]))
    }
}   

const rootPow =  ( degrees , ...args) =>{
    if(args.length === 1){    return Math.pow(args[0],1 / degrees)}
    else{
            return Math.pow(operation(symboloperation, args[0],args[1]), 1/degrees)
    }
}   

const clear = (element) =>{
    return element.innerHTML = ''
}




const sin = (a) =>{
    return Math.sin(a);
}
const cos = (a) =>{
    return Math.cos(a);
}
const tang = (a) =>{
    return Math.tan(a);
}

const arcsin = (a) =>{
    return Math.asin(a);
}
const arccos = (a) =>{
    return Math.acos(a);
}

const arctang = (a) =>{
    return Math.atan(a);
}

const log = (a) =>{
    return Math.log(a);
}
const ln = (a) =>{
    return Math.log10(a);
}

const modules = (a) =>{
    return Math.abs(a);
}