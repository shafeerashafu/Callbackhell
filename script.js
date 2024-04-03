function countdown(count, callback) {
    var countdownElement = document.getElementById('countdown');
    if (count > 0) {
        countdownElement.textContent = count;
        setTimeout(function() {
            countdown(count - 1, callback);
        }, 1000);
    } else {
        callback();
    }
}

countdown(10, function() {
    var countdownElement = document.getElementById('countdown');
    countdownElement.textContent = "Happy Independence Day!";
});