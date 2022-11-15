var num = 0;
var rodar = () => {
  setInterval(suma, 1000);
};


function parar () {    
    clearInterval(rodar);
};

function suma() {
  num++;
  console.log = num;
  document.getElementById("demo").innerHTML = num;
}

