const redux = require("redux");

const createStore = redux.createStore;

console.log("redux server started");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";

function actionOperationFactory(option, usd, cent) {
  switch (option) {
    case INCREMENT:
      return {
        type: INCREMENT,
        usd: usd,
        cent: cent,
        info: "INCREMENT OPERATION"
      };

    case DECREMENT:
      return {
        type: DECREMENT,
        usd: usd,
        cent: cent,
        info: "DECREMENT OPERATION"
      };

    default:
      return {
        type: EQUAL,
        usd: usd,
        cent: cent,
        info: "EQUAL OPERATION"
      };
  }
}

const initState = {
  dollar: 0,
  cent: 0
};

const countReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      if (action.usd) {
        return {
          ...state,
          dollar: state.dollar + 1
        };
      } else if (action.cent) {
        return {
          ...state,
          cent: state.cent + 1
        };
      }

    case DECREMENT:
      if (action.usd) {
        return {
          ...state,
          dollar: state.dollar - 1
        };
      } else if (action.cent) {
        return {
          ...state,
          cent: state.cent - 1
        };
      }

    case EQUAL:
      return {
        ...state,
        dollar: state.dollar
      };

    default:
      return state;
  }
};

// holding the appliction state
const countStore = createStore(countReducer);
console.log("init state of store ", countStore.getState());
const unsubscribe = countStore.subscribe(() => {
  console.log("state of storeCount ", countStore.getState());
});
countStore.dispatch(actionOperationFactory(INCREMENT, true, false));
countStore.dispatch(actionOperationFactory(INCREMENT, true, true));
countStore.dispatch(actionOperationFactory(INCREMENT, false, true));
countStore.dispatch(actionOperationFactory(INCREMENT, false, true));
countStore.dispatch(actionOperationFactory(INCREMENT, false, false));
countStore.dispatch(actionOperationFactory(EQUAL));
countStore.dispatch(actionOperationFactory(INCREMENT, true, false));
countStore.dispatch(actionOperationFactory(DECREMENT, false, true));
countStore.dispatch(actionOperationFactory(EQUAL));
countStore.dispatch(actionOperationFactory(DECREMENT, false, true));
countStore.dispatch(actionOperationFactory(DECREMENT, true, true));
countStore.dispatch(actionOperationFactory(DECREMENT, false, true));
countStore.dispatch(actionOperationFactory(DECREMENT, true, false));
countStore.dispatch(actionOperationFactory(DECREMENT, true, false));
unsubscribe();
console.log("redux server stopped");
