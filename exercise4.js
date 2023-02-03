//boolean
var flag = true;
console.log("Value assigned to flag is: " + flag);
//number
var decimal = 6;
console.log("Value assigned to decimal is: " + decimal);
//string
var color = "blue";
console.log("Value assigned to color is: " + color);
//array
var list = [1, 2, 3];
console.log("Value assigned to list is: " + list);
//tuple
var tupleEx = ["hello", 10];
console.log("Value assigned to tupleEx is: " + tupleEx);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var enumEx = Color.Green;
console.log("Value assigned to enumEx is: " + enumEx);
//unknown
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
console.log("Value assigned to notSure is: " + notSure);
//any
var looselyTyped = 4;
console.log("Value assigned to looselyTyped is: " + looselyTyped);
//void
var unusable = undefined;
console.log("Value assigned to unusable is: " + unusable);
//null and undefined
var u = undefined;
var n = null;
console.log("Value assigned to u is: " + undefined + " and the value assigned to n is " + null);
