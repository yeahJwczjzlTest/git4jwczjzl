function getNewContent() {
    var request = getHTTPObject();
    if (request){
        request.open("GET","test.txt",true);
        request.onreadystatechange = function () {
            if (request.readyState == 4){
                // alert("requset dose!");
                var para = document.createElement("p");
                var text = document.createTextNode(request.responseText);
                para.appendChild(text);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else {
        alert("sorry,your browser is dosen\'t support XMLHTTPObject!");
    }
    // alert("over");
}

addLoadEvent(getNewContent);
/**
 * Created by mylove on 2016/11/17.
 */
