const AUTH_DATA = '[AUTH].DATA';
const USER_NOTIF = '[USER].NOTIF';

export default {
  name: {
    AUTH_DATA,
  },
  set: (data) => ({
    type: AUTH_DATA,
    user: data,
  }),
  setNotification: (data) => ({
    type: USER_NOTIF,
    notification: data,
  }),
};
