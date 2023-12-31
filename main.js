
const time = document.getElementById("time");
const timeFormat = document.getElementById("timeFormat");

document.addEventListener('DOMContentLoaded',() =>{
    setInterval(showTime,1000);
});

const showTime = ()=> {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hr = hr < 10 ? `0${hr}` : hr;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    if(hr == 0){
        hr = 12;
        timeFormat.innerHTML = 'AM' ;  
    }
    
    if(hr > 12){
        hr = hr - 12;
        hr = hr < 10 ? `0${hr}` : hr;
         timeFormat.innerHTML = 'PM' ; 
        
    }

    time.innerHTML = `${hr} : ${min} : ${sec}`;
    // timeFormat.innerHTML = hr > 12 ? "PM" : "AM";
    

   
}

