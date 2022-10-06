const axios = require('axios');

const baseURL = 'https://swapi.py4e.com/api'

const listarPersonas = async () => {
    try {
        const respuesta = await axios.get(`${baseURL}/people`);
        const { data } = respuesta;
        return data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { listarPersonas }