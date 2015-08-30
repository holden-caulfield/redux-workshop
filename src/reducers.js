import sampleTasks from "./sampleTasks";
import { CREATE_TASK, REMOVE_TASK } from "./actions";
import { Statuses } from "./constants";

export function tasks(state = sampleTasks, action) {
  switch (action.type) {
    case CREATE_TASK:
      return state.push({
        name: action.name,
        status: Statuses.NOT_STARTED
      });
    case REMOVE_TASK:
      return state.delete(action.key);
    default:
      return state;
  }
}
