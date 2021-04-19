 var bottone = $('.header-right a');
 //console.log(bottone);
 var opzioni = $('.hamburger-menu');
 //console.log(opzioni);
 var x = $('.close');
 var visibilita = false;
 
 

  bottone.click(function(){
   


      $('.hamburger-menu').show();
     
      

  })

  
  x.click(function(){
    console.log("sono qui")
    $('.hamburger-menu').hide();

  })



