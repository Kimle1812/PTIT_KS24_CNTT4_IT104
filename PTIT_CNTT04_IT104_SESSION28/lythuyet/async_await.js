function getDataFromAPI1(){
    return new Promise((res, reject)=>{
        setTimeout(()=>{
            console.log("Lấy dữ liệu từ API 1 tải lên giao diện thành công");
            res();
        },1000);
    })
}
function getDataFromAPI2(){
    return new Promise((res, reject)=>{
        setTimeout(()=>{
            console.log("Lấy dữ liệu từ API 2 tải lên giao diện thành công");
            res();
        },1000);
    })
}
function getDataFromAPI3(){
    return new Promise((res, reject)=>{
        setTimeout(()=>{
            console.log("Lấy dữ liệu từ API 3 tải lên giao diện thành công");
            res();
        },1000);
    })
}
async function runAllTask(){
    try {
        await getDataFromAPI1();
        await getDataFromAPI2();
        await getDataFromAPI3();
    } catch (error) {
        console.log("Error", error);   
    }
}
runAllTask();