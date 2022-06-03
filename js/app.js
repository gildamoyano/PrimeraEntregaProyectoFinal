alert("Bienvenid@ a Calamar Swimwear")

const carrito = [];

class bikinis {
    constructor(modelo, precio) {

    this.modelo = modelo;
    this.precio = precio;
    }

};

const totalCarrito = () => {
    let sumaTotal = 0;
    carrito.forEach((item) => {
      sumaTotal += item.precio;
    });
    return sumaTotal;
  };

const mensaje = (modeloElegido) => {
  switch (modeloElegido) {
    case "cali":
      console.log(`${modeloCali.nombre} Agregado al carrito`);
      break;
    case "london":
      console.log(`${modeloLondon.nombre} Agregado al carrito`);
      break;
    case "maldivas":
      console.log(`${modeloMaldivas.nombre} Agregado al carrito`);
      break;
    case "rio":
      console.log(`${modeloRio.nombre} Agregado al carrito`);
      break;
    default:
      break;
  }
};  

const mensaje2 = (talleElegido) => {
    switch (talleElegido) {
      case "talle1":
        console.log(`${talle1} Agregado al carrito`);
        break;
      case "talle2":
        console.log(`${talle2} Agregado al carrito`);
        break;
      case "talle3":
        console.log(`${talle3} Agregado al carrito`);
        break;
      case "talle4":
        console.log(`${talle4} Agregado al carrito`);
        break;
      default:
        break;
    }
  };  

const modeloCali = new Bikini("Cali", 1, 1200);
const modeloLondon = new Bikini("London", 1, 1200);
const modeloMaldivas = new Bikini("Maldivas", 1, 1200);
const modeloRio = new Bikini("Rio", 1, 1200);


const bikinis = [
  modeloCali,
  modeloLondon,
  modeloMaldivas,
  modeloRio,
];

const agregarBikini = () => {
  const bikiniElegida = prompt(`Elija su bikini:
                            ${modeloCali.nombre}
                            ${modeloLondon.nombre}
                            ${modeloMaldivas.nombre}
                            ${modeloRio.nombre}`);
  if (bikiniElegida != null) { 
    mensaje(bikiniElegida);
   
    switch (bikiniElegida) {
      case "cali":
        carrito.push(modeloCali);
        break;
      case "london":
        carrito.push(modeloLondon);
        break;
      case "maldivas":
        carrito.push(modeloMaldivas);
        break;
      case "rio":
        carrito.push(modeloRio);
        break;
      default:
        alert("Escribir correctamente el modelo de bikini");
        break;
    }

    let continuar = confirm("¿Quiere agregar otra bikini a su compra?");
    if (continuar) {
      agregarBikini(); 
    } else {
      console.log(`Total a pagar $${totalCarrito()}`); 
    }
  } else { 
    let buscar =
      prompt(`Puedes buscar tu bikini por talle")`);
    if(buscar != null){
        const buscarTalle = bikinis.filter((bikinis) => bikini.talle.includes(buscar));

        if(buscarTalle.length > 1){ 
            if(confirm(`Podrías elegir talle ${(buscarTalle[2].nombre).toUpperCase()} O talle ${(buscarTalle[3].nombre).toUpperCase()} Agrega al carrito`)){
                agregarBikini();
            }else{
                alert("Gracias por su visita");
            }
        }else{ 
            if((confirm(`Te podría llegar a interesar ${(buscarTalle[0].nombre).toUpperCase()} Agrega al carrito`))){
                agregarBikini();
            }else {
            alert("Gracias por su visita");
          }
        }    
      }else{
          alert("Gracias por su visita")
      }
    };
}

agregarBikini()