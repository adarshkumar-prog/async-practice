// 4. Return a Promise in Async
// Title: Use await with a promise inside an async function.
// Description:
// Create an async function that waits for a promise that resolves with "Promise resolved!" after 3 seconds. Log the result
const returnPromise =function (){
    const pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise resolved!");
        },3000);
    });
    return pr;
}

async function getPromise(){
    try{
        const promise = await returnPromise();
        console.log(promise);
        console.log(await returnPromise());
    }catch(err){
        console.error(err);
    }
}

getPromise();