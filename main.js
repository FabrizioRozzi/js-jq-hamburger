 var bottone = $('.hamburger-menu');
 //console.log(bottone);
 var opzioni = $('.hamburger-menu ul');
 //console.log(opzioni);
 var icona = $('close');
 var visibilita = true;
 
 

  bottone.click(function(){
   
    // Condizione per la visibilta delle opzioni. Se non sono visibili, le mostro e cambio il flag in true.
    if(visibilita === false){
      opzioni.show();
      icona.hidden();
      visibilita = true;
    }else{// Condizione per la visibilta delle opzioni. Se sono visibili, li nascondo e cambio il flag in false.
      opzioni.hidden();
      icona.show();
      visibilita = false;
    }
   

  })