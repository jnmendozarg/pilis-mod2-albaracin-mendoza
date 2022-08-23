// Al hacer scroll en la pagina se ejecuta esta funcion:
window.onscroll = function() {myFunction()};

// Identificar a la barra de navegacion
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Dar la clase sticky en la navbar cuando se esta haciedno el scroll. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//El evento load se dispara cuando un recursos y sus recursos dependientes terminaron de cargar  
//window.addEventListener('load',() =>{})
https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=-24.183388&lon=-65.331502&dt={time}&appid=b856f7ee0ff958361a8997be08cac1bb

lat = -24.183388; //al poner let me dice problemas en consola
lon = -65.331502;
API_KEY= "b856f7ee0ff958361a8997be08cac1bb";

//https://api.openweathermap.org/data/2.5/onecall?lat=-24.183388&lon=-65.331502&exclude={part}&appid=b856f7ee0ff958361a8997be08cac1bb

const url_base = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
console.log(url_base);
