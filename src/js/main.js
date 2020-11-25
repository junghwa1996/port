$(function(){

    

    var $menu    = $("header > div > nav > ul li a"),
        $content = $(".scroll");

    $menu.click(function(){

        // $menu.removeClass("on");
        $(this).addClass();


        $('html,body').animate({
            scrollTop:$(this.hash).offset().top-60
            //대상의 해쉬태그 링크값의 최상단(-60px)로 이동
        },400);

    });
    //메뉴 이동

    // $(window).scroll(function(){
    //     $content.each(function(){
    //         if ($(this).offset().top <= $(window).scrollTop()) {
    //             var idx = $(this).index();
    //             $menu.removeClass("on");
    //             $menu.eq(idx).addClass("on");
    //         }
    //     });
    // });
    

    $('.skill-img > ul li').click(function(){
        var skill_id = $(this).attr('data-skill');

        $('.skill-img > ul li').removeClass('on');
        $('.skill-txt ul li').removeClass('on');
        $(this).addClass('on');
        $("#"+skill_id).addClass('on');
    })
    //스킬 탭 부분


    $("#portfolio > div > ul li").click(function(){
        var pop_id = $(this).attr('data-pop');
        $(".popup").addClass('on');
        $(this).addClass('on');
        $("#"+pop_id).addClass('on');

        $(".close-btn").click(function(){
            $(".popup").removeClass('on');
            $(this).removeClass('on');
            $("#"+pop_id).removeClass('on');
        });
    })
    //포트폴리오 팝업
    

});



//---------애니메이션----------//


//reset Class가 들어가있는 태그의 offsetTop값을 구한다
//구한 값의 특정한 값을 더한 후 scrollTop의 값이 앞전에 구한 값보다 클때,
//animate_top Class를 추가 시킨다. 

// function test(){
//     var $mbti = $(".about-mbti"),
//         $offset = $mbti.offset().top-300;

//     $(window).scrollTop(function(){
//         if($(this).scrollTop() > $offset){
//             $mbti.addClass("animatae_top");
//         }
//     });
// }

