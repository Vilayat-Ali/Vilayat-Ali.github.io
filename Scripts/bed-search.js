function handlerBED(ev){
    ev.preventDefault();
    let fd = new FormData(ev.target);
    const state = fd.get('state');
    const city = fd.get('city');
    workonBData(city, state);
}

var startval = 0;
var stopval = 5;

const td1_name = document.querySelector('#col_name_1');
const td2_name = document.querySelector('#col_name_2');
const td3_name = document.querySelector('#col_name_3');
const td4_name = document.querySelector('#col_name_4');
const td5_name = document.querySelector('#col_name_5');

const td1_gov = document.querySelector('#col_gov_1');
const td2_gov = document.querySelector('#col_gov_2');
const td3_gov = document.querySelector('#col_gov_3');
const td4_gov = document.querySelector('#col_gov_4');
const td5_gov = document.querySelector('#col_gov_5');

const td1_cap = document.querySelector('#col_cap_1');
const td2_cap = document.querySelector('#col_cap_2');
const td3_cap = document.querySelector('#col_cap_3');
const td4_cap = document.querySelector('#col_cap_4');
const td5_cap = document.querySelector('#col_cap_5');

const td1_av = document.querySelector('#col_av_1');
const td2_av = document.querySelector('#col_av_2');
const td3_av = document.querySelector('#col_av_3');
const td4_av = document.querySelector('#col_av_4');
const td5_av = document.querySelector('#col_av_5');



const arr_td_name = [td1_name, td2_name, td3_name, td4_name, td5_name];
const arr_td_gov = [td1_gov, td2_gov, td3_gov, td4_gov, td5_gov];
const arr_td_cap = [td1_cap, td2_cap, td3_cap, td4_cap, td5_cap];
const arr_td_av = [td1_av, td2_av, td3_av, td4_av, td5_av];
const arr_res_name = [];
const arr_res_gov = [];
const arr_res_admit = [];
const arr_res_av = [];

function workonBData(city, state){
    // Sending a get request to api
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onload = function(){
        const data = xhr.response;
    function fillTabledata(arr_name, arr_gov, arr_admit, arr_av){
        for(var x=startval; x<stopval; x++){
            arr_td_name[x].innerHTML = arr_name[x];
            arr_td_gov[x].innerHTML = arr_gov[x];
            arr_td_cap[x].innerHTML = arr_admit[x];
            arr_td_av[x].innerHTML = arr_av[x];
        }
    }
        for(var el=0; el<500;el++){
            var col_state = data['data']['medicalColleges'][el]['state'];
            var col_city = data['data']['medicalColleges'][el]['city'];
            var col_name = data['data']['medicalColleges'][el]['name'];
            var col_ownership = data['data']['medicalColleges'][el]['ownership'];
            var col_admissionCapacity = data['data']['medicalColleges'][el]['admissionCapacity'];
            var col_hospitalBeds = data['data']['medicalColleges'][el]['hospitalBeds'];
            if(col_state==state || col_city==city){
                console.log(col_state);
                arr_res_name.push(col_name);
                arr_res_gov.push(col_ownership);
                arr_res_admit.push(col_admissionCapacity);
                arr_res_av.push(col_hospitalBeds);
                fillTabledata(arr_res_name, arr_res_gov, arr_res_admit, arr_res_av);
            }
        }
}
    xhr.open('GET', 'https://api.rootnet.in/covid19-in/hospitals/medical-colleges');
    xhr.send();
}

document.addEventListener('DOMContentLoaded', ()=>{
// Initialising variables
const form_bed = document.forms[0];
const url_s = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges";
form_bed.addEventListener("submit", handlerBED)
});

const btn_to_show = document.querySelector('#show_next');
btn_to_show.addEventListener('click', ()=>{
    startval+=5;
    stopval+=arr_res_name.length;
    function fillTabledata(arr_name, arr_gov, arr_admit, arr_av){
        var ind = 0;
        for(var x=startval; x<stopval; x++){
            if(ind<5){
            arr_td_name[ind].innerHTML = arr_name[x];
            arr_td_gov[ind].innerHTML = arr_gov[x];
            arr_td_cap[ind].innerHTML = arr_admit[x];
            arr_td_av[ind].innerHTML = arr_av[x];
            ind+=1;
            }
        }
    }
    fillTabledata(arr_res_name, arr_res_gov, arr_res_admit, arr_res_av);
})
