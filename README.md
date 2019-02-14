# gitUserFinder
Type to find users

Forked users are requested to create their own client keys and use it.


// this above function returns a Promise because of async ==> supported by ES7.
async function myFunc() {
	return `Hello`;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Hello`),1000);
    });

    // await ==> wait until the promise is resolved 
    const res = await promise;
    return res;
}


myFunc()
    .then(res => console.log(res));

//Better Example

async function getUsers() {
    // await the respone of fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // only proceed once its resolved 
    const data = await response.json();

    // proceed once promise is resolved
    return data;
}

getUsers().then(users => console.log(users));
