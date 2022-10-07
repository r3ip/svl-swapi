const axios = require('axios');
require('dotenv').config();

const obtenerPlaneta = async (event) => {
    try {
        const { id } = event.pathParameters;
        const respuesta = await axios.get(`${process.env.SWAPI_BASE_URL}/planets/${id}`);
        const { data } = respuesta;
        return data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { obtenerPlaneta }