// Title: Create an async function to simulate data fetching.
// Description:
// Write an async function called fetchData that returns a string "Data fetched!" after a 2-second delay. Use setTimeout inside the function to simulate the delay. 

const promise = new Promise((resolve, reject) => {
    setTimeout(function fun(){
        resolve("Data fetched!");
    },2000);
})

async function fetchData(){
    try{
        console.log(await promise);
    }
    catch(err){
        console.log(err);
    }
}

fetchData();