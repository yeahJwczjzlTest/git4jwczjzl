function positionMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "0px";
    elem.style.top = "0px";
    moveElements("message",10000,0,10);

}


//
// function moveMessage() {
//     if (!document.getElementById) return false;
//     if (!document.getElementById("message")) return false;
//     var elem = document.getElementById("message");
//     var xpos = parseInt(elem.style.left);
//     var ypos = parseInt(elem.style.top);
//
//     if (xpos == 400 && ypos == 200) return true;
//     if (xpos < 200) xpos++;
//     if (xpos > 200) xpos--;
//     if (ypos < 100) ypos++;
//     if (ypos > 100) ypos--;
//     elem.style.left = xpos + "px";
//     elem.style.top = ypos + "px";
//     movement = setTimeout("moveMessage()",10);
// }

// function moveMessageFirst() {
//     if (!document.getElementById) return false;
//     if (!document.getElementById("message")) return false;
//     var elem = document.getElementById("message");
//     elem.style.left = "200px";
// }
addOnLoad(positionMessage);

// addOnLoad(moveMessage);

/**
 * Created by u._.u on 2016/11/23.
 */
