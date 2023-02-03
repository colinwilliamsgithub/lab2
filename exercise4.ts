//boolean
let flag: boolean = true;
console.log("Value assigned to flag is: " + flag);

//number
let decimal: number = 6;
console.log("Value assigned to decimal is: " + decimal);

//string
let color: string = "blue";
console.log("Value assigned to color is: " + color);

//array
let list: number[] = [1, 2, 3];
console.log("Value assigned to list is: " + list);

//tuple
let tupleEx: [string, number] = ["hello", 10];
console.log("Value assigned to tupleEx is: " + tupleEx);

//enum
enum Color {
    Red,
    Green,
    Blue,
  }
let enumEx: Color = Color.Green;
console.log("Value assigned to enumEx is: " + enumEx);

//unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false;
console.log("Value assigned to notSure is: " + notSure);

//any
let looselyTyped: any = 4;
console.log("Value assigned to looselyTyped is: " + looselyTyped);

//void
let unusable: void = undefined;
console.log("Value assigned to unusable is: " + unusable);

//null and undefined
let u: undefined = undefined;
let n: null = null;
console.log("Value assigned to u is: " + undefined + " and the value assigned to n is " + null);