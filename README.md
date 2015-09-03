# redux-workshop - Ejercicio 3

Hasta ahora hemos avanzado bastante pero nuestra "app" solo renderiza una vista
estática. Es hora de hacer que empiece a permitar al usuario hacer algo.
Empecemos por crear tareas nuevas.

## Objetivo del ejercicio

En este ejemplo hemos agregado un nuevo componente `AddTaskForm` y lo agregamos
a la `App`. Se ve lindo en pantalla, pero no hace nada todavía.

El objetivo de este ejemplo es agregar el código necesario para que a través de
redux podamos hacer que el `AddTaskForm` efectivamente agregue tareas.

Como regalo extra te dejamos ya creado el archivo `actions.js` con la definición
del action `CREATE_TASK` que vamos a usar y el correspondiente *action creator*
`createTask(name)`

### Es action.js un Overkill?

Hay varios beneficios en declarar los action types como constantes y
exportarlos en vez de simplemente usar Strings. En proyectos más grandes, es
importante tener declarado que acciones ya están contempladas en algún lugar
centralizado.

Por otro lado, puede parecerte overkill tener *action creators* en vez de
simplemente hacer `dispatch` de un objeto creado in situ. Tener action creators
se vuelve particularmente interesante cuando se empieza a trabajar con ejecución
asincrónica (ej. si hacemos un request a un servidor para obtener los datos).
Eso está fuera del scope de este ejemplo, pero es bueno arrancar con la buena
práctica incorporada.

### Instrucciones

Vamos a atacar el problema en este sentido: actions -> reducers -> App (root)
component -> AddTaskForm (dumb) component

- El action lo tenemos ya definido y resuelto. Recibe un `name` y tiene el tipo
`CREATE_TASK`
- Nuestro reducer de `tasks` tiene ahora que empezar a hacer algo. El patrón más
común es hacer un `switch` sobre el action type y en el caso de CREATE_TASK devolver
*un nuevo array* (**no mutar**) que agrega la tarea
- La tarea tiene que arrancar en algun estádo. `NOT_STARTED` parece el más lógico.
- Una vez resuelto el reducer, tenemos que recibir el *prop* `dispatch` que
redux nos pasa en `<App />` (gracias a `connect`)
- Acordate que `AddTaskForm` es un componente "tonto", así que `App` *no debería
pasarle el dispatch* sino que debería crear un callback (por ej. `onNewTask`) y
usar el dispatch y el action creator para notificar la acción.
- Finalmente `AddTaskForm` ya tiene una funcion `_handleClick`, en esa función
debería llamar al callback que `App` le pasó como *prop*

## Tips

### Evitar la mutación

Cuando trabajes en el reducer puede que te sientas tentado a usar

```javascript
state.push(newTask)
```

Sin embargo, `push` **muta** el Array con lo cual rompemos uno de los principios
básicos donde se fundamenta redux (y la programación funcional reactiva en general)

Un patrón muy cómodo para evitar esto es usar el *spread operator*. Este código:

```javascript
[...arr, newItem]
```

Devuelve **un nuevo array** que tiene todos los elementos de `arr` más `newItem`
concatenado al final.

### Obteniendo DOM nodes en React

Una pregunta que puede que te estés haciendo es "como obtengo el nodo del input
de texto, como para sacar el contenido del mismo?".

Tal vez estes pensando en usar `document.getElementById`, agregar jQuery o algo
similar

React tiene su propia manera de acceder a los nodos del DOM. Fijate que el input
de `AddTaskForm` tiene una property más llamada `ref`. La property ref puede usarse
para obtener nodos del dom usando.

```javascript
React.findDOMNode(
  this.refs.nombreDeLaRef);
```

### Validaciones, etc.

Podés pensar `_handleClick()` como un método común y corriente donde manejas un
evento del DOM. No es el objetivo de este ejercicio, pero si querés ahí podrías
poner alguna validación (por ejemplo, evitar llamar al callback si el campo de
  texto extá vacío)

Otra cosa interesante a tener en cuenta es que `AddTaskForm` así como está presentado
es lo que en la jerga de React se llama un *uncontrolled input*. Es decir que
dentro del estado que maneja React (state + props) no hay ninguna representación
del *value* de ese input, sino que lo tenemos que manejar nosotros (por ej. limpiando
  el value en `_handleClick`)
