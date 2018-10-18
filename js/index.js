$(".box").click(function(){
    console.log(1111)
    $(".box").animate({  
        left:'50px',
        bottom:'80px',
        opacity:'0.9',
        height:'+=20px',
        width:'+=20px'
    });
    
    $(".box").css({'backgroundColor':'black','color':'#fff'})

  }); 