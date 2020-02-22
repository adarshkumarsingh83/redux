const HTTP_REQUEST_FOR_DATA = "HTTP_REQUEST_FOR_DATA";
const HTTP_REQUEST_SUCESS = "HTTP_REQUEST_SUCESS";
const HTTP_REQUEST_FAILURE = "HTTP_REQUEST_FAILURE";

const initState = {
  loading: false,
  users: [],
  error: ""
};

const userDataReducer = (state = initState, action) => {
  switch (action.type) {
    case HTTP_REQUEST_FOR_DATA:
      return {
        ...state,
        loading: true
      };

    case HTTP_REQUEST_SUCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: ""
      };

    case HTTP_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload
      };

    default:
      return state;
  }
};

module.exports = userDataReducer;
