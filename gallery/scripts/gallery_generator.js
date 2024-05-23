$(document).ready(function() {
    var xmlHttp = new XMLHttpRequest();

    var numberOfColumns = 1;
    var htmlCode = "";
    var response;

    var send = "gallery/scripts/hook.php";

    xmlHttp.open("GET", send, true);
    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            response = xmlHttp.responseText.split("~");


            for (var i = 0; i < response.length; i++) {

                htmlCode += '<a href="gallery/assets/images/' + response[i] + ' ">'; 
                htmlCode += '<img class="card-img-top img-thumbnail" src="gallery/assets/images' + response[i] + '" />';
                htmlCode += '</a>';

                if (((i + 1) % numberOfColumns) == 0) {
                    htmlCode += '</tr><tr>';
                }
            }

            document.getElementById('gallery_coke').innerHTML = htmlCode;
            document.getElementById('gallery_fanta').innerHTML = htmlCode;
            document.getElementById('gallery_oasis').innerHTML = htmlCode;

        } else if (xmlHttp.readyState == 4) {
            alert('Error: ' + xmlHttp.status); 0
        }
    };
});
