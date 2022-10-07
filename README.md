# SVL-SWAPI

Este proyecto fue realizado con la finalidad de presentar el consumo de StarWars API y Dynamodb usando Serverless Framework :D

## Requisitos 📋
 - Tener instalado Node js
 - Tener instalado el CLI de Serverless Framework via NPM
 - Tener instalado el CLI de AWS
 - Contar con una cuenta AWS

___
## Instalación 🔧

### Interfaz de línea de comandos de Serverless Framework

Para la instalación del CLI de Serverless Framework puedes revisar la documentación  https://www.serverless.com/framework/docs/getting-started.

o puedes ejecutar el siguiente comando que lo instalara de forma global en tu computador.

```
npm install -g serverless
```

### Dependencias de node

Para la instalacion de las dependecias de node en el proyecto ejecutar el siguiente comando.

```
npm install o npm i
```

### Interfaz de línea de comandos de AWS

Para la instalación del CLI AWS puedes revisar el enlace: https://aws.amazon.com/es/cli/

___
## Configuración de los permisos de AWS en el computador 🔧

En AWS deberas generar en el sericio IAM un usuario con el cual podras generar un "ID de clave de acceso" y una "Clave de acceso secreta"

```
//ejemplo:
ID de clave de acceso: AKIA6B2DQXOHXXXXXXXX
Clave de acceso secreta: Q8owDDZ7AY8qG6bx/SPx+t1Wk9ms1Os+xxxxxxxx
```

Abre tu terminal(cmd) y confirma que tienes instalado el CLI de AWS usando el comando

```
aws --version

// ejemplo de respuesta: aws-cli/1.25.87 Python/3.8.10 Windows/10 botocore/1.27.86
```

Una ves confirmado que cuantas con el CLI de AWS en tu computador configura tu perfil con los accesos generados. Ejecuta en el terminal el comando

```
aws configure

//ejemplo de respuesta:
Access Key ID:

Secret Access Key:

Region name:

Default output format:
```
___
## Despliegue 🚀

Para el despliege del proyecto a AWS con serverless framework deberas usar el comando

```
serverless deploy
```

## Endpoints
### Peticiones a Dynamodb
- GET: /usuario
- GET: /usuario/{id}
- POST: /usuario
- PUT: /usuario/{id}
- DELETE: /usuario/{id}

```
//ejemplo body:

{
  "nombre": "Nombre usuario",
  "apellidos": "Apellido usuario"
}

```


### Peticiones a SWAPI
- GET: /swapi/persona
- GET: /swapi/persona/{id}
- GET: /swapi/planeta
- GET: /swapi/planeta/{id}

## Autor ✒️

* **Piero Valenzuela** - [Github](https://github.com/r3ip)

