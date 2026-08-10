

function calculateOrder(total , isMember , couponCode){
    let discount;
    //total
    if (total>=5000){
        discount = 20/100*total
        total -= discount
    }
    else if (total >= 2000){
        discount = 10/100*total
        total -= discount
    }
    else {
        console.log("no discount")
    }
    //membership
    if (isMember){
        discount = 5/100*total
        total -= discount
    }
    else{
        console.log("No membership discount available!")
    }
    console.log(`Hence total Payable amount after membership is : ${total}`)

    //coupon code
    
    if(total >= 3000 && couponCode === "SAVE500"){
        total -=500
        console.log("Coupon code applied , You saved 500!")
    }
    
    else{
        console.log("no coupon code")
    }
    // shipping
    if (total >= 2000){
        console.log("Your shipping is free!")
        console.log(`Your total bill : ${total}`)
    }
    else{
        total +=100
        console.log(`Hence total Payable amount after shipping charges are : ${total}`)
    
    }
    return total;

}

console.log(calculateOrder(10000, true ,"SAVE500"));