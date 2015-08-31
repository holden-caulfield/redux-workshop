import sampleTasks from "./sampleTasks";
import { CREATE_TASK, REMOVE_TASK, SET_TASK_STATUS } from "./actions";
import { Statuses } from "./constants";
import { List } from 'immutable';

export function tasks(state = sampleTasks, action) {
  return processAction(List(state), action).toArray();
}

function processAction(state, action) {
  switch (action.type) {
    case CREATE_TASK:
      return state.push({
        name: action.name,
        status: Statuses.NOT_STARTED
      });
    case REMOVE_TASK:
      return state.delete(action.key);
    case SET_TASK_STATUS:
      return state.update(action.key,
        task => ({...task, status: action.status})
      );
    default:
      return state;
  }
}
