console.log("Starting async function...");
let a = new Promise((resolve, reject) => {
        resolve("Promise resolved!");
    });
a.then((value)=>{
    console.log(value);
})                