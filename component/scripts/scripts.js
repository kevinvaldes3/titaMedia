const requestURLAll = 'https://my-json-server.typicode.com/kevinvaldes3/jsonAll/db';
const requestAll = new XMLHttpRequest();
requestAll.open('GET', requestURLAll);
requestAll.responseType = 'json';
requestAll.send();
requestAll.onload = function () {
    changeDrib();
    var dataJsonAll = requestAll.response;  
    for (let i = 0; i < dataJsonAll["all"].length; i++) {
        var currElemAll = dataJsonAll["all"][i];
        document.getElementById("allContainer").insertAdjacentHTML("afterbegin", `<div id="imgapp${i}" class="Img" style="background: url(${currElemAll.img});"></div>`)
    }
}
function changeDrib(){
    document.getElementById("allContainer").classList.remove('containerImgOneColumns')
    document.getElementById("allContainer").classList.add('containerImg')
}

function changeColumn(){
    document.getElementById("allContainer").classList.remove('containerImg')
    document.getElementById("allContainer").classList.add('containerImgOneColumns')
}
