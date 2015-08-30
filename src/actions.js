/*
 * action types
 */

export const CREATE_TASK = 'CREATE_TASK';

export function createTask(name) {
  return { type: CREATE_TASK, name };
}
