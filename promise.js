
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 4000);
    });
}
// promise chain
    let p1 =getData(1);
    p1.then((res) => { 
        console.log(res);
    });




//  
    
// //#callback
// getData(1, () => {
//     console.log("get next data");
//     getData(2, () => {
//         console.log("get next data");
//         getData(3);
//     });
// });