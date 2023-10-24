function calculateRectangleProperties(width, height) {
    var perimeter = 2 * width + 2 * height;
    var area = width * height;

    var result = {
        perimeter: perimeter,
        area: area
    };

    return result;
}

console.log(calculateRectangleProperties(20, 35));
