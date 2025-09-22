import dayjs from "dayjs";

const form = document.querySelector("form");
const dateForm = document.getElementById("date-form");
const inputFormTutorName = document.getElementById("form-tutor-name");
const inputFormPetName = document.getElementById("form-pet-name");
const inputFormPhone = document.getElementById("form-phone");
const textAreaFormService = document.getElementById("form-service-description");
const selectScheduleTime = document.getElementById("schedule-time");

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

        try {
            //Recuperando o nome do tutor
            const tutorName = inputFormTutorName.value.trim();

            if(!tutorName) {
                return alert("Por favor, preencha o nome do tutor.");
            }

            //Recuperando o nome do pet
            const petName = inputFormPetName.value.trim();

            if(!petName) {
                return alert("Por favor, preencha o nome do pet.");
            }

            //Recuperando o telefone para contato
            const phone = inputFormPhone.value.trim();

            if(!phone) {
                return alert("Por favor, preencha o telefone para contato.");
            }

            //Recuperando a descrição do serviço
            const serviceDescription = textAreaFormService.value.trim();
            if(!serviceDescription) {
                return alert("Por favor, preencha a descrição do serviço.");
            }

            //Recuperando a horário selecionada
            const hourSelected = selectScheduleTime.value;

            if(!hourSelected) {
                return alert("Por favor, selecione um horário para o agendamento.");
            }

            //Recupera somente a hora selecionada
            const [hour] = hourSelected.split(":");
            
            //Insere a hora na data
            const when = dayjs(dateForm.value).add(hour, "hour");
            
            const id = new Date().getTime();

            console.log({
                id,
                tutorName,
                petName,
                phone,
                serviceDescription,
                when,
            })

        } catch (error) {
            alert("Não foi possível realizar o agendamento.");
            console.log(error)
        }
    }
}

