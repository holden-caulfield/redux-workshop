# redux-workshop - Ejercicio 2

Ahora que ya hicimos algunos componentes con React, vamos a introducir Redux para
completar nuestra arquitectura.

## Objetivo del ejercicio

Nuestro objetivo en este ejercicio va a ser convertir la lista de tareas de una
*prop* que `App` recibe (fija) a un *store* manejado por Redux y que va a hacer
las veces de *state* para la `App` (y para todo nuestro proyecto, en este caso).

Dentro de la comunidad React/Flux, un patrón que surge de manera frequente es el de
tener componentes "inteligentes" vs "tontos", o "containers" vs "componentes"
propiamente dichos u otras nomeclaturas similares.

Independientemente del nombre, el patrón indica que sólo los componentes "raíz"
de nuestro árbol tienen *conciencia del acceso a datos* y un *state* en el verdadero
sentido de la palabra mientras que los componentes "itermedios" u "hojas" simplemente
reciben todos su estado a través de *props*.

En nuestro caso, el único componente "raíz" es `App`. Vamos a apreciar como el
uso de este patrón nos beneficia, ya que al agregar Redux vamos a cambiar `App`
pero no vamos a necesitar alterar en lo más mínimo `TaskList` ni `TaskCard`. Los
componentes "tontos" no se enteran que existe Redux, y a priori no necesitarían
ser cambiados si en el futuro nos movemos a otra implementación de Flux.

### Instrucciones

Hemos introducido un nuevo archivo a nuestra arquitectura: `reducers.js`. Por el momento
esta vacío

Fijate que hacemos unos cuantos imports más en `index.js`:

- Importamos el contenido de `reducers.js` como un objeto con una key por cada export.
Esto es una práctica útil para proyectos más grandes donde tendríamos más de una property
en nuestro *state*
- Importamos las funciones *createStore* y *combineReducers* de redux que vamos a usar para
crear nuestro store en base a la(s) funcion(es) exportadas por `reducers.js`
- Tambien importamos *Provider* de redux-react
- Finalmente, en 'App.js' importamos *connect*

Para terminar de conectar nuestra app React a redux debemos hacer:

- Crear una funcion *tasks* (el nombre es importante, ya que define el nombre de la property
  en el state). Por el momento simplemente va a devolver siempre el contenido de `sampleTasks`
- La firma de la función *tasks* debe ser la que corresponde a cualquier reducer de redux:
`(state, action) => state`. `state` en este caso es un array de tareas.
- Crear el *store* componiendo *createStore* y *combineReducers*
- Wrappear en `index.js` el componente `<App />` con un componente `<Provider />` que reciba
el *store*
- En `<App />` usar *connect* para recibir los datos. Tené en cuenta que *connect* recibe
como parámetro una función *select*, ese el el lugar correcto para transformar la data, en
nuestro caso agrupando las tareas por status.

## Tips

### ES6 y el initial state

Un patrón útil a la hora de crear nuestros reducers es definir el initial state como
parámetro default de nuestra función, más o menos así:

```javascript
miReducer(state = initialState,
  action)...
```

### Wrapeando App en Provider

Por una limitación actual de React y redux, si simplemente tratamos de anidar `<App />`
dentro de `<Provider>` no va a funcionar, en cambio tenemos que anidar una función
más o menos así:

```javascript
{ () => <App /> }
```

### Acomodando el export

Como tenemos que usar la función ```connect``` ya no podemos exportar la clase `App`
de manera directa, ergo vamos a tener que partir esta declaración:

```javascript
export default class App
  extends React.Component {...
```

En estas dos:

```javascript
class App
  extends React.Component {
  //codigo de la class acá
}
// funciones utilitarias,
// como por ejemplo 'select'
export default
  connect(select)(App);
```
