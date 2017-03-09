/**
 * Created by u._.u on 2016/12/21.
 */
// $(document).ready(function () {
//     $('#switcher-default').addClass('selected')
//         .on('click',function () {
//             $('body').removeClass();
//         });
//     $('#switcher-narrow').on('click',function () {
//         $('body').removeClass().addClass('narrow');
//     });
//     $('#switcher-large').on('click',function () {
//         $('body').removeClass().addClass('large');
//     });
//     $('#switcher button').on('click',function () {
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
// });

// 提取通用代码之后的优化 =>

// $(document).ready(function () {
//     $('#switcher-default').addClass('selected');
//     $('#switcher button').on('click',function () {
//         $('body').removeClass();
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
//     $('#switcher-narrow').on('click',function () {
//         $('body').addClass('narrow');
//     });
//     $('#switcher-large').on('click',function () {
//         $('body').addClass('large');
//     });
// });

//利用原生DOM属性来确定被惦记元素的ID =>


// $(document).ready(function () {
//     $('#switcher-default').addClass('selected');
//     $('#switcher button').on('click',function () {
//         var classId = this.id.split('-')[1];
//         $('body').removeClass().addClass(classId);
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
//
//     /**
//      * 这里将 switcher h3 更改为 switcher
//      */
//
//     $('#switcher').click(function (event) {
//         if (event.target === this)
//         $('#switcher button').toggleClass('hidden');
//     });
//     $('#switcher h3').hover(function () {
//         $(this).addClass('hover');
//     },function () {
//         $(this).removeClass('hover');
//     });
// });


/**
 *
 * 备份一下
 *
 */

// $(document).ready(function () {
//     $('#switcher-default').addClass('selected');
//     $('#switcher button').on('click',function () {
//         var classId = this.id.split('-')[1];
//         $('body').removeClass().addClass(classId);
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
//     $('#switcher h3').click(function () {
//         $('#switcher button').toggleClass('hidden');
//     });
//     $('#switcher h3').hover(function () {
//         $(this).addClass('hover');
//     },function () {
//         $(this).removeClass('hover');
//     });
// });







/**
 *
 * 这是我自己更改的
 *
 */

// $(document).ready(function () {
//     $('#switcher-default').addClass('selected');
//     $('#switcher button').addClass('hidden');
//     $('#switcher button').on('click',function () {
//         var classId = this.id.split('-')[1];
//         $('body').removeClass().addClass(classId);
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
//     $('#switcher').hover(function () {
//         $('#switcher button').removeClass('hidden');
//     },function () {
//         $('#switcher button').addClass('hidden');
//     });
// });



// $(document).ready(function () {
//
//     $('#switcher-default').addClass('selected');
//     $('#switcher button').click(function (event) {
//         var classNm = this.id.split('-')[1];
//         $('body').removeClass().addClass(classNm);
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//         event.stopPropagation();
//     });
//     $('#switcher').click(function () {
//         $('#switcher button').toggleClass('hidden');
//     })
// });


// $(document).ready(function () {
//     $('#switcher-default').addClass('selected');
//     $('#switcher').hover(function () {
//         $(this).addClass('hover');
//     },function () {
//        $(this).removeClass('hover');
//     });
//     $('#switcher').click(function (event) {
//         if ($(event.target).is('button')){
//             var classNM = event.target.id.split('-')[1];
//             $('body').removeClass().addClass(classNM);
//             $('#switcher button').removeClass('selected');
//             $(event.target).addClass('selected');
//         }else {
//             $('#switcher button').toggleClass('hidden');
//         }
//
//     });
//
// });

// $(document).ready(function () {
//     $('#switcher-default').addClass('selected');
//     $('#switcher').hover(function () {
//         $(this).addClass('hover');
//     },function () {
//         $(this).removeClass('hover');
//     });
//     $('#switcher').on('click','button',function () {
//         var classNM = event.target.id.split('-')[1];
//         $('body').removeClass().addClass(classNM);
//         $('#switcher button').removeClass('selected');
//         $(event.target).addClass('selected');
//     });
//
// });


// $(document).ready(function () {
//     $('#switcher').on('click.collapse',function (event) {
//         if (!$(event.target).is('button')){
//             $('#switcher button').toggleClass('hidden');
//         }
//     });
//     $('#switcher-large,#switcher-narrow').click(function () {
//         $('#switcher').off('click.collapse');
//     });
// });

// $(document).ready(function () {
//     var toggleSwitcher = function (event) {
//         if (!$(event.target).is('button')){
//             $('#switcher button').toggleClass('hidden');
//         }
//     };
//     $('#switcher').on('click.collapse',toggleSwitcher);
//     $('#switcher-narrow,#switcher-large').click(function () {
//         $('#switcher').off('click.collapse');
//     });
//     $('#switcher-default').click(function () {
//         $('#switcher').on('click.collapse',toggleSwitcher);
//     })
// });

// $(document).ready(function () {
//    var toggleSwitcher = function (event) {
//        if (!$(event.target).is('button')){
//            $('#switcher button').toggleClass('hidden');
//        }
//    } ;
//    $('#switcher').on('click.collapse',toggleSwitcher);
//    $('#switcher button').click(function () {
//        $('#switcher').off('click.collapse');
//        if (this.id === 'switcher-default')
//            $('#switcher').on('click.collapse',toggleSwitcher);
//    })
//
//     var triggers = {
//         D:'default',
//         N:'narrow',
//         L:'large'
//     };
//
//     $(document).keyup(function (event) {
//         var key = String.fromCharCode(event.which);
//         if (key in triggers){
//             $('#switcher-'+ triggers[key]).click();
//         }
//     });
//
// });




$(document).ready(function () {
    $('#switcher').hover(function () {
        $(this).addClass('hover');
    },function () {
        $(this).removeClass('hover');
    });
    var toggleSwitcher = function (event) {
        if (!$(event.target).is('button')){
            $('#switcher button').toggleClass('hidden');
        }
    };
    $('#switcher').on('click',toggleSwitcher);
    $('#switcher').click();
    var setBodyClass = function (className) {
        $('body').removeClass().addClass(className);
        $('#switcher button').removeClass('selected');
        $('#switcher-'+ className).addClass('selected');
        $('#switcher').off('click',toggleSwitcher);
        if (className === 'default'){
            $('#switcher').on('click',toggleSwitcher);
        }
    }
    $('#switcher-default').addClass('selected');
    var triggers = {
        D:'default',
        N:'narrow',
        L:'large'
    };
    var cssBox = ['default','narrow','large'];
    var boxNum = 0;
    $('#switcher').click(function (event) {
        if ($(event.target).is('button')){
            var bodyClass = event.target.id.split('-')[1];
            setBodyClass(bodyClass);
        }
    });
    $(document).keyup(function (event) {
        var key = String.fromCharCode(event.keyCode);
        if (key in triggers){
            setBodyClass(triggers[key]);

        }
        if (key === "'"){
            boxNum++;
            var boxKey = boxNum%3;
            setBodyClass(cssBox[boxKey]);
        }

    });

});


