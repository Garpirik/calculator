/**
 * @jest-environment jsdom
 */



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



describe("Function calc", () =>{
    
    //basic operations
    test("Sum function", () =>{
        expect(sum(1,2)).toBe(3);
   
    })

    test("Minus function ", () =>{
        expect(minus(2,1)).toBe(1)
    })

    test("Divide function", () =>{
        expect(divide(4,2)).toBe(2)
    })

    test("Multiply function", () =>{
        expect(multiply(4,2)).toBe(8)
    })

     //plus
    
    test(" Sum function with sum function sum", () =>{
        expect(operation(symboloperation, sum(1,2), sum(3, 2))).toBe(8);
   
    })

    test(" Sum function with minus function sum", () =>{
        expect(operation(symboloperation, sum(1,2), minus(3, 2))).toBe(4);
   
    })

    test(" Sum function with multiply function sum", () =>{
        expect(operation(symboloperation, sum(1,2), multiply(3, 2))).toBe(9);
   
    })
    test(" Sum function with divide function sum" , () =>{
        expect(operation(symboloperation, sum(1,2), divide(4, 2))).toBe(5);
   
    })

    test(" Sum function with percentdivide function sum", () =>{
        expect(operation(symboloperation, sum(1,2), percentdivide(5, 2))).toBe(4);
   
    })

    

   
    test(" Minus function with sum function sum", () =>{
        expect(operation(symboloperation, minus(1,2), sum(3, 2))).toBe(4);
   
    })

    test(" Minus function with minus function sum", () =>{
        expect(operation(symboloperation, minus(1,2), minus(5, 2))).toBe(2);
   
    })

    test(" Minus function with multiply function sum", () =>{
        expect(operation(symboloperation, minus(1,2), multiply(5, 2))).toBe(9);
   
    })

    test(" Minus function with divide function sum", () =>{
        expect(operation(symboloperation, minus(1,2), divide(6, 2))).toBe(2);
   
    })

    test("  Minus function with percentdivide function  sum", () =>{
        expect(operation(symboloperation, minus(1,2), percentdivide(5, 2))).toBe(0);
   
    })




    test(" divide function with sum function sum", () =>{
        expect(operation(symboloperation, divide(2,1), sum(3, 2))).toBe(7);
   
    })
    
    test(" divide function with minus function sum", () =>{
        expect(operation(symboloperation, divide(2,1), minus(5, 2))).toBe(5);
   
    })

    test(" divide function with multiply function sum", () =>{
        expect(operation(symboloperation, divide(2,1), multiply(5, 2))).toBe(12);
   
    })

    test(" divide function with divide function sum", () =>{
        expect(operation(symboloperation, divide(2,1), divide(6, 2))).toBe(5);
   
    })

    test(" divide function with percentdivide function  sum", () =>{
        expect(operation(symboloperation, divide(2,1), percentdivide(5, 2))).toBe(3);
   
    })


    test(" percentdivide function with sum function sum", () =>{
        expect(operation(symboloperation, percentdivide(2,2), sum(3, 2))).toBe(5);
   
    })

    test(" percentdivide function with minus function sum", () =>{
        expect(operation(symboloperation, percentdivide(2,2), minus(5, 2))).toBe(3);
   
    })

    test(" percentdivide function with multiply function sum", () =>{
        expect(operation(symboloperation, percentdivide(2,2), multiply(5, 2))).toBe(10);
   
    })

    test(" percentdivide function with divide function sum", () =>{
        expect(operation(symboloperation, percentdivide(2,2), divide(6, 2))).toBe(3);
   
    })

    test(" percentdivide function with percentdivide function  sum", () =>{
        expect(operation(symboloperation, percentdivide(2,2), percentdivide(5, 2))).toBe(1);
   
    })



     
    test("multiply function with sum function sum", () =>{
        expect(operation(symboloperation, multiply(1,2), sum(3, 2))).toBe(7);
   
    })

    test(" multiply function with minus function sum", () =>{
        expect(operation(symboloperation, multiply(1,2), minus(3, 2))).toBe(3);
   
    })

    test(" multiply function with multiply function sum", () =>{
        expect(operation(symboloperation, multiply(1,2), multiply(3, 2))).toBe(8);
   
    })
    test(" multiply function with divide function sum" , () =>{
        expect(operation(symboloperation, multiply(1,2), divide(4, 2))).toBe(4);
   
    })

    test(" multiply function with percentdivide function sum", () =>{
        expect(operation(symboloperation, multiply(1,2), percentdivide(5, 2))).toBe(3);
   
    })





  //minus



    test(" Sum function with sum function minus", () =>{
        expect(operation("-", sum(1,2), sum(3, 2))).toBe(-2);
   
    })

    test(" Sum function with minus function minus", () =>{
        expect(operation("-", sum(1,2), minus(3, 2))).toBe(2);
   
    })

    test(" Sum function with multiply function minus", () =>{
        expect(operation("-", sum(1,2), multiply(3, 2))).toBe(-3);
   
    })
    test(" Sum function with divide function minus" , () =>{
        expect(operation("-", sum(1,2), divide(4, 2))).toBe(1);
   
    })

    test(" Sum function with percentdivide function minus", () =>{
        expect(operation("-", sum(1,2), percentdivide(5, 2))).toBe(2);
   
    })


  

    test(" Minus function with sum function  minus", () =>{
        expect(operation("-", minus(3,2), sum(3, 2))).toBe(-4);
    })
    test(" Minus function with minus function  minus", () =>{
        expect(operation("-", minus(3,2), minus(3, 2))).toBe(0);
    })

    test(" Minus function with multiply function  minus", () =>{
        expect(operation("-", minus(3,2), multiply(3, 2))).toBe(-5);
    })
    test(" Minus function with divide function  minus", () =>{
        expect(operation("-", minus(3,2), divide(4, 2))).toBe(-1);
    })
    test(" Minus function with percentdivide function  minus", () =>{
        expect(operation("-", minus(3,2), percentdivide(3, 2))).toBe(0);
    })





    test(" Divide function with sum function  minus", () =>{
        expect(operation("-", divide(20,2), sum(3, 2))).toBe(5);
    })
    test(" Divide function with minus function  minus", () =>{
        expect(operation("-", divide(20,2), minus(3, 2))).toBe(9);
    })

    test(" Divide function with multiply function  minus", () =>{
        expect(operation("-", divide(24,2), multiply(3, 2))).toBe(6);
    })
    test(" Divide function with divide function  minus", () =>{
        expect(operation("-", divide(20,2), divide(4, 2))).toBe(8);
    })
    test(" Divide function with percentdivide function  minus", () =>{
        expect(operation("-", divide(20,2), percentdivide(3, 2))).toBe(9);
    })





    test(" percentdivide function with sum function  minus", () =>{
        expect(operation("-", percentdivide(20,2), sum(3, 2))).toBe(-5);
    })
    test(" percentdivide function with minus function  minus", () =>{
        expect(operation("-", percentdivide(20,2), minus(3, 2))).toBe(-1);
    })

    test(" percentdivide function with multiply function  minus", () =>{
        expect(operation("-", percentdivide(24,2), multiply(3, 2))).toBe(-6);
    })
    test(" percentdivide function with divide function  minus", () =>{
        expect(operation("-", percentdivide(20,2), divide(4, 2))).toBe(-2);
    })
    test(" percentdivide function with percentdivide function  minus", () =>{
        expect(operation("-", percentdivide(20,2), percentdivide(3, 2))).toBe(-1);
    })



    test("multiply function with sum function minus", () =>{
        expect(operation("-", multiply(1,2), sum(3, 2))).toBe(-3);
   
    })

    test(" multiply function with minus function minus", () =>{
        expect(operation("-", multiply(1,2), minus(3, 2))).toBe(1);
   
    })

    test(" multiply function with multiply function minus", () =>{
        expect(operation("-", multiply(1,2), multiply(3, 2))).toBe(-4);
   
    })
    test(" multiply function with divide function minus" , () =>{
        expect(operation("-", multiply(1,2), divide(4, 2))).toBe(0);
   
    })

    test(" multiply function with percentdivide function minus", () =>{
        expect(operation("-", multiply(1,2), percentdivide(5, 2))).toBe(1);
   
    })



    //multiply


    
    test(" Sum function with sum function multiply", () =>{
        expect(operation("*", sum(1,2), sum(3, 2))).toBe(15);
   
    })

    test(" Sum function with minus function multiply", () =>{
        expect(operation("*", sum(1,2), minus(3, 2))).toBe(3);
   
    })

    test(" Sum function with multiply function multiply", () =>{
        expect(operation("*", sum(1,2), multiply(3, 2))).toBe(18);
   
    })
    test(" Sum function with divide function multiply" , () =>{
        expect(operation("*", sum(1,2), divide(4, 2))).toBe(6);
   
    })

    test(" Sum function with percentdivide function multiply", () =>{
        expect(operation("*", sum(1,2), percentdivide(5, 2))).toBe(3);
   
    })


  

    test(" Minus function with sum function  multiply", () =>{
        expect(operation("*", minus(3,2), sum(3, 2))).toBe(5);
    })
    test(" Minus function with minus function  multiply", () =>{
        expect(operation("*", minus(3,2), minus(3, 2))).toBe(1);
    })

    test(" Minus function with multiply function  multiply", () =>{
        expect(operation("*", minus(3,2), multiply(3, 2))).toBe(6);
    })
    test(" Minus function with divide function  multiply", () =>{
        expect(operation("*", minus(3,2), divide(4, 2))).toBe(2);
    })
    test(" Minus function with percentdivide function  multiply", () =>{
        expect(operation("*", minus(3,2), percentdivide(3, 2))).toBe(1);
    })





    test(" Divide function with sum function  multiply", () =>{
        expect(operation("*", divide(20,2), sum(3, 2))).toBe(50);
    })
    test(" Divide function with minus function  multiply", () =>{
        expect(operation("*", divide(20,2), minus(3, 2))).toBe(10);
    })

    test(" Divide function with multiply function  multiply", () =>{
        expect(operation("*", divide(24,2), multiply(3, 2))).toBe(72);
    })
    test(" Divide function with divide function  multiply", () =>{
        expect(operation("*", divide(20,2), divide(4, 2))).toBe(20);
    })
    test(" Divide function with percentdivide function  multiply", () =>{
        expect(operation("*", divide(20,2), percentdivide(3, 2))).toBe(10);
    })





    test(" percentdivide function with sum function  multiply", () =>{
        expect(operation("*", percentdivide(20,2), sum(3, 2))).toBe(0);
    })
    test(" percentdivide function with minus function  multiply", () =>{
        expect(operation("*", percentdivide(20,2), minus(3, 2))).toBe(0);
    })

    test(" percentdivide function with multiply function  multiply", () =>{
        expect(operation("*", percentdivide(24,2), multiply(3, 2))).toBe(0);
    })
    test(" percentdivide function with divide function  multiply", () =>{
        expect(operation("*", percentdivide(20,2), divide(4, 2))).toBe(0);
    })
    test(" percentdivide function with percentdivide function  multiply", () =>{
        expect(operation("*", percentdivide(20,2), percentdivide(3, 2))).toBe(0);
    })



    test("multiply function with sum function multiply", () =>{
        expect(operation("*", multiply(1,2), sum(3, 2))).toBe(10);
   
    })

    test(" multiply function with minus function multiply", () =>{
        expect(operation("*", multiply(1,2), minus(3, 2))).toBe(2);
   
    })

    test(" multiply function with multiply function multiply", () =>{
        expect(operation("*", multiply(1,2), multiply(3, 2))).toBe(12);
   
    })
    test(" multiply function with divide function multiply" , () =>{
        expect(operation("*", multiply(1,2), divide(4, 2))).toBe(4);
   
    })

    test(" multiply function with percentdivide function multiply", () =>{
        expect(operation("*", multiply(1,2), percentdivide(5, 2))).toBe(2);
   
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

    //roots ,degrees
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
    //trigonometry
    test("Value pi?", ()=>{
        expect(pi).toBe(3.14)
    })

    test("sin", () =>{
        expect(sin(30)).toBe(-0.9880316240928618)
    })
    test("cos", () =>{
        expect(cos(30)).toBe(0.15425144988758405)
    })
    test("tang", () =>{
        expect(tang(30)).toBe(-6.405331196646276)
    })
    test("arcsin", () =>{
        expect(arcsin(30)).toBe(NaN)
    })
    test("arccos", () =>{
        expect(arccos(30)).toBe(NaN)
    })
    test("arctang", () =>{
        expect(arctang(30)).toBe(1.5374753309166493)
    })

    test("log", () =>{
        expect(log(2)).toBe(0.6931471805599453)
    })
    test("ln", () =>{
        expect(ln(10)).toBe(1)
    })
    test("module", () =>{
        expect(modules(-2)).toBe(2)
    })

    //functions manipulation dom

    test("clear function", () =>{
        document.body.innerHTML = `<div id="test">3+5</div> `
        let getelem = document.getElementById("test")
        expect(clear(getelem)).toBe("")
    })

})