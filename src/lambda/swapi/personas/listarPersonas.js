const axios = require('axios');
require('dotenv').config();

const listarPersonas = async () => {
    try {
        const respuesta = await axios.get(`${process.env.SWAPI_BASE_URL}/people`);
        const { data } = respuesta;
        return data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { listarPersonas }