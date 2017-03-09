/**
 * Created by u._.u on 2016/11/25.
 */
//window.onload 函数
function addOnLoad(my_func) {
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

//插入 指定 元素标签之后 函数
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild === targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

// IMG 移动函数 (动画)
function moveElements(elem_id, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elem_id)) return false;
    var elem = document.getElementById(elem_id);
    //清除缓存
    if (elem.moveXEvent) clearTimeout(elem.moveXEvent);
    //判断并设置将要移动控件的相对位置
    if (!elem.style.left) elem.style.left = "0px";
    if (!elem.style.top) elem.style.top = "0px";
    //获取数值
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    //创建 dist 变量
    var dist = 0;
    if (xpos === final_x && ypos === final_y) return true;
    if (xpos < final_x){
        dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
    }
    if (xpos > final_x){
        dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos - dist;
    }
    if (ypos < final_y){
        dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos + dist;
    }
    if (ypos > final_y){
        dist = Math.ceil((ypos - final_y)/10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var param = "moveElements('"+elem_id+"',"+final_x+","+final_y+","+interval+")";
    elem.moveXEvent = setTimeout(param,interval);
}

//综合函数(balabala) 版本一:不自动生成标签版
// function prapare() {
//     if (!document.getElementById) return false;
//     if (!document.getElementsByTagName) return false;
//     if (!document.getElementById("linklist")) return false;
//     if (!document.getElementById("preview")) return false;
//     var preview = document.getElementById("preview");
//     preview.style.position = "absolute";
//     // preview.style.left = "0px";
//     // preview.style.top = "0px";
//     var list = document.getElementById("linklist");
//     var links = list.getElementsByTagName("a");
//     links[0].onmouseover = function () {
//         moveElements("preview",-100,0,10);
//     };
//     links[1].onmouseover = function () {
//         moveElements("preview",-200,0,10);
//     };
//     links[2].onmouseover = function () {
//         moveElements("preview",-300,0,10);
//     };
//
// }

/*
* 版本二 : 自动生成 div 和 img
*/
function prapare() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("linklist")) return false;
    // if (!document.getElementById("preview")) return false;

    //生成 div,补充属性 id = "slideshow";
    var slideShowDiv = document.createElement("div");
    slideShowDiv.setAttribute("id","slideshow");

    //生成图片,补充属性 id , alt , src
    var previewImage = document.createElement("img");
    previewImage.setAttribute("id","preview");
    previewImage.setAttribute("alt","图");
    previewImage.setAttribute("src","topics.gif");

    //拼接
    var list = document.getElementById("linklist");
    slideShowDiv.appendChild(previewImage);
    insertAfter(slideShowDiv,list);

    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    // preview.style.left = "0px";
    // preview.style.top = "0px";

    var links = list.getElementsByTagName("a");
    links[0].onmouseover = function () {
        moveElements("preview",-100,0,10);
    };
    links[1].onmouseover = function () {
        moveElements("preview",-200,0,10);
    };
    links[2].onmouseover = function () {
        moveElements("preview",-300,0,10);
    };

}

//运行
addOnLoad(prapare);