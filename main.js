let days= document.querySelector(".number1");
let hours= document.querySelector(".number2");
let minutes=document.querySelector(".number3");
let secs= document.querySelector(".number4");
let countSec=60;
let countMin=59;
let countHour=23;
let countDay=9;
let countdownSec=setInterval(()=>
{
    countSec -= 1;
    secs.innerHTML=countSec;
    if (countSec < 10) secs.innerHTML="0"+countSec;
    if (countSec == 0) {
        countSec=60;
        countMin-=1;
        minutes.innerHTML=countMin;
        if (countMin < 10) minutes.innerHTML="0"+countMin;
        if (countMin == 0){
            countMin=59;
            countHour-=1;
            hours.innerHTML=countHour;
            if (countHour < 10) hours.innerHTML="0"+countHour;
            if (countHour == 0){
                countHour=23;
                countDay-=1;
                days.innerHTML=countDay;
                if (countDay < 10) days.innerHTML="0"+countDay;
                if (countDay == 0) clearInterval(countdownSec);
        }
    }
        
    };

},1000);
