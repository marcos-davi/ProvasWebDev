function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas.`;
    if(hora >=0 && hora < 12){
        //BOM DIA!
        img.src ="manha.png";
        document.body.style.background =('#f1ddbc');
    }else if(hora >=12 && hora < 18){
        //BOA TARDE!
        document.body.style.background =('#be8175');
        img.src ="tarde.png";
    }else{
        //BOA NOITE!
        img.src ="noite.png";
        document.body.style.background =('#4d3f4d');
    }

}
