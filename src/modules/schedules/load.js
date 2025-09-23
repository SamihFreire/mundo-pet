import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { schedulesShow } from "../schedules/show.js"

//Seleciona o input de data
const selectedDate = document.getElementById("date-form");

export async function schedulesDay() {
    if(selectedDate !== null){
        //Obtém a data do input
        const date = selectedDate.value;
    
        //Busca na API os agendamentos do dia
        const dailySchedules = await scheduleFetchByDay({ date });

        //Exibe os agendamentos
        schedulesShow({ dailySchedules });

        //Renderiza as horas disponiveis para agendamento
        hoursLoad({ date });
    }
}