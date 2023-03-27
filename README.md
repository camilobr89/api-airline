# Proyecto: Check-In de Airline

## Resumen

Este proyecto fue creado para resolver un desafío de programación que consiste en simular el proceso de check-in de una aerolínea. Se nos proporcionó una base de datos con información de vuelos, pasajeros, asientos, compras y tipos de asientos. El objetivo es crear una API REST que permita consultar el estado de un vuelo y asignar asientos a los pasajeros durante el proceso de check-in.

## Descripción del Desafío

El desafío consiste en los siguientes puntos:

1. Conectar a la base de datos proporcionada y asegurarse de que las conexiones inactivas sean manejadas correctamente.
2. Crear una API REST con un solo endpoint que permita consultar por el ID del vuelo y retornar la simulación del check-in.
3. Asegurar que los pasajeros menores de edad estén sentados al lado de al menos uno de sus acompañantes mayores de edad.
4. Tratar de asignar asientos cercanos para los pasajeros que pertenecen a la misma compra.
5. No asignar asientos de otra clase a pasajeros de clase económica.

## Tecnologías utilizadas

- Node.js
- Express
- MySQL
- React

## Rutas

Para este desafío solo se solicitó crear una ruta que permita consultar el estado de un vuelo y asignar asientos a los pasajeros durante el proceso de check-in. Las rutas creadas son las siguientes:

- GET /flights/:id/passengers

## Puntos importantes

1. Se estableció una conexión a la base de datos y se manejaron las conexiones inactivas para evitar que se cierren.
2. Se creó una función para asignar asientos a los pasajeros, teniendo en cuenta los puntos mencionados en el desafío.
3. Se implementó un pequeño frontend en React para probar y visualizar la API de forma más amigable.


## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- Node.js (v14 o superior)
- npm (v6 o superior)
- Git

## Estructura del proyecto

El proyecto está dividido en dos carpetas principales:

- `api`: Contiene la API REST construida con Node.js y Express.
- `client`: Contiene el frontend construido con React.

## Cómo ejecutar el proyecto

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clona este repositorio:

```bash
git clone git@github.com:camilobr89/api-airline.git

```
2. Navega al directorio del proyecto:

```bash
cd api-airline
```

3. Ingresa a la carpeta llamada `api`:

```bash
cd api
```

4. Instala las dependencias del proyecto `api`:

```bash
npm install
```

5. En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_HOST=host-base-de-datos
DB_USER=usuario-base-de-datos
DB_PASSWORD=contraseña-base-de-datos
DB_NAME=nombre-base-de-datos
```

Remplazar `host-base-de-datos`, `usuario-base-de-datos`, `contraseña-base-de-datos` y `nombre-base-de-datos` con tus propias credenciales para conectarte a la base de datos. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible.

6. Ejecuta el proyecto:

```bash
npm start
```

7. En una nueva terminal, navega al directorio del proyecto `cliente` e instala las dependencias:

```bash
cd client
npm install
```

7. Ejecuta el proyecto frontend:

```bash
npm start
```

El frontend debería abrirse automáticamente en tu navegador. Si no es así, visita `http://localhost:3000` en tu navegador.





## Licencia 

Este proyecto está licenciado bajo la licencia MIT. Para más información, visita [LICENSE](LICENSE).

