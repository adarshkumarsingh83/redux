const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";

const actionOperationFactory = (option, usd, cent) => {
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
};
module.exports = actionOperationFactory;
