// let promise = new Promise((resolve, reject) => {
//      console.log("I am a promise");
//         reject("some error");
//     }
// );



function getData(dataId , getNextData){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("data" , dataId);
        resolve("sucess");
        if(getNextData) {
            getNextData();
        }
    }, 5000);
    });
}
// //#callback
// getData(1, () => {
//     console.log("get next data");
//     getData(2, () => {
//         console.log("get next data");
//         getData(3);
//     });
// });