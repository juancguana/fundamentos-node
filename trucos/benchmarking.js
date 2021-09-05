console.time('listo')
let suma = 0;
console.time('bucle')
for (let i = 0; i < 1000000; i++) {
  suma += 1
}
console.timeEnd('bucle');


let suma2 = 0;
console.time('bucle2')
for (let i = 0; i < 1000000000; i++) {
  suma2 += 1
}
console.timeEnd('bucle2');

console.time('asincrono');
console.log('empieza el proceso asincrono');

asincrona().then(()=>{
  console.timeEnd('asincrono')
})

console.timeEnd('listo')


function asincrona() {
  return new Promise((resolve)=> {
    setTimeout(() => {
      console.log('Termina el proceso asincrono');
      resolve()
    });
  })
}