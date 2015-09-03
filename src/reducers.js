import sampleTasks from './sampleTasks';
import { CREATE_TASK, REMOVE_TASK } from './actions';
import { Statuses } from './constants';

export function tasks(state = sampleTasks, action) {
  switch(action.type) {
    case CREATE_TASK:
      return [...state, {name: action.name, status: Statuses.NOT_STARTED}];
    case REMOVE_TASK:
      return [...state.slice(0, action.id),
        ...state.slice(action.id+1)];
    default:
      return state;
  }
}
