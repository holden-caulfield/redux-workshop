# redux-workshop - Ejercicio 4

Ya hicimos nuestro primer flujo completo de react + redux para agregar tareas.
Ahora vamos a hacer otro más, pero esta vez sin "ayuda"

## Objetivo del ejercicio

Ya tenemos forma de agregar tareas, ahora vamos a agregar un mecanismo para borrarlas.

El objetivo de este ejercicio es aplicar lo que aprendimos hasta ahora para
agregar un pequeño boton "X" en el vértice de cada `TaskCard` que permita borrarla.

### Instrucciones

Repetimos el mismo sentido para encarar el problema: actions -> reducers -> App (root)
component -> TaskList (dumb) component -> TaskCard (dumber) component

- Definimos un action type nuevo `REMOVE_TASK` y su correspondiente action creator
`removeTask(id)`.
- Agregamos el manejo del nuevo action type en el reducer `tasks()`
- App se va a encargar ahora de asignarle un `id` a las tareas como parte del `select`.
Basta con hacer que sea el indice dentro del array (esto lo podemos hacer sin miedo
  gracias a que nuestro state es inmutable)
- App tambien tiene que encargarse del `dispatch` correspondiente ante un determinado
evento de `TaskList` al que podemos llamar `onRemoveTask`
- `TaskList` a su vez tiene que pasar un nuevo callback a `TaskCard`. Llamemoslo
`onRemove`

## Tips

### Mas ES6 para Arrays

Un truco generar un array nuevo que tiene todos los elementos de un `array` dado
menos el que esté en la posición `index`, usando una vez más el *spread operator*
es:

```javascript
[...array.slice(0, index),
 ...array.slice(index+1)];
```

### Pasamanos innecesario?

Puede que te resulte un poco tedioso pasar callbacks de `App` a `TaskList` y luego
de `TaskList` a `TaskCard`. Esto sin embargo es una buena práctica que da muchos
frutos a la hora de extraer componentes y reutilizarlos en otro lado.

Para que sientas que tiene un poco más de sentido, fijate si el callback
`onRemove` de `TaskCard` necesita pasar el id o si podés abstraerlo de eso.

### Markup para el botón

Si te asegurás que el boton de cerrado es un `<button>` con class `close` y
de contenido `x`, la hoja de estilos provista se encargará del resto.
