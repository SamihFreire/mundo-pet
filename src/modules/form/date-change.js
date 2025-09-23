import { schedulesDay } from "../schedules/load.js"

const dateForm = document.getElementById("date-form");

if(dateForm !== null) {
    dateForm.onchange = () => schedulesDay();
}