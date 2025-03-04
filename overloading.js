//overloading - is the oops feature which on the basis of different parameters gives different variation of a function
// a same name function can be used in different ways by just changing the number and type of parameters

//however there is no concept of overloading in JS functions instead we have over-writing concept where the last function
//definition replaces all in top and gets hoisted as well

console.log(Sum(5,6)) // 11
function Sum(p1, p2) {
    console.log("2 Params")
    return p1+p2
}

console.log(Sum(5,6)) // 11
function Sum(p1, p2, p3) {
    console.log("3 Params")
    return p1+p2+p3
}
console.log(Sum(5,6,5)) // 16

console.log(Sum()) // 0

//the hoisted function
function Sum() {
    console.log("no params accepted")
    return 0
}
console.log(Sum(5,5)) // 10

console.log(Sum(5,5,5,5)) //

var Sum = function(p1, p2, p3, p4) {
    console.log("function epxression")
    return p1+p2+p3+p4
}
console.log(Sum(5,5,5,5)) // 



//create and example of overloading where you can attend 3 sessions on a day and 4 sessions on another
//print name of the sessions