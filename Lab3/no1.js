'use strict';


function random(min, max) {
    if(!max) {
        max = min;
        min = 0;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(5, 7));
console.log(random(5));