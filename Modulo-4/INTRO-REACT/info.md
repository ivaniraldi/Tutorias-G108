REACT 1 — Tutoría 

1. ¿Qué es Node.js y para qué nos sirve?
Es un entorno que permite ejecutar JavaScript fuera del navegador. Sirve para crear servidores, manejar APIs y usar herramientas como NPM para gestionar proyectos.

2. ¿Qué es NPM?
Es el gestor de paquetes de Node.js. Permite instalar librerías, manejar dependencias y ejecutar scripts del proyecto (npm install, npm run dev).

3. ¿Qué es React?
Es una librería de JavaScript para construir interfaces de usuario basadas en componentes reutilizables y estado dinámico.

4. ¿Qué es Vite?
Es una herramienta de desarrollo rápida que crea proyectos frontend. Usa módulos modernos para servir código casi instantáneamente.

5. ¿Cómo iniciar un proyecto de Vite?
Con:
npm create vite
Luego:
UBICARNOS EN LA CARPETA DONDE ESTÁ NUESTO package.json
npm install
npm run dev

6. ¿Qué es package.json?
Es un archivo que define el proyecto: nombre, scripts, dependencias y configuración general.

7. ¿Qué son las dependencias?
Son librerías externas que el proyecto necesita para funcionar (ej: React, Axios). Se instalan con NPM.

8. ¿Cómo funciona React con document.getElementById("root")?
React monta la app en un elemento HTML (root). En lugar de manipular el DOM manualmente, React lo gestiona automáticamente (index.html > main.jsx ).

9. ¿Cómo funcionan los componentes y por qué devuelven un solo elemento?
Son funciones que retornan JSX (javascript + html). Devuelven un solo elemento porque React necesita un nodo raíz para renderizar correctamente.

10. ¿Qué es <> </>?
Es un Fragmento de React. Permite agrupar múltiples elementos sin agregar nodos extra al DOM.

11. ¿Cómo importamos y exportamos componentes?
Exportar: export default MiComponente
Importar: import MiComponente from './MiComponente'
o
export MiComponente
import {MiComponente} from './MiComponente'

12. ¿Como corremos el proyecto en modo de desarrollo?
Con:
npm run dev

13. ¿Cómo hacemos la build de un proyecto?
Con:
npm run build
Genera una versión optimizada en la carpeta dist para producción.

