function addClassName(element, value) {
    if (!element.className){
        element.className = value;
    }else {
        var newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}
/**
 * Created by u._.u on 2016/11/23.
 */
