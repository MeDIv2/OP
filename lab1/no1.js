const values = [true, "hello", 27, 12, false, "Miraak", 100, "true"];
const types = {
    number: 0,
    string: 0,
    boolean: 0
};

for (const val of values) {
    const l = typeof val;
    types[l] += 1;
}

console.log("Підрахунок з готовими ключами:");
console.log(types);

const typess = {};
for (const val of values) {
    
    const l = typeof val;
    
    if (typess[l] === undefined) {
         typess[l] = 0;
    }
    typess[l] += 1;
}
console.log("Підрахунок з динамічними ключами:");
console.log(typess);