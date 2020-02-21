const redux = require("redux");

const createStore = redux.createStore;

console.log("redux server started");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";

function actionOperationFactory(option) {
  switch (option) {
    case INCREMENT:
      return {
        type: INCREMENT,
        info: "INCREMENT OPERATION"
      };

    case DECREMENT:
      return {
        type: DECREMENT,
        info: "DECREMENT OPERATION"
      };

    default:
      return {
        type: EQUAL,
        info: "EQUAL OPERATION"
      };
  }
}

const initState = {
  count: 0
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };

    case EQUAL:
      return {
        ...state,
        count: state.count
      };

    default:
      return state;
  }
};

// holding the appliction state
const store = createStore(reducer);
console.log("init state of store ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state of store ", store.getState());
});
store.dispatch(actionOperationFactory(INCREMENT));
store.dispatch(actionOperationFactory(INCREMENT));
store.dispatch(actionOperationFactory(INCREMENT));
store.dispatch(actionOperationFactory(EQUAL));
store.dispatch(actionOperationFactory(INCREMENT));
store.dispatch(actionOperationFactory(DECREMENT));
store.dispatch(actionOperationFactory(EQUAL));
store.dispatch(actionOperationFactory(DECREMENT));
store.dispatch(actionOperationFactory(DECREMENT));
store.dispatch(actionOperationFactory(DECREMENT));
store.dispatch(actionOperationFactory(DECREMENT));
store.dispatch(actionOperationFactory(DECREMENT));
unsubscribe();
console.log("redux server stopped");
