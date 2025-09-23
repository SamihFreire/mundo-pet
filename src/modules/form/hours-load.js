import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js"

const scheduleTime = document.getElementById("schedule-time");

export function hoursLoad({ date, dailySchedules }) {
    //Limpa os horarios anteriores
    scheduleTime.innerHTML = "";

    //Obtém os horarios indisponiveis
    const unavailableHours = dailySchedules.map((schedule) => 
        dayjs(schedule.when).format("HH:mm")
    );

    const opening = openingHours.map((hour) => {
        //Recupera somente a hora
        const [scheduleHour] = hour.split(":");

        //Adiciona a hora na data e verifica se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

        const available = !unavailableHours.includes(hour) && !isHourPast;

        return {
            hour,
            available
        }
    });

    //Renderiza os horarios na tela
    opening.forEach(({ hour, available }) => {
        const option = document.createElement("option");
        option.value = hour;
        option.textContent = hour;
        option.disabled = !available;

        scheduleTime.appendChild(option);
    })
}