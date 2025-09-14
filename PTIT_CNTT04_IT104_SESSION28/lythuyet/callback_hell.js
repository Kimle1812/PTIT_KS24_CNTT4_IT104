function getDataFromIPI1(callback){
    setTimeout(()=>{
        console.log("Lấy data API1 thành công");
        callback();
    },1000);
}
function getDataFromIPI2(callback){
    setTimeout(()=>{
        console.log("Lấy dat API2 thành công");
        callback();
    },1000);
}
function getDataFromIPI3(callback){
    setTimeout(()=>{
        console.log("Lấy dat API3 thành công");
        console.log("Tất cả dữ liệu lấy trên sever thành công");
        callback();
    },1000);
}
function runAllTask(){
    getDataFromAPI1(()=>{
        getDataFromAPI2(()=>{
            getDataFromAPI3();
        })
    })
}
runAllTask();