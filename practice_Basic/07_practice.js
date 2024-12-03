function returnPromiseAllSetteled(){
    const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("promise1 resolved!");
        },2000);
    });
    const p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("promise2 resolved!");
        },3000);
    });
    const p3 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("promise3 rejected!");
        },4000);
    });
    return Promise.allSettled([p1, p2, p3]);
}
async function getPromiseAllSetteled (){
    try{
        console.log(await returnPromiseAllSetteled());
    }
    catch(err){
        console.error("Error: "+ err);
    }
}
getPromiseAllSetteled();