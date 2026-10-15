'use strict'
const fn = () => {
    const obj1 = {
    name: 'Miraak' 
    }; 

     //obj1 = {name: 'Alice'}; // This line is commented out because it would throw an error since obj1 is a constant and cannot be reassigned.

    let obj2 = {
        name: 'Andy'
    };
    obj1.name = 'Valik';
    obj2.name = 'Ulfrik';
    obj2 = {
        name: 'Arthas'
    }
    console.log(obj1);
    console.log(obj2);
}
fn();