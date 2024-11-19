
---

# React + Vite: CartAppBasic

**[Visita la página aquí](https://gersond12.github.io/CartAppBasic)**

---

## Descripción

Este proyecto es una aplicación básica de listado de productos y carrito de compras creada con **React** y **Vite**. Su propósito es proporcionar un ejemplo práctico para entender y aplicar conceptos clave en el desarrollo con React.

---

## Características principales

En este proyecto se abordan los siguientes temas de React:

- **Componentes**: Creación y composición de componentes reutilizables.
- **Manejo del estado**: Uso de `useState` para gestionar datos dinámicos.
- **Efectos secundarios**: Implementación de lógica con `useEffect`.
- **useReducer**: Manejo avanzado de estados complejos con `useReducer`.
- **Eventos**: Gestión de eventos como `onClick` para la interacción del usuario.
- **sessionStorage**: Persistencia temporal de datos en el navegador.
- **Inmutabilidad en React**: Comprensión de cómo trabajar con datos de manera segura y eficiente.
- **Hooks personalizados**: Creación de hooks para reutilizar lógica.
- **Rutas con React Router**: Navegación y gestión de vistas con `react-router-dom`.
- **Navbar dinámico**: Uso de una barra de navegación adaptable.

---

## Cómo utilizar este proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/gersond12/CartAppBasic.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre la aplicación en tu navegador en `http://localhost:5173`.

---

## Estructura del proyecto

```
CartAppBasic/          
├── public/           # Recursos estáticos
│   ├── 404.html # Este archivo no es necesario al desplegar el pryecto.(Este archivo se puede eliminar)
├── src/
│   ├── components/   # Componentes reutilizables (Navbar, Footer, etc.)
│   ├── assets/       # 
│   ├── css/          # Estilo de footer únicamente
│   ├── data/         # Json con los datos de los productos que aparencen en la vista principal
│   ├── hooks/        # Hooks personalizados, se utiliza el userReducer
│   ├── reducer/      # Constantes de nombres para las funciones y las acciones de las funciones en un switch para el useReducer
│   ├── routes/       # Definicion de rutas 
│   ├── services/     # Se extrae lainformacion que hay en data simulado que fuera una API
│   ├── CartApp.jsx   # Componente principal
│   ├── main.jsx      # Punto de entrada
├── public/           # Recursos estáticos
├── package.json      # Dependencias y scripts
├── vite.config.js    # Configuración de Vite
└── README.md         # Documentación del proyecto
```

---

*  En package se puede eliminar esta linea tambien pues es especila par github pages: "homepage": "https://gersond12.github.io/CartAppBasic/",

## Comentarios adicionales

- Este proyecto está pensado como material educativo. Cada parte del código contiene **comentarios explicativos** para facilitar su comprensión.
- Puedes modificar el proyecto para adaptarlo a tus necesidades o utilizarlo como punto de partida para crear aplicaciones más complejas.
