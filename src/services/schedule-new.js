import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, tutorName, petName, phone, serviceDescription, when }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ id, tutorName, petName, phone, serviceDescription, when }),
        })

        alert("Agendamento realizado com sucesso!");

    } catch (error) {
        alert("Não foi possível realizar o agendamento. Tente novamente mais tarde.");
    }
}