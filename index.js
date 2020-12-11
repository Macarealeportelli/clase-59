// ejercicio
// Recorrer el objeto con un for in
// mostrar en consola el mensaje "la propiedad --- vale ---"
// utilizar notacion de corchetes

var producto = {
    id: 'ADA-020',
    title: 'Gubergren sed est amet voluptua',
    price: 123.75,
    picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
    condition: 'nuevo',
    free_shipping: true,
    location: 'Capital Federal'
  };

for (let propiedad in producto){
    console.log(`la propiedad ${propiedad} vale "${producto[propiedad]}"`)
}


// ejercicio 2
