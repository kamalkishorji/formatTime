function padd(num) {
    return num.toString().length == 1 ? '0' + num : num;
}
function formatTime(timeInSec) {
    if (!Number.isInteger(timeInSec) || timeInSec < 0 || timeInSec > 359999) {
        return "Please enter valid time in second";
    }
    let hours = Math.floor(timeInSec / 3600);
    hours = padd(hours);
    timeInSec %= 3600;
    let minutes = Math.floor(timeInSec / 60);
    minutes = padd(minutes);
    let seconds = timeInSec % 60;
    seconds = padd(seconds);
    return hours + ":" + minutes + ":" + seconds;
}
console.log(formatTime(359999));


//Time complexity : Since I am not using any loop add only performing assignment and arithmetic operations so time complexity here is O(1) i.e constant time
// Space complexity : Since I am not using any array and extra variables so space complexity here is O(1) .