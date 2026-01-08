function orderPlaced(callBack){
    console.log("Payment is in processing");
    setTimeout(() => {
        console.log("Payment recieved, Order has been placed!");
        callBack();
    }, 3000);
}
function preparingOrder(callBack){
    console.log("Order is preparing");

    setTimeout(() => {
        console.log("Order is prepared and ready to pickup");
        callBack();
    }, 3000);
}
function pickupOrder(callBack){
    console.log("Delivery boy is on way to pickup the order");
    setTimeout(() => {
        console.log("Delivery boy has picked up the order");
        callBack();
    }, 3000);
}
function deliverOrder(){
    console.log("Delivery boy has out for deliver your parecl");
    setTimeout(() => {
        console.log("Delivered successfull");
    }, 3000);
}
orderPlaced(() =>{
    preparingOrder(() => {
        pickupOrder(() =>{
            deliverOrder();
        })
    })
});

//Note: It is known as callBack Hell