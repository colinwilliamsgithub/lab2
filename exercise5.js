//Part A
function myFunction(value) {
    return value.length;
}
console.log(myFunction("My Name"));
//Part B
function myFunction2(value) {
    return value.replace(" ", "").length;
}
console.log(myFunction2("My Name"));
//Part C
function myFunction3(value, spaces) {
    if (spaces) {
        return value.length;
    }
    else {
        return value.replace(" ", "").length;
    }
}
console.log("The length of string in text " + myFunction3("My Name"));
