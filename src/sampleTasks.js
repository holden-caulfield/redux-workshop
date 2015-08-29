import { Statuses } from './constants';
import { List } from 'immutable';

export default List([
  { name: "Aprender más sobre Redux", status: Statuses.NOT_STARTED },
  { name: "Implementar mi primer FRP app en producción!", status: Statuses.NOT_STARTED },
  { name: "Dictar workshop", status: Statuses.IN_PROGRESS },
  { name: "Agendar evento", status: Statuses.DONE },
  { name: "Preparar contenidos", status: Statuses.DONE }
]);
