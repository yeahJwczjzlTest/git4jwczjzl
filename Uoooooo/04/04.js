/**
 * Created by u._.u on 2016/12/29.
 */

// //第一种写法,点击large 和 small 按钮放大和缩小字体
// $(document).ready(function () {
//     var $speech = $('div.speech');
//     $('#switcher button').click(function () {
//         var num = parseFloat($speech.css('fontSize'));
//         if (this.id === 'switcher-large'){
//             num *= 1.2;
//         }else if (this.id === 'switcher-small'){
//             num /= 1.2;
//         }
//         $speech.css('fontSize',num + 'px');
//     });
// });

//第二种写法,是用switch case语句进行书写.
$(document).ready(function () {
    // 创建 $speech 变量,保存 class为speech的div模块
    var $speech = $('div.speech');
    //保存原始 fontSize 的数据,用于 default 按钮恢复;
    var defaultFontSize = $speech.css('fontSize');
    $('#switcher button').click(function () {
        var num = parseFloat($speech.css('fontSize'));
        switch (this.id){
            case 'switcher-large':
                num *= 1.4;
                break;
            case 'switcher-small':
                num /= 1.4;
                break;
            default:
                num = parseFloat(defaultFontSize);
        }
        $speech.css('fontSize',num + 'px');
    })
});