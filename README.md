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

## Setup previo

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

## Objetivo del ejercicio

Nuestro objetivo en este ejercicio va a ser crear los componentes necesarios
para **renderizar el board principal en pantalla**. No vamos a usar Redux todavía,
solamente React.

### Instrucciones

Abrí el archivo `sampleTasks.js`. Ahí vas a ver un sample del modelo de datos que
vamos a usar a lo largo del ejercicio. Es bastante sencillo: un Array de tareas,
donde cada tarea es un Objeto con dos campos: `name` y `status`.

Fijate también que en el archivo `constants.js` está definido un objeto con constantes
para los tres status posibles: `NOT_STARTED`, `IN_PROGRESS` y `DONE`.

Si ves el archivo `index.js` vas a ver que estamos pasando `sampleTasks` como
una *prop* para nuestro componente principal `<App>`.

Hay otros dos componentes más definidos en el proyecto: `TaskList` y `TaskCard`.
Tanto para estos componentes como para `App`, esta provisto un tag contenedor que
ya tiene cargado el *className* necesario para que se apliquen los estilos.

- `App` recibe como *prop* una lista de *tasks* y renderiza n `TaskList`, una por cada `status`
diferente (en nuestro ejemplo, 3)
- `TaskList` recibe un *title* y una lista de *tasks* y renderiza n 'TaskCards' una por cada
tarea recibida
- `TaskCard` recibe una *task* y la muestra en pantalla
- Para evitar perder el tiempo, ya esta provista en `App.js` una funcion `titleForStatus(status)`
que traduce de los status que tenemos a los títulos que deberíamos mostrar en cada lista.

## Tips

### Preparar los datos

App debería generar a partir de la lista de tareas una estructura un poco más compleja
separando las tareas por status. La estructura tendría la forma de un array de objetos
con una property *status* y otra property *tasks* que es a su vez un Array con la
misma forma que *sampleTasks* pero con un subset de las tareas.

Hay muchas maneras de hacer esto, y todas son válidas para este ejercicio. Lo que mejor
se lleva con React es trabajar con las colleciones pensando en términos de transformaciones
funcionales, ya que nos permite *generar arrays nuevos* en vez de mutarlos.
ES6 y ES7 agregan bastante soporte funcional en Array. Algunas cosas que pueden servirte:

```
arr.map(callback) => Array
```

Genera un nuevo array con los resultados de aplicar `callback(item, index)` a cada item

```
arr.map(callback) => Array
```

```
arr.reduce(callback[, initialValue]) => Array
```

Aplica sucesivamente `callback(acum, item, index, array)` pasando el resultado de
cada aplicación como `acum` de la siguiente. Devuelve el último `acum`.

```
arr.findIndex(callback)
```

Encuentra el índice para el primer item en arr para el cual `callback(item)` devuelva
true. Su análoga `find(callback)` devuelve el item encontrado, en vez del index.

### Iterar

`App` debería iterar sobre la estructura de tareas agrupadas (por ejemplo usando `map()`)
y crear `TaskList`s. De la misma manera `TaskList` debería crear `TaskCard`s.

Siempre que iteres, recordá setear el atributo `key`, usando por ejemplo el index
del Array que estás iterando. Esto es una buena práctica importante cuando trabajamos con  React
