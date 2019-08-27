$(document).ready(function(){

    // toggable content
    $(".toggable").click(function (event) {
        event.stopPropagation();
        $(".content", this).toggleClass('visible');
    })

});