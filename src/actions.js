/*
 * action types
 */

export const CREATE_TASK = 'CREATE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const SET_TASK_STATUS = 'SET_TASK_STATUS';

export function createTask(name) {
  return { type: CREATE_TASK, name };
}

export function removeTask(id) {
  return { type: REMOVE_TASK, id };
}

export function setTaskStatus(id, status) {
  return { type: SET_TASK_STATUS, id, status };
}
