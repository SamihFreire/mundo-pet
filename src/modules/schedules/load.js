import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { schedulesShow } from "../schedules/show.js"

//Seleciona o input de data
const selectedDateForm = document.getElementById("date-form");

const selectedDateHeader = document.getElementById("schedule-date-header");

export async function schedulesDayForm(dateInput = null) {
    if(selectedDateForm !== null){

        //Obtém a data do input
        let date = selectedDateForm.value;
        
        //Sincroniza a data do input do formulário com a data da listagem de agendamentos
        if(dateInput) 
            date = selectedDateForm.value = dateInput;

        //Busca na API os agendamentos do dia
        const dailySchedules = await scheduleFetchByDay({ date });

        //Renderiza as horas disponiveis para agendamento
        hoursLoad({ date, dailySchedules });
    }
}

export async function schedulesDay() {
    if(selectedDateHeader !== null){
        //Obtém a data do input
        const date = selectedDateHeader.value;

        //Busca na API os agendamentos do dia
        const dailySchedules = await scheduleFetchByDay({ date });

        //Exibe os agendamentos
        schedulesShow({ dailySchedules });
    }
}