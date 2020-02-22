const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";

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

module.exports = countReducer;
