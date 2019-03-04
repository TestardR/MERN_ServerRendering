export const FETCH_USERS = 'fetch_users';
// see the personalized axios request for base url we made in client.js
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};
