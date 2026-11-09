let cartItems = 0;
let subTotal = 350;
let deliveryCost = 0;
let discount = 0;
if(cartItems <= 0){
    console.log("Please add items in cart ! Empty cart can't be checkOut!");
}
else if(subTotal < 500){
    deliveryCost = subTotal + 50;
    console.log(deliveryCost);
}
else if(subTotal>500 && subTotal<=700){
    deliveryCost = subTotal;
    console.log(`Free Delivery! Total Delivery cost is ${deliveryCost}`);
}

else if(subTotal>= 1200){
    discount = 10/100*subTotal;
    deliveryCost = subTotal - discount;
    console.log(`10% discount applicalble and delivery cost is ${deliveryCost}`);
    //apply 105 discount

}
