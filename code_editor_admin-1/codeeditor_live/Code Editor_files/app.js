// onload(open("./images/svgid.svg"));



// function open(a) {
//     var images = "<div class='loader'><img src='" + a + "'  style='img-radius:.5em;' alt=''></div>";
//     var code = document.getElementById("code").contentWindow.document;
//     code.open();
//     code.writeln(images);
//     code.close();
//     open.close();
// }



function compile() {

    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var scss = document.getElementById("scss");
    var svg = document.getElementById("svg");
    var code = document.getElementById("code").contentWindow.document;

    document.body.onkeyup = function() {
        code.open();
        code.writeln(html.value + "<style>" + css.value + "</style>" + "<style>" + scss.value + "</style>" + "<svg>" + svg.value + "</svg>" + "<script>" + js.value + "</script>");
        code.close();

    };

};
compile();