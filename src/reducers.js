import sampleTasks from "./sampleTasks";
import { CREATE_TASK, REMOVE_TASK, SET_TASK_STATUS } from "./actions";
import { Statuses } from "./constants";

export function tasks(state = sampleTasks, action) {
  switch (action.type) {
    case CREATE_TASK:
      return [...state, {
        name: action.name,
        status: Statuses.NOT_STARTED
      }];
    case REMOVE_TASK:
      return [...state.slice(0, action.key),
        ...state.slice(action.key+1)];
    case SET_TASK_STATUS:
      return [...state.slice(0, action.key),
        {...state[action.key], status: action.status },
        ...state.slice(action.key+1)];
    default:
      return state;
  }
}
