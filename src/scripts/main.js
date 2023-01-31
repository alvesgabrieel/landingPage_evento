// AOS effect 
AOS.init();
//function console.log
function c(x){
    console.log(x);
}

const eventDate = new Date("Feb 18, 2023 19:00:00");
const eventTimeStamp = eventDate.getTime();
c(eventTimeStamp);

const interval = setInterval(function () {
    const now = new Date();
    const TimeStamp = now.getTime();
    
    const timeToEvent = eventTimeStamp - TimeStamp;

    // ===== (ms * s * h * d) ======= //
    const dayInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minInMs = 1000 * 60;
    const ms = 1000;

    const daysUntilEvent = Math.floor(timeToEvent / dayInMs); 
    const hoursUntilEvent = Math.floor((timeToEvent % dayInMs) / hoursInMs);
    const minutesUntilEvent = Math.floor((timeToEvent % hoursInMs) / minInMs);
    const secondsUntilEvent = Math.floor((timeToEvent % minInMs) / ms);    

    document.getElementById('date-counter').innerHTML = `<br />${daysUntilEvent}dias ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if(timeToEvent <= 0) {
        clearInterval(interval);

        document.getElementById('date-counter').innerHTML = `<br /> Evento expirado`;
    }

}, 1000)