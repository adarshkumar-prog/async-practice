// 7. Await in Loops
// Title: Use await in a loop.
// Description:
// Write an async function that logs numbers 1 to 5 with a 1-second delay between each.
async function logNumbers(){
    for(var i=1;i<=5;i++){
        console.log(i);
        await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve();
            },1000);
        })
    }
}
logNumbers();