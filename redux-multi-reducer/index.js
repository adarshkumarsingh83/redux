const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
var inrValueReducer = require("./reducers/InrReducer");
var usdValueReducer = require("./reducers/UsdReducer");
var actionOperationFactory = require("./factory/ActionFactory");
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";
const USD = "USD";
const INR = "INR";

console.log("server started");

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
