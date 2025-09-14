function askForPhoneNumber (callback){
    let phoneNumber;
    console.log("Ánh gọi Duy xin số điện thoại của Nhung");
    console.log("Ánh đợi mình tí, mình tìm số")
    setTimeout(()=>{
        console.log("Tìm thấy số rồi");
        phoneNumber = 12345;
        callback(phoneNumber);
    }, 3000);
}
function processPhoneNumber (sdt){
    console.log(`Ánh gọi cho Nhung theo số ${sdt}`);

}
askForPhoneNumber(processPhoneNumber)