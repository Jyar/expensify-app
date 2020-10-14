const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({
            name: 'JOrdan',
            age: 24
        });
        //reject('This is my resolved data');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log(data);
    return 'yes';
}).then((str) => {
    console.log('does this run: ', str);
}).catch((error) => {
console.log('error: ', error);
});

console.log('after');