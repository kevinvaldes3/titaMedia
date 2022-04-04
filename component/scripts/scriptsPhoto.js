const requestURL = 'https://my-json-server.typicode.com/kevinvaldes3/jsonUnsplash/db';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {
    changeDrib();
    var dataJson = request.response;
    for (let iphotography = 0; iphotography < dataJson["photography"].length; iphotography++) {
        var currElemPhotography = dataJson["photography"][iphotography];
        document.getElementById("photoContainer").insertAdjacentHTML("afterbegin", `<div id="imgphotography${iphotography}" class="Img" style="background: url(${currElemPhotography.img});"></div>`)
    }
}
function changeDrib(){
    document.getElementById("photoContainer").classList.remove('containerImgOneColumns')
    document.getElementById("photoContainer").classList.add('containerImg')
}

function changeColumn(){
    document.getElementById("photoContainer").classList.remove('containerImg')
    document.getElementById("photoContainer").classList.add('containerImgOneColumns')
}
