var timeLeft = Time.getTimeAlive();
var timer = document.querySlector('#timer');
var count = 0;

function convertSeconds(second){
    var minute = Math.floor(second / 60);
    var sec = second % 60;
    if(sec < 10){
        sec = "0" + sec;
    }
    if(minute <10){
        minute = "0" + minute;
    }
    return minute + ":" + sec;
}
window.addEventListener('keydown', ()=>{
    console.log(ev.code);
})
window.onload = () => {
    timer.innerHTML = convertSeconds(timeLeft - count);
    count++
    setInterval(() =>{
        timer.innerHTML = convertSeconds(timeLeft - count);
        count++;
    }, 1000);
}