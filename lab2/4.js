'use strict'

const range = (start, end) => {
    let length = end - start + 1;
    if (length <= 0) {
        return [Error];
    }
    const result = [];
    for (let i = start; i < start + length; i = i + 2) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }
    return result;
}
console.log(range(15, 30));