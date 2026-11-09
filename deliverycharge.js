
// deliveryCharge(distance)
// Conditions:
// 0–5 km → ₹50
// 6–15 km → ₹100

// 15 km → ₹200

// If distance is 0 or negative → "Invalid distance"

// const distance = 14
// if (distance === 0 || distance < 0){
//     console.log("Invalid Input")
// }
// else if (distance === 5 || distance < 5){
//     console.log("Rs 50")
// }
// else if(distance < 15){
//     console.log("Rs 100")
// }
// else if(distance === 15){
//     console.log("Rs 200")
// }
// else {
//     console.log("Invalid Input")
// }


function deliveryChargeCalculator(distance){
    if (distance <= 0){
    return "Invalid Input"
    }
    else if (distance <= 5){
        return "Rs 50"
    }
    else if(distance <= 15){
        return "Rs 100"
    }
    else {
        return "Rs 200"
    }

}
console.log(deliveryChargeCalculator(25))