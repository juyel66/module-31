//31-3 Array Map To Do One Line Loop Magic


//array er element gulo double korte chai
// system 1
const numbers = [2, 5, 6, 7, 10];
const doublet = [];
for (const number of numbers) {
    const double = number * 2;
    doublet.push(double);
}

console.log(doublet);

//system 2

//map => loops through each element of the array and do the operation that you passed in the callback function and hold the result from each operation from an array and finally return you the array .


const items = [1, 3, 5, 7, 9, 11, 15];
function doubleIt(item) {
    // console.log('item now ', item);
    return item * 2;
}

const double2 = n => n * 2;
const result = items.map(doubleIt);
// console.log(result);

//or


const output = items.map(double2);
// console.log(output);

//or

const output2 = items.map(n => n * 2);
console.log(output2);

