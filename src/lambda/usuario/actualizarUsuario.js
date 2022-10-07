const AWS = require('aws-sdk');
require('dotenv').config();

const actualizarUsuario = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const { id } = event.pathParameters;
        const { nombre, apellidos } = JSON.parse(event.body);

        await dynamodb.update({
            TableName: process.env.TABLENAME,
            Key: { id },
            UpdateExpression: 'SET nombre = :nombre, apellidos = :apellidos',
            ExpressionAttributeValues: {
                ':nombre': nombre ,
                ':apellidos': apellidos
            },
            ReturnValues: 'ALL_NEW',
        }).promise();

        return {
            status: 200,
            body: {
                message: 'usuario actualizado'
            }
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { actualizarUsuario }