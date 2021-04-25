const urlBed = "https://api.rootnet.in/covid19-in/hospitals/beds";

const dash_bed = document.querySelector('#totalB');
const dash_urban = document.querySelector('#uB');
const dash_rural = document.querySelector('#rB');
const dash_lt_bd = document.querySelector('#lt_upB');
let data;

function getSetB(data){
    dash_bed.innerHTML = data['data']['summary']['totalBeds'];
    dash_urban.innerHTML =  data['data']['regional'][36]['urbanBeds'];
    dash_rural.innerHTML =  data['data']['regional'][36]['ruralBeds'];
    dash_lt_bd.innerHTML =  data['lastOriginUpdate'];
}


fetch(urlBed).then((response)=>{
    console.log("Connection Successful: 200");
    return response.json();
}).then((data)=>{
    getSetB(data);
});