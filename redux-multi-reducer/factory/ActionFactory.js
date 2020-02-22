const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";

const actionOperationFactory = (option, currency) => {
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
};

module.exports = actionOperationFactory;
