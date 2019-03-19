$(function(){
   $(".zzq_min_ri").click(function(){
       $(".zzq_min_man").toggle();
   });
//    $(".zzq_min_li_he").click(function(){
//        $(".zzq_ban_lis").toggle();
//    });
//    $(".zzq_ban_lis>li").click(function(){
//        $(this).find(".sd").toggle();
//    })

    $(".show_dqf").click(function(){
        var parent = this.parentNode;
        $(parent).find(">ul").toggleClass("show_block");
    });


    
})