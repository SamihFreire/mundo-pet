import dayjs from "dayjs"
import { schedulesDay } from "../schedules/load.js"

const scheduleDateHeader = document.getElementById("schedule-date-header");

//Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual no input de data
scheduleDateHeader.value = inputToday;

scheduleDateHeader.addEventListener("change", () => {
    schedulesDay();
});

