'use strict'

function ipToNumber(ip = "85.114.202.154") {
    const parts = ip.split(".").map(Number);

    return parts.reduce((acc, byte, index) => {
        return acc + (byte << (24 - index * 8));
    }, 0);
}

console.log(ipToNumber());
console.log(ipToNumber("165.225.133.150"));