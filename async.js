function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}
//async function to fetch weather data
async function geAllData() {
 console.log("fetching data...1");   
await getData(1);
 console.log("fetching data...1");
await getData(2);
 console.log("fetching data...1");
await getData(3);
}