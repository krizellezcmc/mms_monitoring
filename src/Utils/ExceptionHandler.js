const ExceptionHandler = (err) => {
  let msg = "";

  const status = (err.response && err.response.status) || 500;

  switch (status) {
    case 400:
      msg = "Request cannot be process. try again later.";
      break;
    case 401:
      msg = 401;
      break;
    case 404:
      msg = "No record found.";
      break;
    case 500:
      msg = "Request cannot be completed. try again later.";
      break;
    default:
      msg = "Problem encountered.";
      break;
  }

  return msg;
};

export default ExceptionHandler;
