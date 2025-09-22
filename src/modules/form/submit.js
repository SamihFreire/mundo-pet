import dayjs from "dayjs";

const form = document.querySelector("form");
const dateForm = document.getElementById("date-form");

//Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

if(form != null){
    //Carrega a data atual no input de data
    dateForm.value = inputToday;

    //Definindo a data mínima como a data atual
    dateForm.min = inputToday;

    form.onsubmit = (event) => {
        //Previne o comportamento padrão do formulário
        event.preventDefault();
    }
}