// JavaScript Document
/*window.load = init();

function init() {
    validateForm();
    Isempty();
}*/

function validateForm() {
    var x = document.forms["forma"]["tel"].value;
    if (x == "") {
        alert("必须填写手机号！");
        return false;
    }
}

function Isempty() {
    if (document.getElementById("d").checked) {
        return true;
    } else {
        alert("勾选不能为空！");

        return false;
    }


}