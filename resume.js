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
        
                 })
$(document).ready(function(){
   
    var id = $(".left2");
    id.animate({
            height: '50px',
            width: '500px'

                 });
})
$(document).ready(function(){
   
    var id = $(".left3");
    id.animate({
            height: '50px',
            width: '500px'

                 });
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
        $(".table").slideToggle("slow");

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
            $("#a").css("color", "blue");
        },  
        mouseleave: function(){
            $("#a").css("color", "initial");
        }, 
        click: function(){
            $("#a").css("color", "grey");
        }  
    });
});
$(document).ready(function(){
    $("#b").on({
        mouseenter: function(){
            $("#b").css("color", "blue");
        },  
        mouseleave: function(){
            $("#b").css("color", "initial");
        }, 
        click: function(){
            $("#b").css("color", "grey");
        }  
    });
});
$(document).ready(function(){
    $("#c").on({
        mouseenter: function(){
            $("#c").css("color", "blue");
        },  
        mouseleave: function(){
            $("#c").css("color", "initial");
        }, 
        click: function(){
            $("#c").css("color", "grey");
        }  
    });
});



