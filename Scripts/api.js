const url = "https://api.rootnet.in/covid19-in/stats/latest";


const dash_total = document.querySelector('#total');
const dash_rec = document.querySelector('#reco');
const dash_death = document.querySelector('#death');
const dash_lt = document.querySelector('#lt_up');
let data;

function getSet(data){
    dash_total.innerHTML = data['data']['summary']['confirmedCasesIndian'];
    dash_rec.innerHTML =  data['data']['summary']['discharged'];
    dash_death.innerHTML =  data['data']['summary']['deaths'];
    dash_lt.innerHTML =  data['lastOriginUpdate'];
}


fetch(url).then((response)=>{
    console.log("Connection Successful: 200");
    return response.json();
}).then((data)=>{
    getSet(data);
});

