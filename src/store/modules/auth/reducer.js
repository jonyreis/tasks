const INITIAL_STATE = false;

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@auth/SIGN_IN_SUCCESS":
      return action.login;
    default:
      return state;
  }
}
