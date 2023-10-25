function calculateDistance(x1, y1, x2, y2) {
    const result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    return result;
}

console.log(calculateDistance(12, 3, 45, 76));