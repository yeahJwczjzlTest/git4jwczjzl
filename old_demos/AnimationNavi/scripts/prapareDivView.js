function prapareDiv() {
    //0.获取图片标签,为图片标签 应用样式
    //1.获取 ul 列表元素
    //2.获取所有 tag === "a"的元素
    //3.给子元素指定 onmouserover() 方法
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("linklist")) return false;
    //js 生成 html 标记
    var divView = document.createElement("div");
    divView.setAttribute("id","divView");
    var myImg = document.createElement("img");
    myImg.setAttribute("id","preview");
    myImg.setAttribute("alt","图片预览");
    myImg.setAttribute("src","topics.gif");
    //拼接标签
    divView.appendChild(myImg);
    var list = document.getElementById("linklist");
    insertAfter(divView,list);
    //获取 图片 显示区域的标签,设置样式和left  &  top 属性.
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    // 由于 moveElements 函数里已经进行检测并赋值,所以这句话就不用写了.
    // preview.style.left = "0px";
    // preview.style.top = "0px";
    var links = list.getElementsByTagName("a");
    links[0].onmouseover = function () {
        moveElements("preview",-100,0,10);
    }
    links[1].onmouseover = function () {
        moveElements("preview",-200,0,10);
    }
    links[2].onmouseover = function () {
        moveElements("preview",-300,0,10);
    }
}
addOnLoad(prapareDiv);
/**
 * Created by u._.u on 2016/11/25.
 */
