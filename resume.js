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
        $(".table").fadeIn("slow");

                 });
})

$(document).ready(function(){
    $(".left").click(function(){
        $(".section").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".left3").click(function(){
        $(".table1").slideToggle("slow");
    });
});


