function getArrays(number) {
    const result = [[], []];
    for (let i = 1; i < number; i++) {
        if (i % 3 == 0) {
            result[0].push(i);
        }
        if (i % 5 == 0) {
            result[1].push(i);
        }
    }

    return result;
}
console.log(getArrays(20));
