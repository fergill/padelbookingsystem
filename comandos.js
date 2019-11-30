$(document).ready(function () {
    $("#menuprincipal").load("nav.html", function () {
        if (sessionStorage.getItem("token")) {
            $(".login").addClass("d-none");
            $(".logout").removeClass("d-none");
        };
    })
});

function validate_inputPassword5(inputPassword5) {
    if (inputPassword5.value !== $("#inputPassword4").val()) {
        inputPassword5.setCustomValidity("Passwords do not match");
    } else {
        inputPassword5.setCustomValidity(""); // is valid
    }
}

function validate_inputPassword5(inputPassword5) {
    if (inputPassword5.value !== $("#inputPassword4").val()) {
        inputPassword5.setCustomValidity("Duplicate passwords do not match");
    } else {
        inputPassword5.setCustomValidity(""); // is valid
    }
}

var http_request = new XMLHttpRequest();

function petition() {
    var url = "http://fenw.etsisi.upm.es:10000/users/login";
    var elUser = document.getElementById("userlogin").value;
    var laPass = document.getElementById("passlogin").value;
    url = url + "?username=" + elUser + "&password=" + laPass;
    url = encodeURI(url);
    http_request.open("GET", url, true);
    http_request.responseType = 'json';
    http_request.onload = TrataRespuesta;
    http_request.send();
}

function TrataRespuesta() {
    var respuesta;
    if (http_request.status == 200) {
        respuesta = http_request.response;
        sessionStorage.setItem("token", respuesta);
        $("#myModal").modal("show");
        $(".login").addClass("d-none");
        $(".logout").removeClass("d-none");
    } else {
        alert("Error con la URL");
    }
}


function destruir() {
    sessionStorage.removeItem("token");
    $(".logout").addClass("d-none");
    $(".login").removeClass("d-none");
    $(location).attr('href', "inicio.html");


};

