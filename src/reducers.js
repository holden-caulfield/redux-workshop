import sampleTasks from "./sampleTasks";
import { CREATE_TASK } from "./actions";
import { Statuses } from "./constants";

export function tasks(state = sampleTasks, action) {
  switch (action.type) {
    case CREATE_TASK:
      return state.push({
        name: action.name,
        status: Statuses.NOT_STARTED
      });
    default:
      return state;
  }
}
