//primitive

//7 types : String, Number, Boolean, null, undefined, Symbol, Bigint
const score = 100
const scoreValue = 300.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber =656098458783455n

//reference (non primitive)

//array, objects, Functions

const heroes = ["shaktiman", "nagraj", "doga"];

let mtObj = {
    name: "chandarmauli",
    age: 22
}

const myFuction = function () {
    console.log("Hello JS learner");
}

console.log(typeof myFuction);

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+


// Stack ( Primitive), Heap (Non -Primitive)

let myName = "Stranger"
