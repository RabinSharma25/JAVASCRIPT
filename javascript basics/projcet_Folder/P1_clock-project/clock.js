let a;
let date;
let time;

setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, Option);
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById("time").innerHTML =
        "Time : " + time + "<br> Date : " + date;
}, 1000);
