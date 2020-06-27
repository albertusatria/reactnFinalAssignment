import AUTH_ACTION from '../actions/auth';

const initialState = {
  user: null,
  notification: null,
};

const REDUCER_AUTH = (prevState = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION.name.AUTH_DATA:
      return {
        ...prevState,
        user: action.user,
      };
    case AUTH_ACTION.name.USER_NOTIF:
      return {
        ...prevState,
        notification: action.notification,
      };
    default:
      return prevState;
  }
};

export default REDUCER_AUTH;
