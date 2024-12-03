// 8. Async Function with Parameters
// Title: Pass parameters to an async function.
// Description:
// Create an async function called fetchUserData that takes a userId and returns "Data fetched for user <userId>" after a 2-second delay.
async function fetchUserData(userId){
    const p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data fetched for user "+ userId);
        },8000);
    })
    console.log(await p);
}
fetchUserData(12345);
fetchUserData();
fetchUserData(1+2);
fetchUserData("Adarsh");