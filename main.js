//API clima
let temperaturaValor = document.getElementById('temperatura-valor')
let temperaturaDescripcion = document.getElementById('temperatura-description')
let ubicacion = document.getElementById('ubicacion')
let iconoAnimado = document.getElementById('icono-animado')

let lat = -24.183388;
let lon = -65.331502;
let API_KEY= "b856f7ee0ff958361a8997be08cac1bb";
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${API_KEY}`;

fetch(url)
  .then( response => {return response.json()})
  .then( data => {
   
    let temp = Math.round(data.current.temp);
    temperaturaValor.textContent  = `${temp} °C`;
  
    let description = data.current.weather[0].description;
    temperaturaDescripcion.textContent   = description.toUpperCase();

    let iconCode = data.current.weather[0].icon;
    const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`
    icono.src = urlIcon;
  })
  .catch( error => {
    console.log(error);
  }) 
 


async function saveData(event) {
    event.preventDefault();
    const message = {
      business : document.getElementById('business').value,
      name : document.getElementById('name').value,
      phone : document.getElementById('phone').value
    }
    console.log(message);
    try{
      let response = await fetch ("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        body: JSON.stringify(message),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        let data = await response.json()
        console.log(data)
        Swal.fire({
          icon:'success',
          title: 'Mensaje enviado',
          showConfirmButton: false,
          timer: 1500
        });
        cleanForm();
      }catch(error){
      console.log(error)
    }
}

function cleanForm() {
  let formulario = document.getElementById('formulario');
  formulario.reset();
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", saveData);


