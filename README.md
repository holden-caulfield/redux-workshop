# redux-workshop - Ejercicio 7

Llegamos a nuestro último ejercicio! Este ejercicio en realidad es una especie de "Bonus Track" donde le agregamos un "detalle de color" a lo que
ya tenemos y de paso apreciamos una de las principales ventajas de trabajar con FRP

## Objetivo del ejercicio

Vamos a agregar una nueva vista a nuestro Kanban board para mostrar "estadísticas". Puntualmente queremos ver lo siguiente:
- Cuantas tareas hay en total
- Cuantas tareas hay en cada estado
- Qué porcentaje del total representan las tareas de cada estado

Y obviamente las estadísticas tienen que actualizarse dinámicamente a medida que vamos creando/modificando/borrando tareas.

### Instrucciones

En este caso por ser el último ejercicio si bien hay una implementación "oficial", queda a libre criterio mostrar la vista que quieras siempre y cuando cumpla con los requisitos arriba

Algunos detalles importantes para guiarte:

- Como el componente es sólo otra vista para el mismo state, **no necesitas cambiar nada en actions ni reducers**. Este es un ejercicio "solo de React" y no de redux.
- Obviamente vas a tener que crear un componente nuevo, `TaskStats` (o algún nombre similar)
- Lo más lógico sería que ese componente sea hijo directo de `App`
- `App` va a tener que generar un poco más de data para pasarle a `TaskStats`, como calcular totales por status, labels, etc. Un buen modelo a seguir es el de `ButtonBar` que recibe un array con cada uno de los `buttons`
- `TaskStats` probablemente también tenga que hacer algunos cálculos por su cuenta como ser promedios, generar strings, etc.

## Tips

### Los beneficios de FRP

Lo más importante de este ejercicio es mostrarte como podés agregar una vista nueva que representa un estado existente de manera independiente y sin tener que pensar en las interrelaciones entre ambas, cosa que se vuelve rápidamente complicado cuando una aplicación crece mucho.

Pensá como sería si usaras alguna arquitectura distinta. Tal vez tendrías que agregar lógica en los botones que alteran la lista de tareas para alterar esta nueva vista. O tal vez esos botones emitan un evento y esta nueva vista tenga que acoplarse y conocerlo. Etc. Etc.

En este caso, podrías agregar nuevos componentes que modifiquen tareas, o incluso cambiar la lógica de negocio (por ejemplo, que las tareas al crearse arranquen directamente en "Working") y tu vista de estadísticas se mantendría intacta

### Donde calculo los totales?

Es esperable que mayoría del calculo recaiga sobre `<App />`. Dentro de `<App />` cabe la pregunta de dónde corresponde incluirlo: como una función dentro de (o usada por) `render()` o como parte del `select()`?

Ambos criterios son válidos (o incluso un híbrido entre ambos).

Razones para incluirlo en el `select()` incluyen que podés ver las estadísticas como datos derivados. De hecho tenerlo en el select permitiría aprovechar algunas optimizaciones no vistas en este ejemplo.

Por otro lado algunos valores pueden ser títulos o nombres de classes de CSS que claramente corresponden más al `render()`.

La implementación oficial hace el calculo dentro de `render()` pero en buena parte es una cuestión de gustos.

### Cómo logro la implementación "oficial"?

Si te gusta hacer ingeniería reversa, podés tratar de inferir la implementación oficial a partir de la hoja de estilos. Igual la verdadera diversión de este ejercicio es hacer tu propia vista desde cero. Sentite libre de agregar más styles si te hacen falta.
