

$(function () {
    var lis = $(".y_li");
    var img = $(".img");
    var count = lis.length;
    var index=0;
    var result="";

    $(lis[0]).click(function () {
        $(lis[0]).addClass('active');
        $(lis[0]).siblings().removeClass('active');

        $(img[3]).css("transition", "all 0.5s");
        $(img[3]).css("transform", "translate(0,-40px)");
        $(img[3]).css("opacity", "0");

        $(img[0]).css("transition", "all 0.5s");
        $(img[0]).css("transform", "translate(0,10px)");
        $(img[0]).css("opacity", "1");
        $(img[1]).css("opacity","0");
        $(img[2]).css("opacity","0");
        $(img[3]).css("opacity","0");
        index=0;
        return index;

    });


    $(lis[1]).click(function () {
        $(lis[1]).addClass('active');
        $(lis[1]).siblings().removeClass('active');

        $(img[0]).css("transition", "all 0.5s");
        $(img[0]).css("transform", "translate(0,-40px)");
        $(img[0]).css("opacity", "0");

        $(img[1]).css("transition", "all 0.5s");
        $(img[1]).css("transform", "translate(0,10px)");
        $(img[1]).css("opacity", "1");
        $(img[0]).css("opacity","0");
        $(img[2]).css("opacity","0");
        $(img[3]).css("opacity","0");
        index=1;
        return index;

    });

    $(lis[2]).click(function () {
        $(lis[2]).addClass('active');
        $(lis[2]).siblings().removeClass('active');

        $(img[1]).css("transition", "all 0.5s");
        $(img[1]).css("transform", "translate(0,-40px)");
        $(img[1]).css("opacity", "0");

        $(img[2]).css("transition", "all 0.5s");
        $(img[2]).css("transform", "translate(0,10px)");
        $(img[2]).css("opacity", "1");
        $(img[0]).css("opacity","0");
        $(img[1]).css("opacity","0");
        $(img[3]).css("opacity","0");
        index=2;
        return index;

    });


    $(lis[3]).click(function () {
        $(lis[3]).addClass('active');
        $(lis[3]).siblings().removeClass('active');

        $(img[2]).css("transition", "all 0.5s");
        $(img[2]).css("transform", "translate(0,-40px)");
        $(img[2]).css("opacity", "0");

        $(img[3]).css("transition", "all 0.5s");
        $(img[3]).css("transform", "translate(0,10px)");
        $(img[3]).css("opacity", "1");
        $(img[0]).css("opacity","0");
        $(img[1]).css("opacity","0");
        $(img[2]).css("opacity","0");
        index=3;
        return index;
    });


    $(function(){
        function show(){
            $(lis[index]).trigger('click');
            index++;
            if(index==4){
                index=0;
            }
        }
    setInterval(show,3000);
    });

    function getVal(){
         result = $("#exampleInputEmail2").val();
    }
$("#exampleInputEmail2").keyup(function () {
    getVal();
    if((result.indexOf("@") != -1)&&(result.indexOf(".com") != -1&&result.length>11)==true){
       $("#btn3").css("cursor","pointer");
    }
    else{
        $("#btn3").css("cursor","not-allowed");
    }
})

});


