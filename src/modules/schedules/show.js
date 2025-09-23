import dayjs from "dayjs";

//Seleciona as sessões manhã, tarde e noite
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
    try {
        //Limpa as listas
        periodMorning.innerHTML = "";
        periodAfternoon.innerHTML = "";
        periodNight.innerHTML = "";

        //Renderiza os agendamentos na tela
        // toSorted() torna a lista imutável e é usado para ordenar os agendamentos por hora
        dailySchedules.toSorted((a, b) => new Date(a.when) - new Date(b.when))
        .forEach((schedule) => {
            const li = document.createElement("li");
            const divExternal = document.createElement("div");
            const strongTime = document.createElement("strong");
            
            const divInternal = document.createElement("div");
            const spanPetName = document.createElement("span");
            spanPetName.setAttribute("id", "pet-name");

            const spanTutorName = document.createElement("span");
            spanTutorName.setAttribute("id", "tutor-name");
            
            const spanService = document.createElement("span");
            spanService.setAttribute("id", "service");

            const buttonRemove = document.createElement("button");
            buttonRemove.classList.add("remove-schedule");

            //Adicionar o ID do agendamento
            li.setAttribute("data-id", schedule.id);

            strongTime.textContent = dayjs(schedule.when).format("HH:mm");
            spanPetName.textContent = schedule.petName + '\u00A0';
            spanTutorName.textContent = `/ ${schedule.tutorName}`;
            spanService.textContent = schedule.serviceDescription;
            buttonRemove.textContent = "Remover agendamento";

            li.append(divExternal, spanService, buttonRemove);
            divExternal.append(strongTime, divInternal);
            divInternal.append(spanPetName, spanTutorName);

            const hour = dayjs(schedule.when).hour();

            if(hour <= 12) {
                if(periodMorning.innerHTML !== "") {
                    const divSeparator = document.createElement("div");
                    divSeparator.classList.add("divisor");
                    periodMorning.append(divSeparator);
                }
                periodMorning.append(li);

            } else if(hour > 12 && hour <= 18) {
                if(periodAfternoon.innerHTML !== "") {
                    const divSeparator = document.createElement("div");
                    divSeparator.classList.add("divisor");
                    periodAfternoon.append(divSeparator);
                }
                periodAfternoon.append(li);
            } else {
                if(periodNight.innerHTML !== "") {
                    const divSeparator = document.createElement("div");
                    divSeparator.classList.add("divisor");
                    periodNight.append(divSeparator);
                }
                periodNight.append(li);
            }
        });

        console.log()

    } catch (error) {
        alert("Não foi possível exibir os agendamentos. Tente novamente mais tarde.");
        console.log(error);
    }
}