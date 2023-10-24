function calculateDiscount(price, discountPercentage) {
    var disscount = (price * discountPercentage) / 100;
    var disprice = price - disscount;

    return disprice;
}

console.log(calculateDiscount(90, 2));