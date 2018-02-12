const setButton = document.getElementById('submit'); 

const clock = document.getElementsByClassName('remaining')[0];

let counter = 0;

setButton.addEventListener('click', () => {
    //regular timer values
    const timerHours = document.getElementsByClassName('reg-hours')[0].value;
    const timerMinutes = document.getElementsByClassName('reg-minutes')[0].value;
    const timerSeconds = document.getElementsByClassName('reg-seconds')[0].value;
    console.log(timerHours);
    
    //checking that the values are not empty
  if(timerHours != 0 || timerMinutes != 0 || timerSeconds != 0){
     let timeInSecs = (timerHours * 3600) + (timerMinutes * 60) + (timerSeconds * 1);
      let parsed = parseInt(timeInSecs);
      
    //timer magic 
      setInterval(timeIt, 1000);
    
    //function to make numbers be in 2 digits
    function DD(number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}
    //turn seconds back into hours minutes and seconds
      function convertSeconds(parsed){
          var hr = DD(Math.floor(parsed / 3600), 2);
          var min = DD(Math.floor(parsed % 60), 2);
          var sec = DD(parsed % 60, 2);
          
          return hr + ':' + min + ':' + sec;
      }
      //increment the timer, print to the screen
      function timeIt(){
          if((timeInSecs - counter) - 1 >= 0){
            counter++;
            clock.innerHTML = (convertSeconds(timeInSecs - counter));
          }
        } 
  }
    
    })




//Toggle between pomodoro mode and regular timer

let chk  = document.getElementById("toggler").value;

function toggle(){
    if(chk == 'on'){
        chk = 'off';
        document.getElementsByClassName("totalpoms")[0].style.display = "block";
        document.getElementById("settings-reg").style.display= "none";
        document.getElementById("pom-input").style.display="block";
        return chk;
    } else if( chk == 'off'){
        chk = 'on';
        document.getElementsByClassName("totalpoms")[0].style.display = "none";
        document.getElementById("settings-reg").style.display= "block";
        document.getElementById("pom-input").style.display="none";
        return chk;
    }
}
