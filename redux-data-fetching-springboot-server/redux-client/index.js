const userDataActionFactory = require("./actions/ActionFactory");
const userDataReducer = require("./reducers/UserReducers");

const redux = require("redux");
const axios = require("axios");
const reduxLogger = require("redux-logger");
const thunkMiddleWare = require("redux-thunk").default;

const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;
const logger = reduxLogger.createLogger(
  (level = "console" | "warn" | "error" | "info"),
  (logErrors = { true: Boolean })
);

const HTTP_REQUEST_FOR_DATA = "HTTP_REQUEST_FOR_DATA";
const HTTP_REQUEST_SUCESS = "HTTP_REQUEST_SUCESS";
const HTTP_REQUEST_FAILURE = "HTTP_REQUEST_FAILURE";

const fetchUsersFromServer = () => {
  console.log("fetchUsersFromServer");
  return function(dispatch) {
    dispatch(userDataActionFactory(HTTP_REQUEST_FOR_DATA, null, null));
    axios
      .get("http://localhost:8080/employees")
      .then(response => {
        //response.data
        dispatch(
          userDataActionFactory(HTTP_REQUEST_SUCESS, response.data, null)
        );
      })
      .catch(error => {
        //error.message
        dispatch(
          userDataActionFactory(HTTP_REQUEST_FAILURE, null, error.message)
        );
      });
  };
};

const userDataStore = createStore(
  userDataReducer,
  applyMiddleWare(thunkMiddleWare, logger)
);

const unsubscribe = userDataStore.subscribe(() => {
  console.log("state of user data ", userDataStore.getState());
});

userDataStore.dispatch(fetchUsersFromServer());

//unsubscribe();
