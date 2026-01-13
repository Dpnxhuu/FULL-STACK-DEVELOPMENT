const orderDetails = {
  orderId: 321321,
  food: "Pizza, Burger, Coke",
  customer_location: "Dwarka Sector 9, Noida",
  cost: 749.0,
  customer_name: "Deepanshu",
  restaurant_location: "Delhi",
};

// 1️⃣ Order Place
function orderPlace() {
  console.log(`${orderDetails.cost} of payment is in progress.`);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `Payment of ${orderDetails.cost} is completed, Order confirmed.`
      );
      orderDetails.status = true;
      resolve(orderDetails);
    }, 3000);
  });
}

// 2️⃣ Prepare Order
function prepareOrder() {
  console.log(
    `Preparation of your food ${orderDetails.food} has started.`
  );
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `Preparation of your food is done ${orderDetails.customer_name}.`
      );
      orderDetails.preparation = true;
      resolve(orderDetails);
    }, 3000);
  });
}

// 3️⃣ Pickup Order
function pickupOrder() {
  console.log(
    `Delivery Boy: Heading to pickup your order from ${orderDetails.restaurant_location}.`
  );
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `We have successfully picked up your order ${orderDetails.orderId}.`
      );
      orderDetails.pickup = true;
      resolve(orderDetails);
    }, 3000);
  });
}

// 4️⃣ Deliver Order
function deliverOrder() {
  console.log(
    `On the way to deliver the order at ${orderDetails.customer_location}`
  );
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Delivery of orderID: ${orderDetails.orderId} is successful.`);
      orderDetails.delivery = true;
      resolve(orderDetails);
    }, 3000);
  });
}

// ✅ Call functions in sequence (top to bottom)
orderPlace()
  .then(prepareOrder)
  .then(pickupOrder)
  .then(deliverOrder)
  .then(() => {
    console.log("🎉 Order process completed successfully!");
    console.log(orderDetails);
  });
