import dayjs from "dayjs";
import { apiConfig } from "../services/api-config.js";

export async function scheduleFetchByDay({ date }) {
    try {
        //Faz a requisição para a API buscando os agendamentos do dia
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        //Converte a resposta em JSON
        const data = await response.json();

        //Filtra os agendamentos pela data selecionada
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"));

        return dailySchedules;   
    } catch (error) {
        console.error(error);
        alert("Não foi possível buscar os agendamentos do dia selecionado. Tente novamente mais tarde.");
    }
}