let timeoutId = null;

export default (state = "", action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.data;
    case "CLEAR_NOTIFICATION":
      return "";
    default:
      return state;
  }
};

export const setNotification = (data, timeout) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  return async (dispatch) => {
    dispatch({
      type: "SET_NOTIFICATION",
      data
    });
    timeoutId = setTimeout(() => {
      dispatch({
        type: "CLEAR_NOTIFICATION"
      });
    }, timeout * 1000);
  };
};
