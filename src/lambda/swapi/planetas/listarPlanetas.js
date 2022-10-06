const axios = require('axios');

const baseURL = 'https://swapi.py4e.com/api'

const listarPlanetas = async () => {
    try {
        const respuesta = await axios.get(`${baseURL}/planets`);
        const { data } = respuesta;
        return data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { listarPlanetas }