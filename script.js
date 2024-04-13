function onClick(evento){
    console.log(evento);
    evento.srcElement.innerHTML = 'Este botão foi clicado';
    
    const paragrafo  = document.querySelector('p');
    paragrafo.innerText = 'Este texto foi gerado após o clique do botão';

}
const button  = document.querySelector('button');
button.addEventListener('click',onClick);

