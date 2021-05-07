const imagem = document.querySelector('.conteudo__imagemJogo');
const arrayImg = ['kratos','watchDogs'];
const max = arrayImg.length;
const fundo = document.querySelector('.imageCity');
let time = 38000,
    currentImageIndex = 0;

fundo.style.right = '-5px';
list_url_image = {
    watchDogs : './assets/imagem/watchdogs.png',
    kratos : './assets/imagem/image-removebg-preview.png'
}

list_url_fundo = {
    fundo_kratos: './assets/imagem/montanha 2.jpg',
    fundo_watchDogs: "./assets/imagem/citywat.jpg"
}

function nextImage(){    
    imagem.src = list_url_image[arrayImg[currentImageIndex]];
    
    currentImageIndex++;
    if(currentImageIndex >= max){
        currentImageIndex = 0;
    }
    
   
    
}

function mudaFundo(){
    fundo.style.right = '-5px';
    if(currentImageIndex === 1){
        
        fundo.src = list_url_fundo.fundo_kratos
    }else {
        
        fundo.src = list_url_fundo.fundo_watchDogs
    }
}

function start(){
    setInterval(() => {
        fundo.style.right = '-750px';
        nextImage();
        setInterval(() => {
            mudaFundo()
        }, 3000);
    }, time);
   
    
}


window.addEventListener("load",start)


