function moveElements(elem_id, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elem_id)) return false;
    var elem = document.getElementById(elem_id);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos === final_x && ypos === final_y) return true;
    if (xpos<final_x) xpos++;
    if (xpos>final_x) xpos--;
    if (ypos<final_y) ypos++;
    if (ypos>final_y) ypos--;
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElements('" + elem_id + "'," + final_x + "," + final_y + "," +interval+ ")";
    movement = setTimeout(repeat,interval);

}
/**
 * Created by u._.u on 2016/11/24.
 */
