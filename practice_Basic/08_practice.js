// 5. Chain Async Functions
// Title: Chain multiple async functions.
// Description:
// Write two async functions:

// getUser: Returns "User fetched" after 2 seconds.
// getPosts: Takes the result of getUser and returns "Posts fetched for User" after 3 seconds.
// Call them sequentially.
async function getUser(){
    const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("User fetched");
        },2000);
    });
    return p1;
}
async function getPosts(val){
    const p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(validval(val))
            resolve("Posts fetched for User");
          else
          reject("Invalid User Data");
        },3000);
    });
    return p;
}
function validval(val){
    if(val === "User fetched")
        return true;
    return false;
}
getUser().then((val)=>{ console.log(val); return getPosts(val)}).then((val)=>console.log(val)).catch((err)=> console.error(err));