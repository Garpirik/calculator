const sum = (a,b) =>{
    return a+b;
}
const minus = (a,b) =>{
    return a-b;

}
const divide =  (a,b) =>{
    return Math.round(a/b)
}
const multiply = (a,b) =>{
    return a*b

} 

const addNumber = () =>{

}

describe("Sum Function", () =>{
    test("Sum function", () =>{
        expect(sum).toBeDefined();
   
    })

    test("Minus function", () =>{
        expect(minus).toBeDefined()
    })
    test("Divide function", () =>{
        expect(divide).toBeDefined()
    })


})