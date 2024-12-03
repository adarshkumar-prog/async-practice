const returnPromiseAny = function(){
    const p1 = new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("promise1 resolved!");
        },4000);
    });

    const p2 = new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("promise2 resolved!");
        },3000);
    });

    const p3 = new Promise(function(resolve, reject){
        setTimeout(()=>{
            reject("promise3 rejected!");
        },2000);
    });

    return Promise.any([p1, p2, p3]);
}

async function getPromiseAny(){
    try{
        console.log(await returnPromiseAny());
    }
    catch(err){
        console.log("Error: "+ err);
    }
}
getPromiseAny();