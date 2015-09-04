# redux-workshop - Ejercicio 5

En este ejercicio no vamos a desarrollar nada nuevo en nuestro kanban board,
sino que vamos a agregar una herramienta que viene con redux, y que es de hecho en buena parte la motivación para que redux exista en un primer lugar.
Se trata de *redux-dev-tools* y nos va a venir bien tenerla para el ejercicio 6.

## Objetivo del ejercicio

Lo dicho más arriba, vamos a incorporar la herramienta *redux-dev-tools* y familiarizarnos un poco con ella

### Instrucciones

Agregá o modificá (según corresponda en cada caso) los siguientes imports a `index.js`

```javascript
import { compose,
  createStore,
  combineReducers }
  from 'redux';
```

```javascript
import { devTools,
  persistState }
  from 'redux-devtools';
```

```javascript
import { DevTools,
   DebugPanel,
   LogMonitor }
  from 'redux-devtools/lib/react';
```

Luego vamos a agregar esta declaración para (usando composición de funciones) agregarle a nuestro `createStore` la lógica extra necesaria para usar las dev tools y para tener sesiones persistentes

```javascript
const finalCreateStore = compose(
  devTools(),
  persistState(window.location
    .href.match(
    /[?&]debug_session=([^&]+)\b/)
    ),
  createStore
);
```

En la llamada donde creamos nuestro store ahora usamos `finalCreateStore`:

```javascript
let store = finalCreateStore(
  combineReducers(reducers)
);
```

Finalmente agregamos el markup necesario en nuestro `render` para mostrar el panel de debugging

```
<DebugPanel top right bottom>
  <DevTools store={store}
    monitor={LogMonitor} />
</DebugPanel>
```

Ya estás listo para jugar un poco con el panel de Redux Dev Tools

## Tips

### El panel me tapa la App!!!

CTRL-H oculta y muestra el panel

### Analizando el log de tareas

Fijate que a medida que vas realizando operaciones el `LogMonitor` muestra el action recibido y el nuevo state.

Podés cancelar acciones de manera arbitraria (tipo *undo/redo*) y podés revertir al estado original o "commitear" generando un nuevo estado base.

### Sesiones persistentes

Si agregas a la URL `debug_session=<algun_nombre>` creas una sesion de debuggeo con el nombre `<algun_nombre>`.

Probá realizar un par de acciones y
refrescar la página. Probá introducir un bug en el código de `reducers.js` y
corregirlo. Ahora tenés hot-loading de tu lógica de reducers!
