const AWS = require('aws-sdk');
require('dotenv').config();

const obtenerUsuario = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const { id } = event.pathParameters;

        const respuesta = await dynamodb.get({
            TableName: process.env.TABLENAME,
            Key: { id }
        }).promise();

        return {
            status: 200,
            body: respuesta.Item
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { obtenerUsuario }