/**
 * Codigo JavasCript para agregar funcionalidades a la página
 */

var matriz = [
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
];

document.getElementById('opciones').addEventListener('change', ejecutarOpcion);

/**
 * Ejecuta una acción segun la opción seleccionada
 */
function ejecutarOpcion() {
   let opcion = document.getElementById('opciones').value;

   switch (opcion) {
      case "1":
         generarMatriz();
         mostrarMatriz('i');
         break;
      case "2":
         mostrarMatriz('d');
         break;
      case "3":
        limpiarDerecha();
         mostrardiagonalP();

         break;
      case "4":
         limpiarDerecha();
         mostrardiagonali();
         
         break;
      case "5":
       mostrarsuperiord('d');
         
         break;
      case "6":
         mostrarsuperiori('i')

         break;
      case "7":
          mostrarinferiord('d') 


         break;
      case "8":
         mostrarinferiori('i')

         break;
 
      default:
         break;
   }

}

/**
 * Genera numeros aleatorios para la matriz
 */
function generarMatriz() {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         matriz[f][c] = generarNumero(10, 100);
      }   
   }
}

/**
 * 
 * @param {char} l : indica cual grilla mostrar
 */
function mostrarMatriz(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         //Construir nombre
         let nombre = l + '-f' + f + 'c' + c;
         //mostrar en la casilla  matriz[f][c];
         document.getElementById(nombre).innerText = matriz[f][c];
      }   
   }   
}


function limpiarDerecha() {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         //Construir nombre
         let nombre = 'd-f' + f + 'c' + c;
         //mostrar en la casilla  matriz[f][c];
         document.getElementById(nombre).innerText = '';
      }   
   }   
}

function mostrardiagonalP(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         let nombre = 'd-f' + f + 'c' + c;
         if (f == c) {
            document.getElementById(nombre).innerText = matriz[f][c];
         }
      }   
   }   
}

function mostrardiagonali(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         let nombre = 'd-f' + f + 'c' + c;
         if ((f+c)==matriz.length - 1) {
            document.getElementById(nombre).innerText = matriz[f][c];
         }
      }   
   }   
}

function mostrarsuperiord(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         let nombre = l + '-f' + f + 'c' + c;
         if (f == 0){
            document.getElementById(nombre).innerText = matriz[f][c];
         }
         else{
            document.getElementById(nombre).innerText='';
         }
             
         }
      }   
   }   

function mostrarsuperiori(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         let nombre = l + '-f' + f + 'c' + c;
         if (f == 0){
            document.getElementById(nombre).innerText = matriz[f][c];
         }
         else{
            document.getElementById(nombre).innerText='';
         }
             
         }
      }   
   } 

   function mostrarinferiord(l) {
      for (let f = 0; f < matriz.length; f++) {
         for (let c = 0; c < matriz.length; c++) {
            let nombre = l + '-f' + f + 'c' + c;
            if (f == 4){
               document.getElementById(nombre).innerText = matriz[f][c];
            }
            else{
               document.getElementById(nombre).innerText='';
            }
                
            }
         }   
      }  
      
   
      function mostrarinferiori(l) {
         for (let f = 0; f < matriz.length; f++) {
            for (let c = 0; c < matriz.length; c++) {
               let nombre = l + '-f' + f + 'c' + c;
               if (f == 4){
                  document.getElementById(nombre).innerText = matriz[f][c];
               }
               else{
                  document.getElementById(nombre).innerText='';
               }
                   
               }
            }   
         }
/**
 * .
 * Genera un numero entre min y max
 * @param {int} min: valor mínimo 
 * @param {int} max: valor máximo 
 * @returns num
 */
function generarNumero(min, max) {
   let num = parseInt(Math.random() * (max - min)) + min;
   return num;
}

