function moveElements(elem_id,final_x,final_y,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elem_id)) return false;
    // 1.获取需要移动的elem
    // 2.用parseInt()函数获取xpos和ypos
    // 3.判断终点,并停止任务
    // 4.设置移动规则,返回赋值(拼接 "px")
    // 5.设置setTimeOut()
    var elem = document.getElementById(elem_id);
    if (elem.moveMent) clearTimeout(elem.moveMent);
    //添加 left 和 top 的检测,如果不存在,加上默认值0px
    if (!elem.style.left) elem.style.left = "0px";
    if (!elem.style.top) elem.style.top = "0px";
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if (xpos === final_x && ypos === final_y) return true;

    if (xpos < final_x){
        dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos+dist;
    }
    if (xpos > final_x){
        dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos-dist;
    }
    if (ypos < final_y){
        dist = Math.ceil((final_y-ypos)/10);
        ypos = ypos+dist;
    }
    if (ypos > final_y){
        //Math.ceil(num) 作用是取大于num近似的整数,num为浮点数.
        dist = Math.ceil((ypos-final_y)/10);
        ypos = ypos-dist;
    }

    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";

    var param = "moveElements('"+elem_id+"',"+final_x+","+final_y+","+interval+")";
    elem.moveMent = setTimeout(param,interval);
}
/**
 * Created by u._.u on 2016/11/25.
 */
