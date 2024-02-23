// 31-2 Access Value, Nested Object, Optional Chaining

// data access
const data = [{ id: 1, name: 'Humayun', address: 'Rangpur' }];
console.log(data[0].address);


const products = {
    count: 5000,
    data: [
        { id: 1, name: "lenovo laptop", price: 65000 },
        { id: 2, name: "mackbook", price: 165000 },
    ]

} //need second product price
console.log(products.data[1].price);

const user={
    id:5001,
    name:"juyel",
    address:{
        street:{
            first: '54/1 uttor side',
            second: 'danjpur pirganj',
            third:'thakurgaon',
        },
        city: 'rangpur'
    }
}
const user2={
    id:5001,
    name:"juyel",
    address:{
        city: 'rangpur',
        county:'bangladesh'
    }
}

console.log(user.address.street?.second); // ? eta deoyar karon holo jodi thake tahole samne jabe na thakle samne jabe na
console.log(user2.address.street?.second);