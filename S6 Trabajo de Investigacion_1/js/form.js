const openModal= document.querySelector('.formulario button');
const modal= document.querySelector('.modal');
const closemodal = document.querySelector('.modal_close');

openModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
    
});
closemodal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});


function captura(){
    var nombre=document.getElementById("nombre").value;
    var email=document.getElementById("email").value;

    var conca=nombre+", "+"revise su correo =>"+" "+email+" "+"para confirmar su registro."+"  "+"Gracias por su comentario => todo Ok."
    var datos=document.getElementById("datos");
    datos.innerHTML=conca;

}