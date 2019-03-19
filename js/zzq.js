$(function(){
    $(window).scroll(function(){//开始监听滚动条

        //获取当前滚动条高度
        var wid = document.body.clientWidth;
        var topp = $(document).scrollTop();
        if(topp > 650 && wid >= 768){
        
        $(".zzq_top").css('background','#fff');
        $(".zzq_hea_ul>li").css('color','#000');
        $(".logo_black,.zzq_ico").show();
        $(".logo_white,.zzq_ico_img").hide();
        }else{
            $(".zzq_top").css('background','none');
            $(".zzq_hea_ul>li").css('color','#fff');
            $(".logo_black,.zzq_ico").hide();
            $(".logo_white,.zzq_ico_img").show();
        }
        
        })
        
    
        $(".zzq_fit_fq").hover(function(){
            $(this).find(".zzq_8_img,.zzq_7_im,.zzq_rmd_ce").toggle();
        })

        $(".zzq_head_mo_img").click(function(){
            $(".zzq_x").show();
            $(this).hide();
            $(".zzq_celi").css('left','0%');
        })

        $(".zzq_x").click(function(){
            $(".zzq_head_mo_img").show();
            $(this).hide();
            $(".zzq_celi").css('left','-100%');
        })

        $(".zzq_btn").hover(function(){
            $(this).css({'background-color':'#fff','color':'#000'});
        },function(){
            $(this).css({'background-color':'transparent','color':'#fff'});
        })
})