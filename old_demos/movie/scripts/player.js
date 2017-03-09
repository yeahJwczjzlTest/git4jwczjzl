/**
 * Created by u._.u on 2016/11/28.
 */

function createVideoControls() {
    // 获取所有的 video 标签
    var vids = document.getElementsByTagName("video");
    //遍历 vids 每个 video 标签执行一下 addControls()函数;
    for (var i=0;i<vids.length;i++){
        addControls(vids[i]);
    }
}

function addControls(vid) {
    // 移除video标签自带的 controls属性,目的是移除默认播放器控件
    vid.removeAttribute("controls");
    //获取 video 标签提供的视频的高度和宽度,并赋值给 video 标签作为宽高.
    vid.height =  vid.videoHeight;
    vid.width = vid.videoWidth;
    //设置video的父元素div标签的宽高
    vid.parentNode.style.width = vid.videoWidth + "px";
    vid.parentNode.style.height = vid.videoHeight + "px";
    //创建播放控制按钮的 div 标签
    var controls = document.createElement("div");
    //设置 class 属性
    controls.setAttribute("class","controls");
    //创建播放按钮 button
    var play = document.createElement("button");
    //设置 title
    play.setAttribute("title","play");
    //设置 button 标签元素显示内容
    play.innerHTML = "&#x25BA;";//默认是暂停按钮
    //拼接按钮到播放控制的div上
    controls.appendChild(play);
    //将 播放控制模块 div 插入到 video 标签之前,作为 div 的子元素标签
    insertAfter(controls,vid);
    //给按钮添加onclick事件
    play.onclick = function () {
        if (vid.ended){
            vid.currentTime = 0;
        }
        if (vid.paused){
            vid.play();
        }else {
            vid.pause();
        }
    };

    vid.addEventListener("play",function () {
        play.innerHTML = "&#x2590;&#x2590;";
        play.setAttribute("paused",true);
    },false);
    vid.addEventListener("pause",function () {
        play.removeAttribute("paused");
        play.innerHTML ="&#x25BA;";
    },false);
    vid.addEventListener("ended",function () {
        vid.pause();
    },false);
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

function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild === targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}


addLoadEvent(createVideoControls);