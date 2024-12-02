// 3. Handling Errors with Async
// Title: Add error handling to an async function.
// Description:
// Modify the fetchData function to throw an error "Failed to fetch data!". Use try...catch to handle the error when calling the function.

async function fetchData(){
    const pr = new Promise((resolve, reject) => {
        setTimeout(()=> {
            reject("Failed to fetch data!");
        },5000);
    });
    return pr;
}

async function logResult(){
    try{
        console.log(await fetchData());
    }
    catch(err){
        console.error(err);
    }
}

logResult();