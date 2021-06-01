$(document).ready(function(){
    
    /**
     * Thực hiện mở rộng, thu lại menu cấp 2
     * DVTUAN 1/06/2021
     */
    $("#menu-item").click(function(){
        $(".menu-dropdown").slideToggle(400);
        // $("#chevron-down").fadeToggle();
        // $("#chevron-up").fadeToggle();
    });

    /**
     * Thực hiện thu nhỏ menu
     * DVTUAN 1/06/2021
     */
    $(".reorder").click(function(){
        $(".reorder").css("display","none");
        $(".MISA").css("display","none");
        $(".title-item").css("display","none");
        $(".chevron-down").css("display","none");
        $(".menu-big").css("display","none");
        $(".menu").animate({width: '70px'}, "slow");
        $(".content").css("width", "calc(100% - 70px)");
        $(".menu-dropdown").addClass("menu-dropright");
    });

    /**
     * Thực hiện phóng to menu
     * DVTUAN 1/06/2021
     */
    $(".zoom").click(function(){
        
        $(".menu").animate({width: '17%'}, "slow");
        $(".menu-dropdown").removeClass("menu-dropright")
        setTimeout(() => {
            $(".reorder").css("display","block");
            $(".chevron-down").css("display","block");
            $(".menu-big").css("display","block");   
            $(".MISA").css("display","block");
            $(".title-item").css("display","inline");
        }, 500);
        
    });

    zoom();

});

/**
     * Thực hiện khi thu nhỏ màn hình
     * DVTUAN 1/06/2021
     */

function zoom(){
    if($(window).width() < 1366) {
        $(".reorder").css("display","none");
        $(".MISA").css("display","none");
        $(".title-item").css("display","none");
        $(".chevron-down").css("display","none");
        $(".menu-big").css("display","none");
        $(".menu").animate({width: '70px'}, "300");
        $(".content").css("width", "calc(100% - 70px)");
        $(".menu-dropdown").addClass("menu-dropright");
    } 
    
    if($(window).width() > 1366) {
        $(".menu").animate({width: '16%'}, "300");
        $(".menu-dropdown").removeClass("menu-dropright")
        setTimeout(() => {
            $(".reorder").css("display","block");
            $(".chevron-down").css("display","block");
            $(".menu-big").css("display","block");   
            $(".MISA").css("display","block");
            $(".title-item").css("display","inline");
        }, 500);
    } 
}


