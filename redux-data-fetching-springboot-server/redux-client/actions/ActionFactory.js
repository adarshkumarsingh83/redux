const HTTP_REQUEST_FOR_DATA = "HTTP_REQUEST_FOR_DATA";
const HTTP_REQUEST_SUCESS = "HTTP_REQUEST_SUCESS";
const HTTP_REQUEST_FAILURE = "HTTP_REQUEST_FAILURE";

const userDataActionFactory = (action, data, errors) => {
  switch (action) {
    case HTTP_REQUEST_FOR_DATA:
      return {
        type: HTTP_REQUEST_FOR_DATA
      };

    case HTTP_REQUEST_SUCESS:
      return {
        type: HTTP_REQUEST_SUCESS,
        payload: data
      };

    case HTTP_REQUEST_FAILURE:
      return {
        type: HTTP_REQUEST_FAILURE,
        payload: errors
      };
  }
};

module.exports = userDataActionFactory;
