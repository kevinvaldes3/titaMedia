const requestURL = 'https://my-json-server.typicode.com/kevinvaldes3/jsonUnsplash/db';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    changeDrib();
    var dataJson = request.response;
    for (let iweb = 0; iweb < dataJson["web"].length; iweb++) {
        var currElemWeb = dataJson["web"][iweb];
        console.log(currElemWeb);
        document.getElementById("webContainer").insertAdjacentHTML("afterbegin", `<div id="imgweb${iweb}" class="Img" style="background: url(${currElemWeb.img});"></div>`)
    }
}

function changeDrib(){
    document.getElementById("webContainer").classList.remove('containerImgOneColumns')
    document.getElementById("webContainer").classList.add('containerImg')
}

function changeColumn(){
    document.getElementById("webContainer").classList.remove('containerImg')
    document.getElementById("webContainer").classList.add('containerImgOneColumns')
}