function calculateTime(distance, speed) {
    const time = distance / speed;
    const hours = Math.floor(time);
    const minutes = Math.round((time * 60) % 60);

    return `${hours}ч.${minutes}м.`;
}

console.log(calculateTime(34, 60));
