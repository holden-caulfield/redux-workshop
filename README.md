# redux-workshop
Workshop orientado a dar los primeros pasos con Redux y React

## Qué necesito?
- npm
- un editor, por ejemplo [Atom](https://atom.io/)
- un browser, el ejemplo está probado en [Chrome](http://www.google.com/chrome/)
- git
- ganas de aprender [redux](http://rackt.github.io/redux/)!

## Qué debería saber para hacer este workshop?

Básicamente Javascript. Y si trabajaste con node y/o con algun framework de UI, mejor.

Hay algunas cosas que viene bien saber ya que se usan el workshop:
- [React](http://facebook.github.io/react/), obviamente :P.
- También se usa de forma bastante extensa features del lenguage de ES6 y ES7

Si no estás familiarizado con estás tecnologías, no te preocupes, en los branches de cada ejercicio hay algunas referencias de los elementos que te pueden llegar a hacer falta

Algunas cosas que se usan en el workshop, pero que no necesitas saber/entender:
- [Webpack](webpack.github.io)
- [Babel](https://babeljs.io)
- [Stylus](https://learnboost.github.io/stylus/)

Si el workshop te gustó, probablemente quieras despues darle una mirada a esas tecnologías

## Por dónde arranco?
Para correr el ejemplo completo ejecuta:

```
npm install
```

Y luego:

```
npm start
```

Una vez que haya arrancado, podés ver el ejemplo en: http://localhost:3000

## Estructura de los ejercicios

Este repositorio esta organizado en varios branches, numerados correlativamente.
Cada uno de esos branches contiene un ejercicio, donde incrementalmente se va
construyendo el ejemplo final que se encuentra aquí.

En el README de cada branch hay indicaciones específicas de cada ejercicio,
indicando las partes de código que son provistas y las cosas que se espera que se
desarrollen como tarea.

Por un tema de simplicidad, la hoja de estilos completa de todo el proyecto está
siempre presente, dado que no es el objetivo del workshop enseñar ningún truco de
CSS. También para simplificar en algunos casos dentro de los tips se incluyen
bosquejos del markup necesario para que esos estilos se apliquen. Sentite libre de
cambiar el markup o el look and feel, pero tené presente que no es el objetivo primario

## ES6 y ES7

Los ejemplos usan de manera extensiva features de ES6 y ES7. Creo que no es una
decision arbitraria: muchas de las ideas propuestas por React en general y Redux
en particular realmente se vuelven mantenibles e interesantes a partir del soporte
que esas features del lenguage dan.

Algunas features de ES6 y ES7 que se usan en los ejercicios son:

### Import/Export

```javascript
import foo from 'bar';
```
Es análogo a `var foo = require('bar')`

```javascript
import { foo, bar} from 'baz';
```
Es análogo a `var foo = require('./baz').foo; var bar = require('baz').bar;`

```javascript
import * as foo from 'bar';
```
Es análogo a `foo.xxx = require('./bar').xxx` para todos los elementos exportados en 'bar'.

De la misma manera `export` sirve para declarar cosas que queremos exportar en un determinado
modulo.

### Spread operator

El spread operator `...` permite expandir expresiones donde hay múltiples argumentos.
Tiene muchos usos, algunos de los más comunes son.

```javascript
[...arr, newItem, ...otroArr]
```
Crea un nuevo array con todos los items de *arr*, luego *newItem* y finalmente todos
los items de *otroArr*

```javascript
{...obj, {foo: newValue}}
```
Crea un nuevo objeto copiando *obj* y luego agregando la property *foo* con el valor
*newValue* (o reemplazando su valor por *newValue* si ya existía)

### Destructuring

```javascript
let {foo, bar, baz} = obj
```
Es análogo a `var foo = obj.foo; var bar = obj.bar; var baz = obj.baz;`.

```javascript
let [foo, bar] = arr
```
Es análogo a `var foo = arr[0]; var bar = arr[1];`.

### Arrow operator

El arrow operator permite crear funciones anonimas con una sintaxis mas concisa y
conservando el lexical scope para el valor de `this`

```javascript
//sin parametros
() => { code }

// un parametros
foo => { code }

// no {} en expressions
foo => expression

//multiples parámetros
(foo, bar) => { code }
```
