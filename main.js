 var bottone = $('.close');
 //console.log(bottone);
 var opzioni = $('.hamburger-menu');
 //console.log(opzioni);
 
 var visibilita = true;
 
 

  bottone.click(function(){
   
    // Condizione per la visibilta delle opzioni. Se non sono visibili, le mostro e cambio il flag in true.
    if(visibilita === false){
      opzioni.show();
      bottone.hidden();
      visibilita = true;
    }else{// Condizione per la visibilta delle opzioni. Se sono visibili, li nascondo e cambio il flag in false.
      opzioni.hidden();
      bottone.show();
      visibilita = false;
    }
   

  })