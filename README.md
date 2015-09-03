# redux-workshop - Ejercicio 1

Hora de empezar con nuestro pequeño proyecto! La idea general del proyecto es
sencilla: vamos a hacer una implementación bastante simplificada de un board Kanban.

Un board Kanban sirve para organizar tareas a medida que van siendo ejecutadas.
Para cada tarea existe una "Card" (Tarjeta) donde figura el nombre de la tarea.
El board propiamente dicho consiste en una serie de listas verticales, cada una
correspondiente a un estado de la tarea. Las tareas se van moviendo por las listas
de izquierda a derecha a medida que van progresando en su estado.

En nuestro board kanban simplificado, vamos a tener solo tres estados:
- "Backlog": para las tareas que aún no han sido comenzadas
- "Working": para las tareas que estan en progreso, pero no terminadas
- "Done": para las tareas que ya fueron completadas

# Setup previo

En una consola vamos a ejecutar:

```
npm start
```

Para arrancar el servidor de nuestro proyecto.

(Si todavía no lo hiciste, vas a tener que ejecutar ```npm install``` primero para
  bajar las dependencias del proyecto)

Tomate un par de minutos para inspeccionar los archivos `webpack.config.js`, `index.html`
e `index.js`. No es necesario que entiendas todo lo que hacen para este workshop
pero esta bueno que veas que no hay "magia", sino que el proyecto esta montado
de una forma bien explícita y relativamente sencilla.

Abrí el archivo `App.js`. Este va a ser el contenedor general donde vamos a agregar
componentes a nuestro proyecto. Antes de empezar, editá un poco, de manera
arbitraria, el JSX que retorna el método `render()`. Fijate como los resultados
se van refrescando en el browser a medida que editás.
