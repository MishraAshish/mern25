// intersection in typescript
// This code demonstrates how to use intersection types in TypeScript.
// Intersection types allow you to combine multiple types into one.
// In this example, we create a type that combines properties from two different interfaces.    
// The combined type will have all properties from both interfaces.
interface User {
    name: string; 
    age: number;
}

interface Address {
    street: string; 
    city: string;
}

// using intersection type to combine User and Address
type UserWithAddress = User & Address;

// Example usage of UserWithAddress type
const user: UserWithAddress = {
    name : "John Doe", // string
    age : 30, // number 
    street : "123 Main St", // string
    city : "Anytown" // string
}

// Type Guards  
// Type guards are used to narrow down the type of a variable.
function isUserWithAddress(obj: any): obj is UserWithAddress {
    return 'name' in obj && 'age' in obj && 'street' in obj && 'city' in obj;
}

// Example usage of type guard
if (isUserWithAddress(user)) {
    console.log(`${user.name} lives at ${user.street}, ${user.city}.`);
}


// Type guards are a way to narrow down the type of a variable within a conditional block. 
// They are essential for working with union types to ensure you are accessing properties 
// that exist on a specific type.

// Example:
// Using the typeof operator to check if a variable is a string before calling a string method.

// TypeScript

function printId(id: string | number) {
if (typeof id === "string") {
// TypeScript knows `id` is a string here
console.log(id.toUpperCase());
} else {
// TypeScript knows `id` is a number here
console.log(id);
}
}

let id2: string | number;
id2 = "abc-123"; // Correcto
id2 = 123; // Correcto
// id2 = true;



printId("Hello");
printId(6.7);
// printId(true); // not valid

// Common type guards include typeof, instanceof, and custom user-defined type guards.

// Discriminated Unions
// Discriminated unions are a powerful feature in TypeScript that allows you to create a union
// of types that share a common property, known as a discriminant. This property helps TypeScript
// to narrow down the type of a variable based on its value.

interface Circle {
    kind: "circle"; // discriminant
    radius: number;
}

interface Square {
    kind: "square"; // discriminant
    sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.sideLength * shape.sideLength;
        default:
            const _exhaustiveCheck: never = shape; // ensures all cases are handled
            return _exhaustiveCheck;
    }
}