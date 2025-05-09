function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
//   return Math.floor(100000 + Math.random() * 900000).toString();
}

console.log("Your OTP is:", generateOTP());
