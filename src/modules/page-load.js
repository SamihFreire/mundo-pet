import dayjs from "dayjs";
import { schedulesDay, schedulesDayForm } from "./schedules/load.js"

const form = document.querySelector("form");
const sectionCreateSchedule = document.querySelector(".create-schedule");
const selectedDateHeader = document.getElementById("schedule-date-header");
const formPhone = document.getElementById("form-phone");
const closeForm = document.querySelector(".close-form");
const btnNewSchedule = document.getElementById("form-new-schedule");
const footerContent = document.querySelector(".footer-content");
const formInputs = document.querySelectorAll("form input, form textarea");

const dateNow = dayjs(new Date()).format("YYYY-MM-DD")

document.addEventListener("DOMContentLoaded", function() {
    schedulesDay();
    schedulesDayForm()
});

window.addEventListener("click", (event) => {
    if(event.target === btnNewSchedule) {

        footerContent.classList.add("occult");
        form.classList.add("show");
        sectionCreateSchedule.classList.add("show");

        schedulesDayForm(selectedDateHeader.value);

    }else if(event.target !== sectionCreateSchedule && !sectionCreateSchedule.contains(event.target)) {

        form.classList.remove("show");
        sectionCreateSchedule.classList.remove("show");
        footerContent.classList.remove("occult");

        clearForm();
    }
});

if(formPhone !== null) {
    formPhone.addEventListener("input", (event) => {
        handlePhone(event);
    });
}

if(closeForm !== null) {
    closeForm.addEventListener("click", () => {
        form.classList.remove("show");
        sectionCreateSchedule.classList.remove("show");
        footerContent.classList.remove("occult");

        clearForm();
    })
}

function handlePhone(event) {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

export function clearForm() {
    for (let index = 0; index < formInputs.length; index++) {
        if(formInputs[index].type === "date") {
            formInputs[index].value = dateNow;
            formInputs[index].min = dateNow;
            schedulesDayForm(selectedDateHeader.value);
            continue;
        }

        const element = formInputs[index];
        element.value = "";
    }
}