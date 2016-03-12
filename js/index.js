//<![CDATA[ 

$(window).load(function(){
    $("#navControlButton").bind('click', function(){
        var tmp = $("#navBar").css("left") == 0 ? -260 : 0;
        $("#navBar").css("left", tmp);
    });

    $("#navList li:eq(0)").bind('click', function(){
        location.reload();
    });
    $("#navList li:eq(1)").bind('click', function(){
        $("#content").load("data.html #members");
    });
    $("#navList li:eq(2)").bind('click', function(){
        $("#content").load("data.html");
    });
    $("#navList li:eq(3)").bind('click', function(){
        $("#content").load("comment.html");
    });
});
//]]> 