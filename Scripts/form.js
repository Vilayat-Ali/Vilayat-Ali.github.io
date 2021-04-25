document.addEventListener('DOMContentLoaded',()=>{
    const form = document.forms[0];
    form.addEventListener("submit", handler);
});

function handler(ev){
    ev.preventDefault();
    let fd = new FormData(ev.target);
    const city = fd.get('City');
    const reqq = fd.get('Necessity');
    workonData(city,reqq);
}

function workonData(city, reqq){
    window.location.href=`https://www.google.com/search?q=%27${reqq}%27+near+%27${city}%27&sxsrf=ALeKk020rKxnXmYB4SU7sWATQ7keLei3lQ%3A1619284730664&source=hp&ei=-lKEYLCTJoTZz7sPppqAyA8&iflsig=AINFCbYAAAAAYIRhCnKJxmnaEHdE2GX6nn1rgFBkWRA3&oq=%27oxygen%27+near+%27city%27&gs_lcp=Cgdnd3Mtd2l6EAMyCAghEBYQHRAeOgcIIxDqAhAnOgQIIxAnOgUIABCRAjoFCAAQsQM6CAgAELEDEIMBOgQIABBDOgsIABCxAxCDARDJAzoFCAAQkgM6CggAELEDEIMBEAo6CggAELEDEIMBEEM6AggAOgQIABAKOgQIABAeOgYIABAWEB46BggAEA0QHjoICAAQDRAKEB46CQgAEMkDEBYQHjoICAAQFhAKEB5Q9TlY0nlgzHtoAnAAeACAAYQCiAHkGpIBBjAuMTguMpgBAKABAaoBB2d3cy13aXqwAQo&sclient=gws-wiz&ved=0ahUKEwiw-KLZsZfwAhWE7HMBHSYNAPkQ4dUDCAc&uact=5`
    }