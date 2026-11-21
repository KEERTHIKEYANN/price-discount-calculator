// Product Details
let name = "Samsung Mobile";
let basePrice = 15000;
let discountPercent = 10;
let taxRate = 18;
let stockStatus = "in_stock";

// Function 1: Calculate Discounted Price
function calculateDiscountedPrice(price, discount) {
    return price - (price * discount / 100);
}

// Function 2: Calculate Tax
function calculateTax(price, taxRate) {
    return price * taxRate / 100;
}

// Function 3: Calculate Final Price
function calculateFinalPrice(price, discount, taxRate) {
    let discountedPrice = calculateDiscountedPrice(price, discount);
    let tax = calculateTax(discountedPrice, taxRate);
    return discountedPrice + tax;
}

// Function 4: Free Shipping
function isFreeShipping(finalPrice) {
    if (finalPrice >= 500) {
        return "Free Shipping";
    } else {
        return "Shipping: Rs.49";
    }
}

// Function 5: Get Stock Message
function getStockMessage(status) {
    if (status === "in_stock") {
        return "In Stock";
    } else if (status === "limited") {
        return "Limited Stock";
    } else if (status === "out_of_stock") {
        return "Out of Stock";
    } else {
        return "Invalid Stock Status";
    }
}

// Calculate Values
let discountedPrice = calculateDiscountedPrice(basePrice, discountPercent);
let taxAmount = calculateTax(discountedPrice, taxRate);
let finalPrice = calculateFinalPrice(basePrice, discountPercent, taxRate);
let shipping = isFreeShipping(finalPrice);
let stockMessage = getStockMessage(stockStatus);

// Price Summary
console.log("===== PRICE SUMMARY =====");
console.log("Product Name:", name);
console.log("Base Price: Rs.", basePrice);
console.log("Discount:", discountPercent + "%");
console.log("Discounted Price: Rs.", discountedPrice);
console.log("Tax Amount: Rs.", taxAmount);
console.log("Final Price: Rs.", finalPrice);
console.log("Shipping:", shipping);
console.log("Stock Status:", stockMessage);