function addOnLoad(my_func) {
    var oldOnLoad = window.onload;
    if (typeof window.onload != "function"){
        window.onload = my_func;
    }else {
        window.onload = function () {
            oldOnLoad();
            my_func();
        }
    }
}
/**
 * Created by mylove on 2016/11/21.
 */
