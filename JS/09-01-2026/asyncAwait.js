// const data = fetch("https://api.github.com/users").then((response) =>{
//     return response.json();
// }).then((response)=>{
//     console.log(response);
// })

// const { jsx } = require("react/jsx-runtime");

// const { jsx } = require("react/jsx-runtime");

// const data = await fetch("https://api.github.com/users");
// const json = await data.json();
// console.log(json);
// console.log("End");

//Recommended approach -->

// async function github() {
//   try {
    // const response = await fetch("https://api.github.com/users");
//     var json = await response.json();

//     if(!response.ok){
//         throw new Error("Data not found");
//     }

//     for (let user of json) {
//       const parent = document.createElement("div");
//       parent.classList.add("first");
//       const img = document.createElement("img");
//       const p = document.createElement("p");
//       const a = document.createElement("a");
//       parent.append(img, p, a);
//       document.body.append(parent);
//       img.src = user.avatar_url;
//       p.textContent = `Username: ${user.login}`;
//       a.textContent = "Visit Profile";
//       a.href = user.html_url;
//       a.target = "_blank";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// github();

// revision --> date: 13-01-2026

// const fetching = await fetch("https://api.github.com/users");
// const data = await fetching.json();
// console.log(data);

// console.log("Cheers");

const orderDetails = {
  orderId: 321321,
  food: "Pizza, Burger, Coke",
  customer_location: "Dwarka Sector 9, Noida",
  cost: 749.0,
  customer_name: "Deepanshu",
  restaurant_location: "Delhi",
};

function orderPlace() {
  console.log(`${orderDetails.cost} of payment is in progress.`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve();
        console.log(
          `Payment of ${orderDetails.cost} is completed, Order confirmed.`
        );
        orderDetails.status = true;
      } else reject("OrderPlace failed");
    }, 1000);
  });
}

function prepareOrder() {
  console.log(
    `Prepration of your food ${orderDetails.food} has been starting.`
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        console.log(
          `Prepration of your food is done ${orderDetails.customer_name}.`
        );
        orderDetails.prepration = true;
        resolve(orderDetails);
      } else reject("PrepareOrder failed");
    }, 1000);
  });
}

function pickupOrder() {
  console.log(
    `Delivery Boy: We are on the way toh pickup your order from ${orderDetails.restaurant_location}.`
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        console.log(
          `We have successfully picked up your order ${orderDetails.orderId}`
        );
        orderDetails.pickup = true;
        resolve(orderDetails);
      } else reject("Pickup Order failed");
    }, 1000);
  });
}

function deliverOrder() {
  console.log(
    `On the way to deliver you the order at ${orderDetails.customer_location}`
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        console.log(
          `delivery of orderID: ${orderDetails.orderId} is successfull`
        );
        orderDetails.delivery = true;
        resolve(orderDetails);
      } else reject("Delivery failed");
    }, 1000);
  });
}

async function order() {
  try {
    await orderPlace();
    await prepareOrder();
    await pickupOrder();
    await deliverOrder();
    console.log(orderDetails);
  } catch (error) {
    console.log(error);
  }
}
order();
