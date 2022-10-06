const AWS = require('aws-sdk');

const eliminarUsuario = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const { id } = event.pathParameters;

        await dynamodb.delete({
            TableName: 'usersTable',
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