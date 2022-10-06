const AWS = require('aws-sdk');

const obtenerUsuario = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const { id } = event.pathParameters;

        const respuesta = await dynamodb.get({
            TableName: 'usersTable',
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