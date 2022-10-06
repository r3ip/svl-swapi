const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const crearUsuario = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const { nombre, apellidos } = JSON.parse(event.body);
        const id = v4();
    
        const usuario = {
            id,
            nombre,
            apellidos
        }
    
        await dynamodb.put({
            TableName: 'usersTable',
            Item: usuario
        }).promise();
    
        return {
            status: 200,
            body: JSON.stringify(usuario)
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { crearUsuario }