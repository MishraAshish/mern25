//Spread - is an operator used to spread the individual values of array or object so that we can retrieve it one by one
// without applying any additional indexes

let teamList = ["Eric", "Alec", "Dat", "Tejasvi", "Mike"];

// let firstName = teamList[0]
// let firstName_1 = teamList[1]

//console.log(...teamList)

let User = {
    Name : "Joel",
    Session : "MernStack",
    Products : "Many",
    Mobile : 8989898989
}

let Address = {
    Name : "Joel",
    Home : "Somewhere in california",
    Office : "Somewhere in NYC"
}

//let UserProduct = {User, Address} //alec phegly

// let UserProduct = Object.assign({}, User, Address)

// console.log(UserProduct)

let UserProduct = {...User, ...Address}

Address.Telephone = "89898898989"

//console.log(UserProduct) // eric


User.Name = "Eric"
Address.Name = "Eric"

let User2Product = {...User, ...Address}

//console.log(User2Product)


//Rest - parameter and operator : any array data can be passed as rest parameter in any function, but it should be 
// the last parameter, also when we try to assign values to rest operator it should be the last literal

//tejasvi

//rest should be the last parameter
// function name(p1, p2, p3, ...rest) {
// }

let Sum = (p1, p2, p3)=>p1+p2+p3

let numbers = [1,2,3,4,5,6]

//console.log(Sum(...numbers)) //spreading number's


let LargeSum = function (...numbers) {
    let sum = 0;

    sum = numbers.reduce((prevVal, currentVal, index, array )=>{
                // console.log("currentVal ", currentVal)        
                // console.log("prevVal ", prevVal)

                // console.log("index ", index)
                // console.log("array ", array)


                return prevVal + currentVal; //Sravya+1
    }, 0)

    console.log(sum)

    //return sum
}

LargeSum(...numbers)

LargeSum.apply(null, numbers) //using apply function attached with each function to accept parameters as an array


//Questions :
//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread


//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers
