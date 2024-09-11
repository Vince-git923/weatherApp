import "./style.css"






import cloudy from "../assets/cloudy.png";
import fog from "../assets/fog.png";
import clearDay from "../assets/clear-day.png";
import clearNight from "../assets/clear-night.png";
import partlyCloudyDay from "../assets/partly-cloudy-day.png";
import partlyCloudNight from "../assets/partly-cloudy-night.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";






const array = [{'name': "fog",
                "val" :`url("${fog}")`},
                {'name': "cloudy",
                    "val" :`url("${cloudy}")`},
                {'name': "clear-day",
                "val" :`url("${clearDay}")`},
                {'name': "clear-night",
                    "val" :`url("${clearNight}")`},
                {'name': "partly-cloudy-day",
                    "val" :`url("${partlyCloudyDay}")`},
                {'name': "parlty-cloudy-night",
                    "val" :`url("${partlyCloudNight}")`},
                {'name': "rain",
                    "val" :`url("${rain}")`},
                {'name': "snow",
                    "val" :`url("${snow}")`},
                {'name': "wind",
                    "val" :`url("${wind}")`},

            ]





let content = document.querySelector('.CONTENT')




let tempDisp = document.querySelector('.temp-text')
let minTemp = document.querySelector('.min-temp')
let maxTemp = document.querySelector('.max-temp')
let humidityDisp = document.querySelector('.humidity-value')
let windDisplay = document.querySelector('.windspeed-value')
let rainDisp = document.querySelector('.rain-value')
let sunrise = document.querySelector('.sunrise-val')
let sunset = document.querySelector('.sunset-val')

let future = document.querySelector('.futures')
let hourlyDiv = document.querySelector('.hourly-div')

let location = document.querySelector('.searchbar')
let locDisp = document.querySelector('.location')
let description  = document.querySelector('.description')



let currentIcon = document.querySelector('.icon')

const days = ['Sun', "Mon", "Tue", "Wed", "Thu", "Fri","Sat"]
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']




let dateDisplay = document.querySelector('.date')



let errorDiv = document.querySelector('.error')
    


async function test(loc){
    
    let getDate = new Date();
    let hournow = getDate.getHours()

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?key=8QKWVAKQRP4RHTFMCUX6BWHND
`,{mode:'cors'})


   if(! response.ok){
     content.style.display = 'none'
     errorDiv.textContent = "Invalid Location Parameter!"

    errorDiv.style.visibility = 'visible'
   }else{
    errorDiv.style.visibility = 'hidden'
    content.style.display = 'block'
   }


const resData =  await response.json()



locDisp.textContent = resData.resolvedAddress;
description.textContent = resData.currentConditions.conditions;
let tempNow = resData.currentConditions.temp;
tempDisp.textContent = convert(tempNow) + '°C';
maxTemp.textContent =convert(resData.days[0].tempmax) + '°C';
minTemp.textContent =convert(resData.days[0].tempmin) + '°C';
humidityDisp.textContent = resData.currentConditions.humidity + '%';
rainDisp.textContent = resData.days[0].precipprob + '%';
windDisplay.textContent = resData.currentConditions.windspeed + " m/s"
sunrise.textContent = resData.currentConditions.sunrise;
sunset.textContent = resData.currentConditions.sunset


let iconVal = resData.currentConditions.icon

setIcon(iconVal,currentIcon);



for(let i = hournow + 1; i <= 23; i++){

    let perHourDiv = document.createElement('div');
    perHourDiv.classList.add('perHour');

    let hIcon = document.createElement('div');
    hIcon.classList.add('hourly-icon')
    let hTemp = document.createElement('div')
    let hTime = document.createElement('div');

    let taym = resData.days[0].hours[i].datetime.substr(-14,2);
   

    if(Number(taym) > 12){
       taym = Number(taym) - 12;
       taym = taym.toString() + ':00 pm'
    }else if(taym == "00"){
     taym = '12:00 am'
    }else if(taym == "12"){
      taym = '12:00 pm'
    }else {
     taym = taym + ':00 am'
    }
    hTime.textContent = taym

    let val = resData.days[0].hours[i].icon;
    hTemp.textContent = convert(resData.days[0].hours[i].temp )+ '°C';


   setIcon(val,hIcon)

    perHourDiv.appendChild(hTime)
    perHourDiv.appendChild(hIcon);
    perHourDiv.appendChild(hTemp)

     hourlyDiv.appendChild(perHourDiv)
   
   }
   
   for(let i = 0; i <= hournow; i++){
    let perHourDiv = document.createElement('div');
    perHourDiv.classList.add('perHour');

    let hIcon = document.createElement('div');
    hIcon.classList.add('hourly-icon')
    let hTemp = document.createElement('div')
    let hTime = document.createElement('div');

    let taym = resData.days[1].hours[i].datetime.substr(-14,2);
   

    if(Number(taym) > 12){
       taym = Number(taym) - 12;
       taym = taym.toString() + ':00 pm'
    }else if(taym == "00"){
     taym = '12:00 am'
    }else if(taym == "12"){
      taym = '12:00 pm'
    }else{
     taym = taym + ':00 am'
    }
   
     hTime.textContent = taym;   

    let val = resData.days[1].hours[i].icon;
    hTemp.textContent = convert(resData.days[1].hours[i].temp )+ '°C';

    
    setIcon(val,hIcon)
    perHourDiv.appendChild(hTime)
    perHourDiv.appendChild(hIcon);
    perHourDiv.appendChild(hTemp)

     hourlyDiv.appendChild(perHourDiv)
}
   




for(let i = 1; i <= 7; i++){
  
  let dateDiv = document.createElement('div');
  let iconDiv = document.createElement('div')
  iconDiv.classList.add('future-icon');
  let tempDiv = document.createElement('div');
  let chanceDiv = document.createElement('div')
  chanceDiv.classList.add('future-prob')
  let des = document.createElement('div');
  let chanceVal = document.createElement('div');
  
 
  let date = resData.days[i].datetime.substr(5,5);
  let origDate = resData.days[i].datetime;
  let icon = resData.days[i].icon;
  let temp = convert(resData.days[i].temp) + "°C"
  let chance = resData.days[i].precipprob + '%';
  
  let hehe  = new Date(origDate)
 
  
  
  dateDiv.textContent = date + ` (${days[hehe.getDay()]})`;
  setIcon(icon, iconDiv)
  tempDiv.textContent = temp;
  des.textContent = "Chance of Rain"
  chanceVal.textContent = chance;
  
  chanceDiv.appendChild(des);
  chanceDiv.appendChild(chanceVal);
  
  let fCont = document.createElement('div')
  fCont.classList.add('f-cont')
  
  fCont.appendChild(dateDiv);
  fCont.appendChild(iconDiv);
  fCont.appendChild(tempDiv);
  fCont.appendChild(chanceDiv);
  future.appendChild(fCont)
}

}












    







let search = document.querySelector('.search')

let searchBtn = document.querySelector('.searchBtn')


let header = document.querySelector('header')




searchBtn.addEventListener("click",()=>{
    let dateNow = new Date();

    let day = days[dateNow.getDay()];
    let monthNow = month[dateNow.getMonth()]
    
    
    let getdate = `${day}, ${monthNow} ${dateNow.getDate()}` 


  
   dateDisplay.textContent  = getdate; 

     clear(hourlyDiv);
     clear(future)
     header.classList.add('test')
     search.style.transform = 'scale(1)'
    test(location.value);
     
   
})


 





















function convert(value){
  let val = (value - 32) * 5/9
  val = Math.round(val*100)/100
  return val;
}



function setIcon(val, param){

   
    array.forEach(el=>{
        if(el.name == val){
            param.style.backgroundImage = el.val
        }
    })
            
    
}


function clear(val){
    
    let child = val.lastElementChild;
    while (child) {
        val.removeChild(child);
        child = val.lastElementChild;
}
}
