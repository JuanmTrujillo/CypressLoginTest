# CypressLoginTest
Login validation test on cypress -
Dos test simples de de validacion de login con credenciales usando cypress

Las pruebas consisten en navegar a una url especificada la cual contiene un login con ciertas credenciales dadas, una de las pruebas utiliza credinciales validas para loguearse y luego hace un assert a la url donde deberia llegar para verificar que el login fue correcto, la otra utiliza credenciales invalidas y lugo hace un assert sobre un boton y un mensaje de error, para verficar que estos se muestren correctamente luego de ingresar las credenciales no validas.

Para correr las pruebas una vez descargado el proyecto correr npm scrypt cypress para abrir cypress y luego en la carpeta ProjectLogin correr la prueba login.spec.js
