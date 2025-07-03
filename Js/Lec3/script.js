let cart = ["shoes", "shirts", "wallets", "belts", "jeans"];

function orderDetials(cart){
    // 1. Total no of products
    let totalProducts = cart.length;

    // 2. Total Amount of Products nos * 1000
    let totalAmount = totalProducts * 1000;

    return {
        totalProducts,
        totalAmount
    };
}

function orderSummary(cart){
    // total price and total products
    const {totalProducts, totalAmount} = orderDetials(cart);

    // then generate orderId
    const orderId = "ORD" + Math.floor(100000 + Math.random() * 900000);

    return {
        orderId,
        totalProducts,
        totalAmount
    }
}

function paymentGateway(cart){
    // order Id, product details and price .. Payment is successful
    const summary = orderSummary(cart);
    console.log("Redirecting to payment gatway...");
    console.log(`Order ID: ${summary.orderId}`);
    console.log(`Amount to be paid : ${summary.totalAmount}`);
    console.log("Payment Successful");

    return summary;
}

function successfulOrder(cart){
    // it will tell the details about the payment product name and everything
    const summary = paymentGateway(cart);

    console.log("\nOrder Confirmed!");
    console.log(`Order ID: ${summary.orderId}`);
    console.log("Items:");
    cart.forEach(items => console.log(`-${items}: 1000`));

    console.log(`Total Products: ${summary.totalProducts}`);
    console.log(`Total Amount Paid: ${summary.totalAmount}`);
}

successfulOrder(cart);



// Flow Diagram

    //      ┌───────────────────────────┐
    //      │     cart (array)          │
    //      └──────────┬────────────────┘
    //                 ↓
    //  ┌──────────── successfulOrder(cart) ─────────────┐
    //  │                                                ↓
    //  │        ┌──────────── paymentGateway(cart) ──────────────┐
    //  │        │                                                ↓
    //  │        │     ┌─────────── orderSummary(cart) ───────────┐
    //  │        │     │                                          ↓
    //  │        │     │        ┌──────── orderDetails(cart) ────────┐
    //  │        │     │        │                                    │
    //  │        │     │        │  totalProducts = cart.length       │
    //  │        │     │        │  totalAmount = totalProducts × 1000│
    //  │        │     │        │  return {totalProducts, totalAmount}
    //  │        │     │        └────────────────────────────────────┘
    //  │        │     │
    //  │        │     │ Generate random orderId
    //  │        │     │ return {orderId, totalProducts, totalAmount}
    //  │        │     └─────────────────────────────────────────────┘
    //  │        │
    //  │        │ Console logs payment messages
    //  │        │ return summary
    //  │        └─────────────────────────────────────────────┘
    //  │
    //  │ Console logs "Order Confirmed"
    //  │ Console logs cart items and summary
    //  └────────────────────────────────────────────────────────┘

