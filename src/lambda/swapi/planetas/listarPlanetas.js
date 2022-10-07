const axios = require('axios');
require('dotenv').config();

const listarPlanetas = async () => {
    try {
        const respuesta = await axios.get(`${process.env.SWAPI_BASE_URL}/planets`);
        const { data } = respuesta;
        return data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { listarPlanetas }