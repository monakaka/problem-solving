const phone = {
    type: 'phone',
    brand: 'samsung',
    price: 1000,
    color: 'black',
    isGood: true,
    config: {
        screenSize: '5.5 inch',
        ram: '6gb',
        opta: {
            teri: 'keu',
            meri: 'pass'
        }
    },
    variation: ['pro', 'normal', 'proMax']
};

// for in loop for object 
for (const key in phone) {
    // console.log(key);
    // console.log(phone[key]) here you get all keys and values
    // console.log(key, ':', phone[key]);here you get all keys and values


    // console.log(`${key}: ${phone[key]}`) here you get all also but object get like object object.

    // console.log(`${key}: ${phone.key}`) what the wrong with this ?


}

// delete property 
delete phone['price'];
delete phone.type;
// console.log(phone)

// nested access
// console.log(phone.config.opta.meri);
phone.config.opta.meri = 'okk'
// update the value by nested
// console.log(phone.config.opta.meri);

// array access
// console.log(phone.variation[1])
// console.log(Array.isArray(phone.variation))
// console.log(phone.variation.slice(0, 1))


// console.log(phone.type)
// console.log(phone['color'])


// update or modify the value
phone['color'] = 'blue';
phone.color = 'blue';
// console.log(phone.color);


// getting keys
// console.log(Object.keys(phone));

// getting values
// console.log(Object.values(phone));