$(document).ready(function(){
        var div = $(".left");
        //div.animate({height: '300px', opacity: '0.4'} );
        //div.animate({width: '300px', opacity: '0.8'});
        //div.animate({height: '50px', opacity: '0.4'} );
        //div.animate({width: '100px', opacity: '0.8'} );
        //div.animate({height: '300px', opacity: '0.4'} );
        //div.animate({height: 'toggle'}, "slow");
        //div.animate({height: 'toggle'}, "slow");
         div.animate({height: '50px',width:'500px', opacity: '0.4'}, "slow");
        
                 })

$(document).ready(function(){
        var divt = $("#divt");
        divt.animate({height: '300px', opacity: '0.4'} );
        divt.animate({width: '300px', opacity: '0.8'});
        divt.animate({height: '50px', opacity: '0.4'} );
        divt.animate({width: '100px', opacity: '0.8'} );
        divt.animate({height: '300px', opacity: '0.4'} );
        divt.animate({height: 'toggle'}, "slow");
        divt.animate({height: 'toggle'}, "slow");
         divt.animate({height: '50px',width:'500px', opacity: '0.6'}, "slow");
         divt.animate({height: '50px',width:'50px', opacity: '1'}, "slow");
         divt.animate({left: '20%',width:'800px', height:'100px', opacity: '0.8'}, "slow");
         divt.css("background-color", "grey");
                  //$(".divt2").animate{left: '200px',width:'700px', height:'100px', opacity: '1'}, "slow");
         //$(".intro").animate({fontSize:'2em'},"slow");
                 })


$(document).ready(function(){
   
    var id3 = $(".left3");
    id3.animate({
            height: '50px',
            width: '500px'
     })
     var id2 = $(".left2");
    id2.animate({
            height: '50px',
            width: '500px'
     })
     $(".head2").click(function(){
        $("html,body").animate({"scrollTop":$(".p01").offset().top});
        $(".nav li").css("background-color","white");
        $(".nav li:eq(0)").css("background-color","green");
        $("#tip1").css("opacity","1");
        $("#tip2,#tip3,#tip4,#tip5").css("opacity","0.5");
        n=1;
    })

    $(".nav li:eq(0),#tip1").click(function(){
    	$("html,body").animate({"scrollTop":$(".p01").offset().top});
    	$(".nav li").css("background-color","white");
    	$(".nav li:eq(0)").css("background-color","green");
    	$("#tip1").css("opacity","1");
    	$("#tip2,#tip3,#tip4,#tip5").css("opacity","0.5");
        n=1;
    })
    $(".nav li:eq(1),#tip2").click(function(){
    	$("html,body").animate({"scrollTop":$(".p02").offset().top});
    	$(".nav li").css("background-color","white");
    	$(".nav li:eq(1)").css("background-color","green");			
    	$("#tip2").css("opacity","1");
    	$("#tip1,#tip3,#tip4,#tip5").css("opacity","0.5");
        n=2;

    })
    $(".nav li:eq(2),#tip3").click(function(){
    	$("html,body").animate({"scrollTop":$(".p03").offset().top});
    	$(".nav li").css("background-color","white");
    	$(".nav li:eq(2)").css("background-color","green");
    	$("#tip3").css("opacity","1");
    	$("#tip1,#tip2,#tip4,tip5").css("opacity","0.5");
        n=3;

    })
    $(".nav li:eq(3),#tip4").click(function(){
    	$("html,body").animate({"scrollTop":$(".p04").offset().top})
    	$(".nav li").css("background-color","white")
    	$(".nav li:eq(3)").css("background-color","green")
    	$("#tip4").css("opacity","1")
    	$("#tip2,#tip1,#tip3,tip5").css("opacity","0.5")
        n=4;
    })
    $(".nav li:eq(4),#tip5").click(function(){
        $("html,body").animate({"scrollTop":$(".p05").offset().top})
        $(".nav li").css("background-color","white")
        $(".nav li:eq(4)").css("background-color","green")
        $("#tip5").css("opacity","1")
        $("#tip2,#tip1,#tip3,#tip4").css("opacity","0.5")
        n=5;

    })
   $("#gototop").click(function(){
    	$("html,body").animate({"scrollTop":$(".p01").offset().top});
    	$("#gototop").css("opacity","1");
    	    })

        n=1
        var num_li = $("li").length
            moving=0
            $(window).mousewheel(function(e){
                $("html,body").stop()

                if(moving==0){
                    moving=1
                    if(e.deltaY==-1){
                        if(n<num_li){
                            n++
                        }
                    }else{
                        if(n>1){
                            n--
                        }
                    }
                }
                $("html,body").animate({"scrollTop":$(".p0"+n).offset().top},function(){moving=0})
                console.log(n)
            })	


    
    $(window).scroll(function(){
        //console.log($(window).scrollTop())
                 if($(window).scrollTop()+".4375"==$(".p01").offset().top && $(window).scrollTop()<$(".p02").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(0)").css("background-color","green")
                    $("#tip1").css("opacity","1")
    	            $("#tip2,#tip3,#tip4,tip5").css("opacity","0.5")
                    n=1;

                }else if($(window).scrollTop()+".4375"==$(".p02").offset().top && $(window).scrollTop()<$(".p03").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(1)").css("background-color","green")
                    $("#tip2").css("opacity","1")
    	            $("#tip1,#tip3,#tip4,#tip5").css("opacity","0.5")
                    $(".left").animate({height: '200px',width:'1000px', opacity: '0.4'},"50" );
                    $(".left").animate({height: '50px',width:'500px', opacity: '0.4'},"50" );
                    $(".section").slideDown("slow");
                    n=2;

                }else if($(window).scrollTop()+".4375"==$(".p03").offset().top && $(window).scrollTop()<$(".p04").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(2)").css("background-color","green")
                    $("#tip3").css("opacity","1")
    	            $("#tip2,#tip1,#tip4,#tip5").css("opacity","0.5")
                    $(".left2").animate({height: '200px',width:'1000px', opacity: '0.4'},"50" );
                    $(".left2").animate({height: '50px',width:'500px', opacity: '0.4'},"50" );
                    $(".table").fadeIn("6000");
                    n=3;
                }else if($(window).scrollTop()+".4375"==$(".p04").offset().top && $(window).scrollTop()<$(".p05").offset().top){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(3)").css("background-color","green")
                    $("#tip4").css("opacity","1")
    	            $("#tip2,#tip3,#tip1,#tip5").css("opacity","0.5")
                    $(".left3").animate({height: '200px',width:'1000px', opacity: '0.4'},"50" );
                    $(".left3").animate({height: '50px',width:'500px', opacity: '0.4'},"50" );
                    $(".table1").slideDown("slow");
                    n=4;
                }else if($(window).scrollTop()+".4375"==$(".p05").offset().top ){
                    $(".nav li").css("background-color","white")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(4)").css("background-color","green")
                    $("#tip5").css("opacity","1")
                    $("#tip2,#tip3,#tip1,#tip4").css("opacity","0.5")
                    n=5;
                                    }              })





})

$(document).ready(function(){
   
   $(".left2").click(function(){
   	    $(".left2").animate({height: '200px',width:'1000px', opacity: '0.4'},"50" );
        $(".left2").animate({height: '50px',width:'500px', opacity: '0.4'},"50" );
        //$(".left2").animate({width: '1000px', opacity: '0.8'});
        //$(".left2").animate({height: '50px', opacity: '0.4'} );
        //$(".left2").animate({width: '100px', opacity: '0.8'} );
        //$(".left2").animate({height: '300px', opacity: '0.4'} );
        //$(".left2").animate({height: 'toggle'}, "slow");
        //$(".left2").animate({height: 'toggle'}, "slow");
        //$(".left2").animate({height: '50px',width:'500px', opacity: '0.4'}, "slow");
        $(".table").fadeToggle("6000");

                 });
})

$(document).ready(function(){
    $(".left").click(function(){
    	$(".left").animate({height: '200px',width:'1000px', opacity: '0.4'},"50" );
        $(".left").animate({height: '50px',width:'500px', opacity: '0.4'},"50" );
        $(".section").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".left3").click(function(){
    	$(".left3").animate({height: '200px',width:'1000px', opacity: '0.4'},"50" );
        $(".left3").animate({height: '50px',width:'500px', opacity: '0.4'},"50" );
        $(".table1").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#a").on({
        mouseenter: function(){
            $("#a").css("color", "blue")
        },  
        mouseleave: function(){
            $("#a").css("color", "initial")
        }, 
        click: function(){
            $("#a").css("color", "grey")
        } 
    })

    $("#b").on({
        mouseenter: function(){
            $("#b").css("color", "blue")
        },  
        mouseleave: function(){
            $("#b").css("color", "initial")
        }, 
        click: function(){
            $("#b").css("color", "grey")
        } 
    })

    $("#c").on({
        mouseenter: function(){
            $("#c").css("color", "blue")
        },  
        mouseleave: function(){
            $("#c").css("color", "initial")
        }, 
        click: function(){
            $("#c").css("color", "grey")
        } 
    })

    $("#gototop").on({
        mouseenter: function(){
        	$("#gototop").animate({height:'100px',width:'100px',fontSize:'28px'})
            $("#gototop").css("color","black")
                           $("#gototop").css("opacity","1")

        },  
        mouseleave: function(){
            $("#gototop").animate({height:'80px',width:'40px'})
            $("#gototop").css("opacity","0.5")
            $("#gototop").css("color", "white")
            $("#p").css("fontSize", "28px")


        }, 
        click: function(){
            $("#gototop").css("color", "white")
            $("#gototop").animate({height:'120px',width:'120px',fontSize:'28px'})
            $("#gototop").animate({height:'80px',width:'40px',fontSize:'28px'})
            //$("#top").css("fontSize", "")

        } 
    })

})



