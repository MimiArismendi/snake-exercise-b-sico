
var tabla = document.getElementById('tabla');
var serpiente = document.getElementById('serpiente');

document.addEventListener("keydown", avanzarSerpiente);

var posicionX = 0;
var posicionY= 0;
var movimiento = 20;


function avanzarSerpiente() {
  switch (event.keyCode){
      case 37 :
        posicionX = posicionX - movimiento;
        if (posicionX < 0){
           gameOver();
        } else{
          serpiente.style.marginLeft = posicionX +"px" ;
        }
      break;
      case 39 :
        posicionX = posicionX + movimiento;
        if (posicionX > 480){
          gameOver();
        } else{
          serpiente.style.marginLeft = posicionX +"px" ;
        }
      break;
      case 38 :

        posicionY = posicionY - movimiento;
        if (posicionY < 0){
          gameOver();
        } else{
          serpiente.style.marginTop = posicionY +"px" ;
        }
      break;
      case 40 :
        posicionY = posicionY + movimiento;
        if (posicionY > 480){
           gameOver();
        } else{
          serpiente.style.marginTop = posicionY +"px" ;
        }
      break;
      case 13 :
        reinicioJuego();
        alert(event.key);
      break;
      
  }
}

function gameOver() {
  alert("GAME OVER");
  document.removeEventListener("keydown", avanzarSerpiente);
}

var reinicio = document.getElementById("reinicio");
reinicio.addEventListener("click",reinicioJuego);

function reinicioJuego() {
  posicionX = 0;
  posicionY = 0;
  serpiente.style.marginLeft = posicionX;
  serpiente.style.marginTop = posicionY;
  document.addEventListener("keydown", avanzarSerpiente);
}
