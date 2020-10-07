// Object Destructuring

// const person = {
//     age: 26,
//     location: {
//         city: 'PA',
//         temp: 92
//     }
// };

// //GOAL: use name and age variable 
// // const name = people.name;
// //const age = people.age
// // default value name 
// const {name: firstName = 'anonymous' , age} = person;

// console.log(`${firstName} is the name`);

// //renaming values temp to temperature
// const {city , temp: temperature} = person.location;
// if (city && temperature){
// console.log(`its ${temperature} in ${city}!`);
// }


const book = {
    title : 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
}

const {name: publisherName = 'unknown'} = book.publisher;

console.log(publisherName);


// // Array Destructuring

// const address = ['1299 S Juniper Street', 'Philly', ' PA,', '19147'];

// // const state;
// // const city;
// const [ ,city , state = 'NY'] = address;

// console.log(`You are in ${city} ${state}`);

// Array Destructuring

const item = ['coffee (hot)', '2.00', , '3.00'];

// const state;
// const city;
const [ coffee , , price = '1'] = item;

console.log(`A medium ${coffee} costs ${price}`);