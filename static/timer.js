function startTimer(minutes){
    let timeRemaining =  minutes * 60;
            function updateTimer(){
                let minutes = Math.floor(timeRemaining / 60);
                let seconds = timeRemaining % 60
                document.getElementById("timer").innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

                if(timeRemaining <= 0){
                    clearInterval(interval);
                    document.getElementById("timer").innerHTML = "0:00";
                    audio = new Audio('/static/wind_chime_alarm_.mp3');
                    audio.play();
                }
                else{
                    timeRemaining--;
                }
            }

            let interval = setInterval(updateTimer, 1000);
    }