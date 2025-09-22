import { schedulesDay } from "../schedules/load.js"

const dateForm = document.getElementById("date-form");

dateForm.onchange = () => schedulesDay();