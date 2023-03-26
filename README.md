# Airline Check-in Simulation

Este proyecto simula el proceso de check-in en una aerolínea. Contiene una API REST construida con Node.js y Express, y un frontend sencillo creado con React.

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
cd airline-check-in-simulation
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

#LICENCIA

MIT



