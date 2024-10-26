<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Un framework progresivo de <a href="http://nodejs.org" target="_blank">Node.js</a> para construir aplicaciones eficientes y escalables del lado del servidor.</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Descripción

Proyecto correspondiente al parcial del segundo corte para la asignatura *Electiva Disciplinar II*. Implementa registro de usuarios, autenticación y protección de rutas con token.

## Compilar y ejecutar el proyecto

```bash
# desarrollo
$ npm run start

# modo observador
$ npm run start:dev

# producción
$ npm run start:prod
```

## Endpoints
Este proyecto cumple con lo solicitado, incluyendo registro de usuarios, autenticación y protección de rutas con token. 

- **Registro de usuarios:** Permite que un usuario se registre en la app. Se valida que los datos sean correctos antes de guardarlos en la base de datos.
 - **Datos requeridos:** 
 ```json
  {
    "FirstName": "Nombre",
    "LastName": "Apellido",
    "Age": 25,
    "email": "correo@example.com",
    "password": "contraseña_segura"
  }
```
- **Autenticación:** Permite a los usuarios registrados iniciar sesión. Al hacerlo correctamente, devuelve un token (JWT) que se usará para acceder a rutas protegidas. 
  
  **Datos requeridos:** 
 ```json
  {
    "email": "correo@example.com",
    "password": "contraseña_segura"
  }
```
**Respuesta:** 
```json
{
  "access_token": "token_de_autenticación"
}
```

## Developer
- ### **Jose David Angarita Erazo**

