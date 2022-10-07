const axios = require('axios');
require('dotenv').config();

const obtenerPersona = async (event) => {
    try {
        const { id } = event.pathParameters;
        const respuesta = await axios.get(`${process.env.SWAPI_BASE_URL}/people/${id}`);
        const { data } = respuesta;
        return data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { obtenerPersona }