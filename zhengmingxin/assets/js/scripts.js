// jQuery(document).ready(function() {

//     $('.page-container form').submit(function(){
//         var username = $(this).find('.username').val();
//         var password = $(this).find('.password').val();
//         if(username == '') {
//             $(this).find('.error').fadeOut('fast', function(){
//                 $(this).css('top', '27px');
//             });
//             $(this).find('.error').fadeIn('fast', function(){
//                 $(this).parent().find('.username').focus();
//             });
//             return false;
//         }
//         if(password == '') {
//             $(this).find('.error').fadeOut('fast', function(){
//                 $(this).css('top', '96px');
//             });
//             $(this).find('.error').fadeIn('fast', function(){
//                 $(this).parent().find('.password').focus();
//             });
//             return false;
//         }
//     });

//     $('.page-container form .username, .page-container form .password').keyup(function(){
//         $(this).parent().find('.error').fadeOut('fast');
//     });

// });
var jsonObj = {
    user1: {
        studentId: 1903070208,
        cardId: 111222333344445555,
        userName: "郑明新"
    },
    user2: {
        studentId: 1903070207,
        cardId: 111222333344445555,
        userName: "吴安琪"
    }
}

$("#next").click(function() {
    if ($("#check").attr("checked") == undefined) {
        alert("请同意用户协议!");
    } else {
        window.event.returnValue = false;
        window.location.href = "reg.html";
    }

});

$("#reg").click(function() {
    var data = $("#fo").serializeArray();
    var obj = {};
    $.each(data, function(reg, field) {
        obj[field.name] = field.value;
    })
    if (obj.studentId == jsonObj.user1.studentId && obj.cardId == jsonObj.user1.cardId && obj.userName == jsonObj.user1.userName) {
        alert("信息正确，认证成功！");
    } else {
        alert("信息错误，认证失败！");
    }
    if (obj.studentId == jsonObj.user2.studentId && obj.cardId == jsonObj.user2.cardId && obj.userName == jsonObj.user2.userName) {
        alert("信息正确，认证成功！");
    } else {
        alert("信息错误，认证失败！");
    }
});