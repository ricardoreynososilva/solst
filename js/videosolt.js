"use strict"


$(window).scroll( function(){ 
  

  //  Calcular el scroll que hace el usuario
  let pixel = $(window).scrollTop() 
  let altura = $(window).height() 
  let scroll = pixel / altura
  console.log(scroll)
  

  //  Mostrar por consola ese scroll
  console.log( { pixel }) //  { pixel: 0 }  


  // Asociar el scroll que hace el user con el tiempoActual del vídeo
  // https://www.w3schools.com/TAGs/av_prop_currenttime.asp
  videosolt.currentTime = pixel / 1000   //  pixel / 1000 = segundos
 



})


