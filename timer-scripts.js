const setButton = document.getElementById('submit');

setButton.addEventListener('click', () => {
        console.log("itworks");
    })

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
