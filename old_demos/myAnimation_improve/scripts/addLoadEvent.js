function addOnLoad(my_func) {
    var oldOnLoad = window.onload;
    if (typeof window.onload){
        window.onload = my_func;
    }else {
        window.onload = function () {
            oldOnLoad();
            my_func();
        }
    }
}
/**
 * Created by u._.u on 2016/11/23.
 */
