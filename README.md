# Prueba técnica de Almundo
Exámen técnico para aspirantes a desarrollador Frontend en Almundo.

# Herramientas usadas

### Front:
- Angular 4.2.2
- angular-cli 1.4.9

### Back:
- nodejs 7.7.1
- mongo db 3.2.9

# Estructura de archivos
- Server: Aplicación servidor usando node y base de datos Mongo.
- Client: Aplicación cliente usando Angular.
- Client/dist: Aplicación compilada con los recursos minificados, ofuscados, etc.

# Instrucciones de ejecución
### Servidor:
Ejecutar "mongod" para ejecutar el servicio de la base de datos Mongo.
Ejecutar dentro de la carpeta Server "npm run start".

### Cliente:
Ejecutar npm install para la instalación de dependencias
Ejecutar dentro de la carpeta Client "ng serve".

# Entornos
### Servidor:
En el archivo config.js hay las siguientes opciones:
  - environment: Para configurar el entorno (production / development).
  - useDataBase: Para definirle al servidor si utilizará los datos del archivo "data.json" o si utiliza la base de datos en Mongo (Debe estar el servicio de Mongo ejecutándose).
