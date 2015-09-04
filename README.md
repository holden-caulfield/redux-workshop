# redux-workshop - Ejercicio 6

Ya armados con una arquitectura de base y herramientas que nos permiten debuggear nuestro trabajo casi 100% en vivo y en directo, es hora de empezar
a ponerlo interesante. Vamos a completar el ciclo de vida de nuestro Kanban board

## Objetivo del ejercicio

En esta parte vamos a completar la funcionalidad de nuestro Kanban permitiendo a las tareas pasar de un estado al otro.

El objetivo es que dentro de cada `TaskCard` haya botones que permitan mover la tarea al estado siguiente o previo:
- Si está en el "Backlog" (`NOT_STARTED`), entonces debe haber un botón "Comenzar" que la lleva al siguitente estado de "Working" (`IN_PROGRESS`)
- Si esta en "Working", entonces hay dos botones: uno de "Parar" para ir nuevamente al "Backlog" y otro de "Finalizar" para ir al estado de "Done" (`DONE`)
- Si está en "Done", entonces hay un botón "Reiniciar" que la devuelve a "Working"

### Instrucciones

Volvemos a pensar el mismo flujo de las otras veces:

- Agregamos nuevo action `SET_TASK_STATUS` y un action creator `setTaskStatus(id, status)`
- Manejamos ese nuevo action type en el reducer de `tasks`
- App necesita armar un nuevo callback `onSetTaskStatus` para pasarle a `TaskList`
- `TaskList` a su vez delega en otro callback `onSetStatus` de `TaskCard`
- `TaskCard` además debe agregar los botones correspondientes para cada status y manejar sus clicks.

(Nota: hay otras formas de encararlo, por ejemplo tener distintas actions para arrancar, parar, etc. Si te gusta más encararlo por ese lado, esta bien igual)

Para este último tema (agregar los botones a la `TaskCard`), se provee un nuevo componente `ButtonBar` ya enteramente implementado. `ButtonBar` recibe:
- un array de `buttons`
- un callback `onButtonClicked`

El array de buttons tiene objetos con las siguientes propiedades:
- `label` el texto a mostrar en el botón
- `className` la clase del botón. La hoja de estilos provisa sabe manejar botones con class `forward` y `backwards`
- `data` es un dato asociado al botón. Cuando el botón es clickeado, llamará al callback `onButtonClicked` pasando como parámetro `data`

## Tips

### Como hacer el "update"

Acordate que **nunca deberías mutar tu state** sino devolver un state nuevo.

Fijate como podes generar un array nuevo cambiando un elemento del mismo combinando dos tricks que usan el *sparse operator*: el que usaste para eliminar un objeto de un array y que usaste para extender/modificar un objeto.
### Como armo los botones?

Lo más probable es que necesites tener una function `buttonsForStatus` o similar en `TaskCard` que dado un determinado status te da los botones que corresponde agregar.

### Que le paso a los botones en data?

Hay dos parámetros que tienen que propagarse hacia el `dispatch` para poder llamar a `setTaskStatus`: el `id` de la tarea y el proximo `status` a setear. Uno solo de esos parámetros es propio de cada botón.
