# Boilerplate NodeJS 🚀

Este repositorio es el punto de partida ideal para proyectos de Node.js que deseen seguir buenas prácticas de desarrollo. Incluye un ejemplo práctico de un CRUD implementado utilizando el patrón de repositorio y una arquitectura de controlador–servicio, lo que facilita la escalabilidad y el mantenimiento del código.

## 🌟 Características

- **Express ⚡:** Framework minimalista y flexible para construir APIs y aplicaciones web.
- **Joi 📏:** Validador de datos robusto que asegura que las entradas cumplan con la estructura y tipos requeridos.
- **TypeScript ⚛:** Tipado estático que mejora la calidad y escalabilidad del código.
- **Mongoose 🗄️:** ODM para gestionar bases de datos MongoDB de forma sencilla y estructurada.
- **Pino 🚀:** Logger de alto rendimiento que genera logs estructurados para facilitar la depuración y el monitoreo.
- **JWT & Bcrypt 🔐:** Autenticación segura mediante JSON Web Tokens y hashing de contraseñas.
- **CRUD de ejemplo:** Un ejemplo práctico de CRUD implementado usando el patrón de repositorio y una arquitectura de controlador–servicio, demostrando un código limpio y modular.

## 🔧 Tecnologías utilizadas

- **Node.js:** Plataforma para ejecutar JavaScript en el servidor.
- **Express:** Framework para construir APIs REST.
- **TypeScript:** Superconjunto de JavaScript que añade tipado estático.
- **Prisma & Mongoose:** Herramientas para el manejo de la base de datos.
- **Pino:** Logger estructurado de alto rendimiento.
- **Joi:** Validación de datos.
- **JSON Web Tokens (JWT):** Autenticación basada en tokens.
- **Bcrypt:** Hashing de contraseñas.

## 🚀 Configuración inicial

### 1. Clonar o usar la plantilla

En vez de clonar este repositorio directamente, haz clic en el botón **"Use this template"** en GitHub para crear un nuevo repositorio basado en esta plantilla.

### 2. Configurar las variables de entorno

Copia el archivo `.env.example` a `.env` y actualiza los valores según tu entorno:

```bash
cp .env.example .env
```

Ejemplo parcial de archivo `.env`:

```dotenv
# Port on which the server will run.
PORT=3000  # Change if needed.

# Logging level for the application.
# Options: debug, info, warn, error. For production, consider setting this to "info" or "warn".
LOG_LEVEL=debug

# Secret key used for signing tokens and other cryptographic operations.
SECRET_KEY=<your-secret-key>

# Database connection URL.
# For MongoDB Atlas:
DATABASE_URL=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority&appName=<cluster-name>
# For local MongoDB instance, uncomment the following:
# DATABASE_URL=mongodb://127.0.0.1:27017/<dbname>
# For PostgreSQL, uncomment the following:
# DATABASE_URL=postgresql://<username>:<password>@<host>:5432/<dbname>?sslmode=require
```

Para ver la configuración completa, revisa el archivo `.env.sample` en la raíz del proyecto.

### 3. Instalar dependencias

Instala las dependencias del proyecto con **pnpm**:

```bash
pnpm install
```

## 📜 Comandos npm

- **pnpm dev :** Inicia el servidor en modo desarrollo utilizando _tsx_ para ejecutar TypeScript sin necesidad de compilación previa.

```bash
tsx watch --env-file=.env ./src/server.ts
```

- **pnpm lint :** Ejecuta ESLint en el directorio `src` para detectar problemas de estilo y errores de código.

```bash
eslint src
```

- **pnpm lint:fix :** Ejecuta ESLint y corrige automáticamente los problemas que se puedan solucionar.

```bash
eslint src --fix
```

- **pnpm format :** Formatea el código en el directorio `src` usando Prettier para mantener un estilo consistente.

```bash
prettier --write src
```

## 🔧 Herramientas adicionales

### EditorConfig

El proyecto incluye un archivo `.editorconfig` para asegurar un estilo de codificación consistente.

Instala la extensión EditorConfig en VS Code para que se apliquen automáticamente las reglas definidas en el archivo.

### Prettier

Configura Prettier como formateador por defecto en VS Code y habilita el formateo al guardar.

### ESLint

Detecta problemas de estilo y errores de código.

### Conventional Commits

Instala la extensión Conventional Commits para ayudar a escribir mensajes de commit siguiendo las convenciones establecidas.

## 📢 Extensiones recomendadas para VS Code

Este proyecto incluye un archivo de configuración en la ubicación `.vscode/extensions.json` que define extensiones recomendadas para mantener un entorno de desarrollo consistente.

## ⚙️ Configuraciones del Editor (VS Code)

Este proyecto incluye un archivo de configuración en la ubicación `.vscode/settings.json` que define ajustes recomendados para mejorar la experiencia de desarrollo.

## 🚀 Arquitectura del Proyecto

El código de ejemplo implementa un CRUD utilizando una arquitectura en tres capas:

- **Controlador:**
  Maneja las solicitudes HTTP y delega la lógica de negocio a los servicios.

- **Servicio:**
  Contiene la lógica de negocio, validaciones y transformaciones. Utiliza el patrón de repositorio para interactuar con la base de datos.

- **Repositorio:**
  Implementa el acceso directo a la base de datos utilizando patrones genéricos y específicos (por ejemplo, Mongoose o Prisma).

Esta estructura permite un código modular, escalable y de fácil mantenimiento.

## 🔄 Flujo de Git

Para mantener un flujo de trabajo limpio:

1. No hagas push directamente a la rama main.
2. La rama main debe estar protegida para evitar cambios directos.
3. Crea una rama para cada nueva funcionalidad o corrección.
4. Asegúrate de que el nombre de la rama sea descriptivo y siga las convenciones establecidas.
5. Realiza Pull Requests (PRs) para integrar tus cambios después de que hayan sido revisados.
