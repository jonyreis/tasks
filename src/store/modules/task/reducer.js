const INITIAL_STATE = [];

export default function task(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@task/CREATE_TASK":
      return [...state, action.data];

    default:
      return state;
  }
}
