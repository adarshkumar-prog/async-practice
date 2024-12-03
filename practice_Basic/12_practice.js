// 10. Convert Callback to Async
// Title: Convert a callback function to an async function.
// Description:
// Given the callback-based function below, rewrite it as an async function:
// function getData(callback) {
//     setTimeout(() => callback("Callback data"), 2000);
//   }

async function getData() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => resolve("Callback data"), 3000);
    })
    
}
async function callConvertedCallBack(){
    const data = await getData();
    console.log(data);
}
callConvertedCallBack();