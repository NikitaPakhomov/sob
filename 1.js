function getArrays(number) {
    const result = [[], []];
    let sign = 1;
    if (number < 0) {
        sign = -1;
    }
    for (let i = 1; i <= Math.abs(number); i++) {
        if (i % 3 === 0) {
            result[0].push(i * sign);
        }
        if (i % 5 === 0) {
            result[1].push(i * sign);
        }
    }
    return result;
}


