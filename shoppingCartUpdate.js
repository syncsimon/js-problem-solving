// Q13. Shopping cart update
// Start with cart = ["shirt", "shoes", "watch"].
// - Add "cap" to the end.
// - Remove "shoes".
// - Check whether "watch" exists.
// - Create a new array containing the updated cart plus "wallet" using the spread operator.
// - Print all relevant arrays.

const cart = ["shirt" , "shoes" , "watch"];
cart.push("cap");
console.log(cart);
const removeArr = cart.splice(1,1)
console.log(cart);

const findWatch = cart.find((w) => w === "watch");

if(findWatch === "watch"){
    console.log("yes")
}
else{
    console.log("no");
}