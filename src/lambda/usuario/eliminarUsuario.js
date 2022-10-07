const AWS = require('aws-sdk');
require('dotenv').config();

const eliminarUsuario = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const { id } = event.pathParameters;

        await dynamodb.delete({
            TableName: process.env.TABLENAME,
            Key: { id }
        }).promise();

        return {
            status: 200,
            body: {
                message: 'usuario eliminado'
            }
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { eliminarUsuario }