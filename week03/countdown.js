function countdown(seconds) {
    // Immediately print starting amount of seconds.
    console.log(seconds);

    // Wait a second before printing each subsequent amount.
    // setInterval is basically a loop that keeps running on
    // a timer until clearInterval is called.
    let intervalID = setInterval(
        // setInterval takes a callback function.
        // Once the timer expires these functions are put into the 
        // callback queue waiting to 
        // be executed once the main stack is empty.
        function () {
            seconds--;
            console.log(seconds);

            if (seconds <= 0) {
                clearInterval(intervalID);
            }
        },
        1000
    );
}

countdown(3);