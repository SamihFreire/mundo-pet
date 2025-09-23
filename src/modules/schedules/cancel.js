import { schedulesDay } from "../schedules/load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"
const periods = document.querySelectorAll(".period");

//Gera evento click para lista (manhã, tarde e noite)
periods.forEach((period) => {
    //Captura o evento click na lista
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("remove-schedule")){
            //Obtem a li do pai clicado
            const item = event.target.closest("li");
            
            //Obtem o id do agendamento para remover
            const { id } = item.dataset; 

            //Confirma que o id foi selecionado
            if(id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar este agendamento?");

                if(isConfirm) {
                    //Faz a requisição para remover o agendamento
                    await scheduleCancel({ id });

                    //Recarrega os agendamentos
                    schedulesDay();
                }
            }
        }
    })
})