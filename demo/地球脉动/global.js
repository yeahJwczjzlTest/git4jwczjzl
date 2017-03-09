/**
 * Created by __R__ on 2016/12/7.
 */
function printHref() {
    var myol = document.getElementsByTagName("div")[0];
    var elems = document.getElementsByTagName("a");

    for (var i = 0;i<elems.length;i++){
        var hrefx = elems[i].getAttribute("href");
        var text = document.createTextNode(hrefx);
        var dd = document.createElement("p");
        dd.appendChild(text)
        document.body.appendChild(dd);
    }

}

function insertAfter(newelement, targetelement) {
    var parent = targetelement.parentNode;
    if (parent.lastChild === targetelement){
        parent.appendChild(newelement);
    }else {
        parent.insertBefore(newelement,targetelement.nextSibling);
    }
}

function addLoadEvent(my_func) {
    var oldOnLoad = window.onload;
    if (typeof window.onload !== "function"){
        window.onload = my_func;
    }else {
        window.onload = function () {
            oldOnLoad();
            my_func();
        }
    }
}

addLoadEvent(printHref);