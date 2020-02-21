const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";
const USD = "USD";
const INR = "INR";

console.log("server started");

function actionOperationFactory(option, currency) {
  switch (option) {
    case INCREMENT:
      return {
        type: INCREMENT,
        currencyType: currency,
        info: "INCREMENT OPERATION"
      };

    case DECREMENT:
      return {
        type: DECREMENT,
        currencyType: currency,
        info: "DECREMENT OPERATION"
      };

    default:
      return {
        type: EQUAL,
        currencyType: currency,
        info: "EQUAL OPERATION"
      };
  }
}

const initStateValueUsd = {
  usdValue: 0
};

const usdValueReducer = (state = initStateValueUsd, action) => {
  if (action.currencyType === USD) {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          usdValue: state.usdValue + 1
        };

      case DECREMENT:
        return {
          ...state,
          usdValue: state.usdValue - 1
        };
      case EQUAL:
        return {
          ...state,
          usdValue: state.usdValue
        };

      default:
        return state;
    }
  } else {
    return state;
  }
};

const initStateValueInr = {
  inrValue: 0
};

const inrValueReducer = (state = initStateValueInr, action) => {
  if (action.currencyType === INR) {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          inrValue: state.inrValue + 1
        };

      case DECREMENT:
        return {
          ...state,
          inrValue: state.inrValue - 1
        };
      case EQUAL:
        return {
          ...state,
          inrValue: state.inrValue
        };

      default:
        return state;
    }
  } else {
    return state;
  }
};

const rootReducer = combineReducers({
  usd: usdValueReducer,
  inr: inrValueReducer
});

// holding the appliction state
const currencyStore = createStore(rootReducer);
console.log("init state of store ", currencyStore.getState());
const unsubscribe = currencyStore.subscribe(() => {
  console.log("state of storeCount ", currencyStore.getState());
});

currencyStore.dispatch(actionOperationFactory(DECREMENT, USD));
currencyStore.dispatch(actionOperationFactory(INCREMENT, USD));
currencyStore.dispatch(actionOperationFactory(INCREMENT, USD));
currencyStore.dispatch(actionOperationFactory(INCREMENT, USD));
currencyStore.dispatch(actionOperationFactory(INCREMENT, USD));
currencyStore.dispatch(actionOperationFactory(DECREMENT, USD));
currencyStore.dispatch(actionOperationFactory(DECREMENT, USD));
currencyStore.dispatch(actionOperationFactory(DECREMENT, USD));
currencyStore.dispatch(actionOperationFactory(INCREMENT, USD));
currencyStore.dispatch(actionOperationFactory(INCREMENT, INR));
currencyStore.dispatch(actionOperationFactory(INCREMENT, INR));
currencyStore.dispatch(actionOperationFactory(INCREMENT, INR));
currencyStore.dispatch(actionOperationFactory(INCREMENT, INR));
currencyStore.dispatch(actionOperationFactory(INCREMENT, INR));
currencyStore.dispatch(actionOperationFactory(INCREMENT, INR));
currencyStore.dispatch(actionOperationFactory(DECREMENT, INR));
currencyStore.dispatch(actionOperationFactory(INCREMENT, INR));
currencyStore.dispatch(actionOperationFactory(DECREMENT, INR));
unsubscribe();
console.log("redux server stopped");
