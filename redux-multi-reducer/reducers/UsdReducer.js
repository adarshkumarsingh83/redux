const redux = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";
const USD = "USD";

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

module.exports = usdValueReducer;
