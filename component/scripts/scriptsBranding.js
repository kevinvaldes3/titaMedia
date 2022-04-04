const requestURL = 'https://my-json-server.typicode.com/kevinvaldes3/jsonUnsplash/db';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    changeDrib();
    var dataJson = request.response;
    for (let i = 0; i < dataJson["branding"].length; i++) {
        var currElemBranding = dataJson["branding"][i];
        document.getElementById("brandingContainer").insertAdjacentHTML("afterbegin", `<div id="imgBranding${i}" class="Img" style="background: url(${currElemBranding.img});"></div>`)
    }
}


function changeDrib(){
    document.getElementById("brandingContainer").classList.remove('containerImgOneColumns')
    document.getElementById("brandingContainer").classList.add('containerImg')
}

function changeColumn(){
    document.getElementById("brandingContainer").classList.remove('containerImg')
    document.getElementById("brandingContainer").classList.add('containerImgOneColumns')
}