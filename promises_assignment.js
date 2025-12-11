/**
*
* Assume we are fetching the data from a rest endpoint in the get data function.
* we can simulate the same by replacing the setTimeout with fetch api and executing the same in a browser.
*
*/

// function getData(uId) {
// setTimeout(() => {
// console.log("Fetched the data!");
// return "skc@gmail.com";
// }, 4000);
// }

// console.log("start");
// var email = getData("skc");
// console.log("Email id of the user id is: " + email);
// console.log("end");

// *How do you solve this problem. How can we wait for till the function execution is completed, so that we can have correct email at line 10?

// function getData(uId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Fetched the data!");
//       resolve("skc@gmail.com");
//     }, 4000);
//   });
// }


const p=new Promise((reslove,reject)=>{
    setTimeout(()=>{
        console.log("Fetched the data!");
        reslove("skc@gmail.com");
    },4000);
});

function getData(uId){
    return p;
}

async function showEmail() {

  console.log("Start");

  const email = await getData("skc"); // waits until Promise resolves

  console.log("Email id of the user is: " + email);

  console.log("End");
}

showEmail();
