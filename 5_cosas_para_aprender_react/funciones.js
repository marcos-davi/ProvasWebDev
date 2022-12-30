// funciones regulares
function fRegular (a,b){
    return a + b;
}

// funciones flechas o arrow flechas

const fFlecha = (a, b) => a + b;

console.log(fRegular('Regular ',2,5));
console.log(fFlecha('Flecha ',5,5));
((a, b)=> console.log('Soy una función flecha', a + b))(10, 20);