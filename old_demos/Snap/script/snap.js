
function prepareGrally() {
    indexInit();
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("snapUL")) return false;
    var grally = document.getElementById("snapUL");
    var links = grally.getElementsByTagName("a");
    for(var i = 0;i<links.length;i++){
        links[i].onclick = function() {
            return showPic(this)? false : true;
        }
    }
}


function showPic(whichPic){
    if (!document.getElementById("imageView")) return false;
    var source = whichPic.getAttribute("href");
    var imageView = document.getElementById("imageView");
    if (imageView.nodeName != "IMG") return false;
    imageView.setAttribute("src",source);
    if (document.getElementById("description")){
        var description = document.getElementById("description");
        var text = whichPic.getAttribute("title")?whichPic.getAttribute("title"):"";
        if (description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function addLoadEvent(func) {
    var oldLoad = window.onload;
    if (typeof window.onload!="function"){
        window.onload = func;
    }else {
        window.onload = function () {
            oldLoad();
            func();
        }
    }
}

// 默认的appendChild()方法
// function indexInit() {
//     var imageView = document.createElement("img");
//     imageView.setAttribute("id","imageView");
//     imageView.setAttribute("src","");
//     imageView.setAttribute("alt","图片轮转");
//     imageView.setAttribute("width","683");
//     imageView.setAttribute("height","384");
//     var myBody = document.getElementsByTagName("body")[0];
//     myBody.appendChild(imageView);
//     var para = document.createElement("p");
//     para.setAttribute("id","description");
//     var text = document.createTextNode("选择了哪张图片");
//     para.appendChild(text);
//     myBody.appendChild(para);
// }

// 插入方式不一样
function indexInit() {
    var imageView = document.createElement("img");
    var gallery = document.getElementById("snapUL");
    imageView.setAttribute("id","imageView");
    imageView.setAttribute("src","");
    imageView.setAttribute("alt","图片轮转");
    imageView.setAttribute("width","683");
    imageView.setAttribute("height","384");
    gallery.parentNode.insertBefore(imageView,gallery);
    // var myBody = document.getElementsByTagName("body")[0];
    // myBody.appendChild(imageView);
    // var para = document.createElement("p");
    // para.setAttribute("id","description");
    // var text = document.createTextNode("选择了哪张图片");
    // para.appendChild(text);
    // myBody.appendChild(para);
}

addLoadEvent(prepareGrally);

/**
 * Created by BJ-01-200217 on 2016/11/10 0010.
 */
