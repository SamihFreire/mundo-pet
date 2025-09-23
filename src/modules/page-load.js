import { schedulesDay } from "./schedules/load.js"

const formPhone = document.getElementById("form-phone");

document.addEventListener("DOMContentLoaded", function() {
    schedulesDay();
});

if(formPhone !== null) {
    formPhone.addEventListener("input", (event) => {
        handlePhone(event);
    });
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