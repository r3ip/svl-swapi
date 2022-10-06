const AWS = require('aws-sdk');

const listarUsuarios = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const respuesta = await dynamodb.scan({
            TableName: 'usersTable',
        }).promise();
    
        return {
            status: 200,
            body: respuesta.Items
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { listarUsuarios }