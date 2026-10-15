'use strict'
const database = [
    { name: 'Miraak', phone:  '+380963744567' },
    { name: 'Thrall', phone:  '+380996767432' },
    { name: 'Muradin', phone: '+380993355445' },
    { name: 'Andy', phone:    '+380993463671' },
    { name: 'Valik', phone:   '+380997899994' }
]

const findPhoneByName = (name) => {
    for (let i = 0; i < database.length; i++) {
        if (database[i].name === name) {
            return database[i].phone;
        }
    } 
    return 'Not found';
}

console.log(findPhoneByName('Muradin'));