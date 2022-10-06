const axios = require('axios');

const baseURL = 'https://swapi.py4e.com/api'

const obtenerPersona = async (event) => {
    try {
        const { id } = event.pathParameters;
        const respuesta = await axios.get(`${baseURL}/people/${id}`);
        const { data } = respuesta;
        return data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { obtenerPersona }