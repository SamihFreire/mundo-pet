import { hoursLoad } from "../form/hours-load.js"

//Seleciona o input de data
const selectedDate = document.getElementById("date-form");

export function schedulesDay() {
    //Obtém a data do input
    const date = selectedDate.value;

    //Renderiza as horas disponiveis para agendamento
    hoursLoad({ date });
}