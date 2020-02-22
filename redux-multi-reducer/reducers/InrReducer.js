const redux = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";
const INR = "INR";

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

module.exports = inrValueReducer;
