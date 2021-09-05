// const p = require('process') esta en global

process.on('beforeExit', ()=>{
  console.log('El proceso va a terminar');
})

process.on('exit', ()=>{
  console.log('El proceso acabo');
  setTimeout(() => {
    console.log('No se ejecuta nunca');
  }, 0);
})

setTimeout(() => {
  console.log('Si se ve');
}, 0);

process.on('uncaughtException', (err, origen) => {
  console.error('Olvidamos capturar un error');
  setTimeout(() => {
    console.log('Viene de las exepciones');
  }, 0);
})

fun1()

console.log('Esto no aparece');
