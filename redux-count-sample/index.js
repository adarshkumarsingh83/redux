const redux = require("redux");

var countReducer = require("./reducers/CountReducer");
var actionOperationFactory = require("./actions/ActionOperationFactory");

console.log("redux server started");
const createStore = redux.createStore;

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";

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
