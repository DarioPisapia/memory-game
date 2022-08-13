var seconds = 0
var minutes = 0
var stopInterval;

const startTimer = () => {
    stopInterval = setInterval(updateTimer, 1000)
}

const updateTimer = () => {
    if (seconds < 60){
        if (seconds < 10){
            document.getElementById('seconds').textContent = `0${seconds}`
        }else{
            document.getElementById('seconds').textContent = seconds  
        }
        
    } else {
        minutes += 1
        seconds = 0
        if (minutes < 10){
            document.getElementById('minutes').textContent = `0${minutes}`
            document.getElementById('seconds').textContent = `0${seconds}`
        }
        document.getElementById('minutes').textContent = `0${minutes}`
        document.getElementById('seconds').textContent = `0${seconds}`
    }
    seconds ++
}

const resetTimer = () => {
    
    clearInterval(stopInterval)
    seconds = 0
    minutes = 0
    startTimer()
}
export {startTimer, stopInterval, resetTimer}