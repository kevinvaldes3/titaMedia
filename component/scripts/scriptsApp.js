const requestURL = 'https://my-json-server.typicode.com/kevinvaldes3/jsonUnsplash/db';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {
    changeDrib();
    var dataJson = request.response;
    for (let iapp = 0; iapp < dataJson["app"].length; iapp++) {
        var currElemApp = dataJson["app"][iapp];
        document.getElementById("appContainer").insertAdjacentHTML("afterbegin", `<div id="imgapp${iapp}" class="Img" style="background: url(${currElemApp.img});"></div>`)
    }
}  

function changeDrib(){
    document.getElementById("appContainer").classList.remove('containerImgOneColumns')
    document.getElementById("appContainer").classList.add('containerImg')
}

function changeColumn(){
    document.getElementById("appContainer").classList.remove('containerImg')
    document.getElementById("appContainer").classList.add('containerImgOneColumns')
}
