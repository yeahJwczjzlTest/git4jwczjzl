function initHtml() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    var imageView = document.createElement("img");
    imageView.setAttribute("id","imageView");
    imageView.setAttribute("src","");
    imageView.setAttribute("alt","这里显示选中图片");
    imageView.setAttribute("width","683");
    imageView.setAttribute("height","384");
    var gallery = document.getElementById("snapUL");
    insertAfter(imageView,gallery);
    var para = document.createElement("p");
    para.setAttribute("id","description");
    var text = document.createTextNode("这里显示图片的描述");
    para.appendChild(text);
    insertAfter(para,imageView);


}


function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var gallery = document.getElementById("snapUL");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0;i < links.length;i++) {
        links[i].onclick = function () {
            return showPic(this)?false:true;
        }
    }
}


function showPic(whichpic) {
    if (!document.getElementById) return false;
    var source = whichpic.getAttribute("href");
    var imageView = document.getElementById("imageView");
    if (imageView.nodeName != "IMG") return false;
    imageView.setAttribute("src",source);

    if (document.getElementById("imageView")){
        var description = document.getElementById("description");
        var text = whichpic.getAttribute("title");
        if (description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }

    return true;
}

function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement){
        parent.appendChild(targetElement);
    }else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function addOnLoad(func) {
    var oldOnLoad = window.onload;
    if (typeof window.onload != "function"){
        window.onload = func;
    }else {
        window.onload = function () {
            oldOnLoad();
            func();
        }
    }
}

addOnLoad(initHtml);
addOnLoad(prepareGallery);

/**
 * Created by NewLife on 2016/11/16.
 */
