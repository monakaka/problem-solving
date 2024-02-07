// const nums = [12, 13, 14, 15, 16, 17, 18];
// console.log(nums);
// console.log(nums.splice(4, 2));
// console.log(nums);
// console.log(nums.unshift(1)); it's gives length after adding a new values.
// nums.unshift(11);
// nums.push(50);shit,pop

// console.log(nums.splice(1, 4, 77, 88, 99)); it's gives [ 13, 14, 15, 16 ] output

// nums.splice(1, 4, 77, 88, 99);
// console.log(nums); it's give the modify nums array

// var conct = nums.slice(0, 2).concat(nums.slice(nums.length - 2, nums.length))
// console.log(conct);

// const array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 1; i < array.length; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(array[i]);
// }

// string test

const strs = "Hello World!";
// console.log(strs.includes("W"));
// console.log(strs[4])
// let reverse = "";

// for (const str of strs) {
//     reverse = str + reverse;
// reverse = reverse + str;
// }
// console.log(reverse);
// ----------

// const sl = strs.slice(2, 4)
// const sl = strs.substring(2, 4)
// console.log(sl);

// reversed in proper way 
const reversed = strs.split('').reverse().join('');
// console.log(reversed)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse());