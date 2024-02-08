function guessNumber() {
    var a = Math.floor(Math.random() * 10) + 1;

    while (true) {
        var x = prompt("Hãy đoán số từ 1 đến 10:");
        if (x !== null && !isNaN(x) && x >= 1 && x <= 10) {
            x = parseInt(x);

            if (x === a) {
                alert("Chúc mừng! Bạn đã đoán đúng số " + a + ".");
                break;
            } else {
                alert("Số bạn đoán chưa đúng. Hãy thử lại!");
            }
        } else {
            alert("Vui lòng nhập số từ 1 đến 10.");
        }
    }
}

guessNumber();