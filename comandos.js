function validate_inputPassword5(inputPassword5) {
    if (inputPassword5.value !== $("#inputPassword4").val()) {
        inputPassword5.setCustomValidity("Duplicate passwords do not match");
    } else {
        inputPassword5.setCustomValidity(""); // is valid
    }
}


function petition() {

    var http_request = new XMLHttpRequest(),
        username = document.getElementById("userlogin").value,
        password = document.getElementById("passlogin").value,
        url = encodeURIComponent( "http://fenw.etsisi.upm.es:10000/users/login+?username=${username}&password=${password}");
    http_request.open("GET", url, true);
    http_request.responseType='json';
    http_request.onload = TrataRespuesta;
    http_request.send(null);

    function TrataRespuesta() {
        var respuesta;
        if (http_request.status == 200) {
            respuesta = http_request.response;
            document.getElementById("test").value = respuesta;
        } else {
            alert("Error con la URL");
        }
    }
}