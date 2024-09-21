let symboloperation = "+"
const pi = 3.14;


const operation = (symbol,a,b) =>{
    switch(symbol){
        case "+": return(sum(a,b))
        case "-": return(minus(a,b));
        case "/": return(divide(a,b));
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

const addNumber = () =>{

}

describe("Function calc", () =>{
    test("Sum function", () =>{
        expect(sum(1,2)).toBe(3);
   
    })

    test("Sum function with minus", () =>{
        expect(operation(symboloperation, sum(1,2), minus(3, 2))).toBe(4);
   
    })

    test("Minus function", () =>{
        expect(minus(2,1)).toBe(1)
    })
    test("Divide function", () =>{
        expect(divide(4,2)).toBe(2)
    })
    test("Multiply function", () =>{
        expect(multiply(4,2)).toBe(8)
    })
    test("Operation sum in operators func", () =>{
        expect(operation(symboloperation,2,3)).toBe(5);
    })
    test("Operation minus in operators func", () =>{
        expect(operation("-",3,2)).toBe(1);
    })
    test("Operation divide in operators func", () =>{
        expect(operation("/",6,3)).toBe(2);
    })
    test("Operation divide percent in operators func", () =>{
        expect(operation("%",6,3)).toBe(0);
    })

    test("Operation multiply in operators func", () =>{
        expect(operation("*",4,2)).toBe(8);
    })


    test("Degree with 1 arg", () =>{
        expect(degree(2,2)).toBe(4);
    })
    test("Degree with 2 args", () =>{
        expect(degree(2,2,2)).toBe(16);
    })
    test("Root with 1 arg", () =>{
        expect(root(4)).toBe(2)
    })

    test("Root with 2 arg", () =>{
        expect(root(2,2)).toBe(2)
    })

    test("Root with 1 arg and pow", () =>{
        expect(rootPow(2,4)).toBe(2)
    })

    test("Root with 2 arg and pow", () =>{
        expect(rootPow(2,2,2)).toBe(2)
    })
    test("Value pi?", ()=>{
        expect(pi).toBe(3.14)
    })
})