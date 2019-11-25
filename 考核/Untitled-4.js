function validateForm() {
    var x = document.forms["myform"]["StudentID"].value;
    if (x == "") {
        alert("必须填写学号！");
        return false;
    }
    var y = document.forms["myform"]["IDnumber"].value;

    if (y == "") {
        alert("必须填写身份证号！");
        return false;
    }
    var z = document.forms["myform"]["name"].value;
    if (z == "") {
        alert("必须填写姓名！");
        return false;
    }
}
var json = { shuju }; {
    "shuju" [
        { "StudentID": "1903160122", "IDnumber": "210682200205110012", "name": "王恩泽" }
    ]
}