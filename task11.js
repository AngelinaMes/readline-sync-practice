function calculateEmployeeBonus(salary, performanceRating) {
    if (performanceRating > 8) {
        return salary * 0.2;
    } else {
        return salary * 0.1;
    }
}

console.log(calculateEmployeeBonus(40, 6));
