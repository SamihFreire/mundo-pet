import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js"

const scheduleTime = document.getElementById("schedule-time");

export function hoursLoad({ date }) {
    //Limpa os horarios anteriores
    scheduleTime.innerHTML = "";

    const opening = openingHours.map((hour) => {
        //Recupera somente a hora
        const [scheduleHour] = hour.split(":");

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

        return {
            hour,
            available: isHourPast
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