# 📌 Instalación y Configuración del Proyecto React

Este documento explica cómo instalar y ejecutar este proyecto desde cero en tu computadora.

---

## **1️⃣ Requisitos Previos**

Antes de comenzar, asegúrate de tener instalado:

### **🔹 Node.js y npm**

React requiere Node.js para funcionar. Descárgalo desde:  
➡️ [https://nodejs.org/](https://nodejs.org/)

Luego, verifica la instalación ejecutando en la terminal:


node -v   # Debería mostrar la versión de Node.js
npm -v    # Debería mostrar la versión de npm
Si ambos comandos muestran una versión, entonces ya está instalado correctamente.

## **2️⃣ Clonar el Repositorio**
Abre la terminal y ejecuta:

git clone https://github.com/Maulozano02/repo-web.git
cd repo-web

## **3️⃣ Instalar Dependencias**
Ejecuta el siguiente comando dentro del proyecto:

npm install
Esto instalará todas las dependencias necesarias.

Si aparece el error:

ERROR in ./src/reportWebVitals.js 5:4-24
Module not found: Error: Can't resolve 'web-vitals'
Instala el paquete que falta con:

npm install web-vitals
## **4️⃣ Ejecutar el Proyecto**
Para correr la aplicación en modo desarrollo, usa:

npm start
Luego, abre tu navegador y visita:
➡️ http://localhost:3000/

## **5️⃣ Configuración y Ejecución del Backend**
A continuación se describen los pasos para levantar el backend, necesario para funciones de registro, login y recuperación de contraseña.

## **🔹 Requisitos para el Backend**
Node.js (ya lo instalaste en pasos previos)

MongoDB instalado y corriendo localmente

Si no tienes MongoDB, puedes instalarlo en Mac usando Homebrew:

brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0
mongosh
Si ves el prompt test> al correr mongosh, MongoDB está funcionando.

## **🔹 Instalar dependencias del backend**
En una terminal nueva, navega a la carpeta backend:


cd backend
npm install

## **🔹 Configurar variables de entorno**
Crea un archivo .env dentro de la carpeta backend con el siguiente contenido (ajusta los valores según tu entorno):

env

PORT=5055
MONGO_URI=mongodb://localhost:27017/auth-demo
JWT_SECRET=miclaveultrasecreta
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASS=tu_contraseña_de_app

## **⚠️ IMPORTANTE:**
Usa una contraseña de aplicación de Gmail, no tu contraseña real.

## **🔹 Levantar el servidor backend**
Desde la carpeta backend, ejecuta:


node index.js
Si ves en la terminal:

🚀 Backend escuchando en http://localhost:5055
✅ Conectado a MongoDB
Entonces el backend está funcionando correctamente.

## **6️⃣ Seguridad**
Asegúrate de que tu archivo .env NO se suba a GitHub. El archivo .gitignore en la raíz de tu proyecto debe incluir:

node_modules/
.env
.DS_Store
dist/
build/
Si ya agregaste .env por error, elimínalo del staging con:


git rm --cached backend/.env
Con estos pasos, tendrás tanto el frontend como el backend funcionando en tu entorno local.

