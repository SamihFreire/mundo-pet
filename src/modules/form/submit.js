const form = document.querySelector("form");

if(form != null){
    form.onsubmit = (event) => {
        //Previne o comportamento padrão do formulário
        event.preventDefault();
    
        console.log("Formulário enviado");
    }
}