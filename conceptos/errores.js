function otraFunc() {
  seRompe()
}

function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(function() {
    try {
      return 3 + z;
    } catch (error) {
      console.error('Error en mi funcion asincrona');
      cb(error)
    }
  })
}

try {
  // otraFunc()
  seRompeAsincrona((err)=> {
    console.log(err.message);
  })
} catch (error) {
  console.error('Vaya se a roto...');
  console.error(error);
  console.log('Pero no pasa nada lo hemos capturado');
}

console.error('Final');
