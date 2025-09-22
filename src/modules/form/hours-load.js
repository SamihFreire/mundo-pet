import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js"

const scheduleTime = document.getElementById("schedule-time");

export function hoursLoad({ date }) {
    const opening = openingHours.map((hour) => {
        //Recupera somente a hora
        const [scheduleHour] = hour.split(":");

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        console.log({
            hour,
            available: isHourPast
        });

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