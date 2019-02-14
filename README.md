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
