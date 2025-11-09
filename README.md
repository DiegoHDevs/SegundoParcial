# 🌍 Countries Explorer - Segundo Parcial

Una aplicación web interactiva construida con React para explorar información detallada de países de todo el mundo, utilizando la API de REST Countries.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Ejecución](#-ejecución)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Arquitectura y Patrones](#-arquitectura-y-patrones)
- [API Utilizada](#-api-utilizada)
- [Autores](#-autores)

---

## ✨ Características

- 🗺️ **Exploración de Países**: Visualiza una lista completa de todos los países del mundo
- 🔍 **Búsqueda en Tiempo Real**: 
  - Barra de búsqueda integrada en el navbar (visible solo en la página principal)
  - Búsqueda no exacta que filtra países mientras escribes
  - Busca por nombre común u oficial del país
  - Resultados instantáneos sin recargar la página
  - Mensaje informativo cuando no hay coincidencias
- 📊 **Información Detallada**: Accede a datos completos de cada país:
  - Capital, región y subregión
  - Población y área territorial
  - Idiomas oficiales
  - Moneda
  - Zona horaria
  - Países limítrofes (clickeables para navegación rápida)
- 📄 **Paginación Inteligente**: 
  - Sistema de paginación optimizado
  - Se adapta automáticamente a los resultados de búsqueda
  - Navegación entre páginas con indicadores visuales
- 🎨 **Interfaz Moderna**: Diseño responsive con gradientes y animaciones
- ⚡ **Rendimiento Optimizado**: Hooks personalizados y optimizaciones con React 19
- 🔄 **Manejo de Estados**: Sistema robusto de loading, error y datos
- 📱 **Totalmente Responsive**: Adaptado para desktop, tablet y móvil

---

## 🛠️ Tecnologías

### Core
- **React 19.1.1** - Biblioteca de UI con las últimas características
- **React Router DOM 6.30.1** - Navegación y enrutamiento
- **Vite 7.1.7** - Build tool de última generación

### Desarrollo
- **ESLint 9.36.0** - Linting y análisis de código
- **React Hooks ESLint Plugin** - Reglas específicas para hooks
- **CSS Modules** - Estilos con scope local

### API
- **REST Countries API v3.1** - Fuente de datos de países

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16.x o superior) - [Descargar Node.js](https://nodejs.org/)
- **npm** (incluido con Node.js) o **yarn** como gestor de paquetes

Para verificar tu instalación:

```bash
node --version
npm --version
```

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/DiegoHDevs/SegundoParcial.git
cd SegundoParcial
```

### 2. Instalar dependencias

Con npm:
```bash
npm install
```

O con yarn:
```bash
yarn install
```

---

## ▶️ Ejecución

### Modo Desarrollo

Inicia el servidor de desarrollo con hot-reload:

```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:5173**

### Build de Producción

Genera una build optimizada:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

### Preview de Producción

Previsualiza la build de producción localmente:

```bash
npm run preview
```

---

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| **dev** | `npm run dev` | Inicia el servidor de desarrollo |
| **build** | `npm run build` | Genera build optimizado para producción |
| **lint** | `npm run lint` | Ejecuta ESLint para análisis de código |
| **preview** | `npm run preview` | Previsualiza la build de producción |

---

## 📁 Estructura del Proyecto

```
SegundoParcial/
├── public/                          # Archivos estáticos
├── src/
│   ├── components/                  # Componentes legacy (deprecados)
│   ├── features/                    # Arquitectura basada en features
│   │   ├── about/                   # Página "Acerca de"
│   │   │   ├── components/          # Componentes del feature
│   │   │   ├── constants/           # Constantes y datos estáticos
│   │   │   └── styles/              # CSS Modules del feature
│   │   ├── common/                  # Componentes compartidos
│   │   │   ├── components/          # BackButton, ErrorState, LoadingState, etc.
│   │   │   └── styles/              # Estilos compartidos
│   │   ├── country-detail/          # Detalles de países
│   │   │   ├── components/          # CountryHeader, CountryDetailsGrid, etc.
│   │   │   └── styles/              # CSS Modules
│   │   ├── country-list/            # Lista de países
│   │   │   ├── components/          # CountryGrid, Pagination, etc.
│   │   │   ├── constants/           # Configuración de paginación
│   │   │   ├── context/             # PaginationContext y Provider
│   │   │   ├── hooks/               # usePagination
│   │   │   ├── utils/               # Utilidades de paginación
│   │   │   └── styles/              # CSS Modules
│   │   ├── search/                  # Feature de búsqueda
│   │   │   ├── components/          # SearchBar
│   │   │   ├── context/             # SearchContext y Provider
│   │   │   ├── hooks/               # useSearch
│   │   │   └── styles/              # CSS Modules
│   │   └── not-found/               # Página 404
│   │       ├── components/          # ErrorDisplay
│   │       ├── constants/           # Contenido de la página
│   │       └── styles/              # CSS Modules
│   ├── hooks/                       # Hooks personalizados globales
│   │   └── useFetch.js              # Hook para peticiones HTTP
│   ├── constants/                   # Constantes globales
│   │   ├── api.js                   # URLs, endpoints, mensajes
│   │   └── routes.js                # Rutas de navegación
│   ├── utils/                       # Utilidades
│   │   └── pagination.js            # Lógica de paginación
│   ├── App.jsx                      # Componente principal
│   ├── App.css                      # Estilos globales
│   ├── index.css                    # Estilos base
│   └── main.jsx                     # Entry point
├── .gitignore                       # Archivos ignorados por Git
├── eslint.config.js                 # Configuración de ESLint
├── index.html                       # HTML principal
├── package.json                     # Dependencias y scripts
├── vite.config.js                   # Configuración de Vite
└── README.md                        # Este archivo
```

---

## 🏗️ Arquitectura y Patrones

### Arquitectura Basada en Features

El proyecto utiliza una arquitectura modular donde cada feature tiene su propia carpeta con:
- Componentes específicos
- Estilos con CSS Modules
- Constantes y configuración
- Contextos y hooks propios

### Hooks Personalizados

#### `useFetch`
Hook reutilizable para peticiones HTTP con:
- Manejo automático de estados (loading, data, error)
- Transformación de datos
- Retry y reset
- Optimización con useRef para evitar loops infinitos

#### `usePagination`
Hook para acceder al contexto de paginación:
- Estado compartido sin prop drilling
- Acciones: setPage, nextPage, prevPage, reset

#### `useSearch`
Hook para acceder al contexto de búsqueda:
- Estado compartido del término de búsqueda
- Acciones: setSearchTerm, clearSearch
- Validación de uso dentro del SearchProvider

### Features Implementados

#### 🔍 Search Feature
- **SearchBar**: Componente de búsqueda con input y botón de limpieza
- **SearchContext**: Contexto para compartir el término de búsqueda
- **useSearch**: Hook personalizado para acceder al estado de búsqueda
- Búsqueda no exacta que filtra mientras el usuario escribe
- Solo visible en la página principal (/)
- Filtra países por nombre común u oficial

#### 📊 Country List Feature
- Lista paginada de países
- Integración con búsqueda en tiempo real
- Paginación que se adapta a resultados filtrados
- Mensaje informativo cuando no hay resultados

#### 📍 Country Detail Feature
- Detalles completos de cada país
- Navegación entre países limítrofes
- Información organizada en cards

### Patrones de React Implementados

- **useReducer**: Manejo de estado complejo en la paginación
- **useContext**: Compartir estado entre componentes (búsqueda y paginación)
- **useCallback**: Optimización de funciones para prevenir re-renders
- **useRef**: Mantener referencias estables y evitar dependencias circulares
- **useMemo**: Optimización del filtrado de países
- **CSS Modules**: Estilos con scope local

### Separación de Responsabilidades

- **Componentes**: Solo lógica de presentación
- **Hooks**: Lógica de negocio reutilizable
- **Constants**: Elimina magic strings y magic numbers
- **Utils**: Funciones puras y utilidades

---

## 🌐 API Utilizada

**REST Countries API v3.1**
- Base URL: `https://restcountries.com/v3.1`
- Endpoints utilizados:
  - `/all?fields=name,flags` - Lista de todos los países
  - `/name/{name}?fullText=true` - Detalles de un país por nombre
  - `/alpha/{code}` - País por código alpha-3

Documentación: https://restcountries.com

---

## 👥 Autores

- **Diego Henríquez** - [@DiegoHDevs](https://github.com/DiegoHDevs)
- **MAtías Henríquez** - [@MatHenriquez](https://github.com/MatHenriquez)

---

## 📄 Licencia

Este proyecto es parte del segundo parcial de Programación Web 2.

---

**Desarrollado con ❤️ usando React y Vite**