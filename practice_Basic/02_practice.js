// 2. Log Async Results
// Title: Log the result of an async function.
// Description:
// Call the fetchData function created in the previous task. Log its result to the console.
async function fetchData(){
    const pr = new Promise((resolve, reject)=>{
        setTimeout(function fun(){
            resolve("Data fetched successfully!");
        },5000);
    });
    return pr;
}

async function logResult(){
    try{
        const res = await fetchData();
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}
logResult();