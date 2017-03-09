function addLoadEvent(func) {
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
/**
 * Created by mylove on 2016/11/17.
 */
