async function fun(){
    const p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Immediate response!");
        },0);
    })
    return p;
}
async function getPromise(){
    console.log(await fun());
}
getPromise();