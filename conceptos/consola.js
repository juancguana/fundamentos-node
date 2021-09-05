console.log('Algo');
console.info('Algo');
console.error('Algo');
console.warn('Algo');

let tabla = [
  {
    a: 1,
    b: 'z',
  },
  {
    a: 2,
    b: 'otra',
  },
];

console.log(tabla);
console.table(tabla);

console.group('Conversacion');
console.log('Hola');
console.group('bla');
console.log('Bla bla');
console.log('Bla bla');
console.groupEnd('bla');
console.log('Adios');
console.groupEnd('Conversacion');
console.log('Otra cosa');

function func1() {
  console.group('Funcion 1');
  console.log('Esto es de la funcion 1');
  console.log('Esto tambien');
  func2()
  console.log('Hemos vuelto a la funcion 1');
  console.groupEnd('Funcion 1');
}

function func2() {
  console.group('Funcion 2');
  console.log('Ahora estamos en la funcion 2');
  console.groupEnd('Funcion 2');
}

console.log('Empezamos');
func1()

console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
console.count('veces')
