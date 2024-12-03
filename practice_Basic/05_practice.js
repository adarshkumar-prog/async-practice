function returnPromise(){
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise1 resolved");
        },3000);
    });
    
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise2 resolved");
        },5000);
    });
    
    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise3 resolved");
        },1000);
    });
    
    const p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("promise4 rejected");
        },2000);
    });
    return Promise.all([p1, p2, p3, p4]);    
}

async function getPromise(){
    try{
        console.log(await returnPromise());
    }
    catch(err){
        console.error("Error: ", err);
    }
}

getPromise();