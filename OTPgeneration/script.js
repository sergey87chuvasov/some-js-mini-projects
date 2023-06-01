function otpGen() {
    let otp = '';

    for (let i = 0; i < 6; i++) {
        otp+= Math.floor(Math.random() * 10)
    }

    document.getElementById('otpmsg').innerHTML = otp;
}

// otpGen()