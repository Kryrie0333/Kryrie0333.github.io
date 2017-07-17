/**
 * Created by lx on 2017/5/23.
 */

$(function () {
    var $aside_li =$(".aside_nav li");
    $aside_li.click(function () {
       $(this).parent().animate({left:-201})
    })
})