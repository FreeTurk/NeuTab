let clock = () => {
    var width = window.innerWidth;
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
    let greets = "Hi!";

    if (width <= 1100) {
        if (hrs == 0) {
            hrs = 12;
        } else if (hrs >= 12) {
            hrs = hrs - 12;
            period = "PM";
        }
        hrs = hrs < 10 ? "0" + hrs : hrs;
        mins = mins < 10 ? "0" + mins : mins;
        secs = secs < 10 ? "0" + secs : secs;

        let time = `Hi!\n${hrs}:${mins} ${period}`;
        document.getElementById("clock").innerText = time;
        setTimeout(clock, 100);
    } else if (width > 1100) {
        if (hrs == 0) {
            hrs = 12;
        } else if (hrs >= 12) {
            hrs = hrs - 12;
            period = "PM";
        }
        hrs = hrs < 10 ? "0" + hrs : hrs;
        mins = mins < 10 ? "0" + mins : mins;
        secs = secs < 10 ? "0" + secs : secs;

        let time = `Hi! The time is:\n${hrs}:${mins}:${secs} ${period}`;
        document.getElementById("clock").innerText = time;
        setTimeout(clock, 100);
    };
};
clock();