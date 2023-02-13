import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const ExceptionHandler = (err) => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  let msg = "";

  const redirect = () => {
    // Redirect to Root path, since user state is null it will be redirect to login page.
    setUser(null);
    navigate("/", { replace: true });
  };

  const status = (err.response && err.response.status) || 500;

  switch (status) {
    case 400:
      msg = "Request cannot be process. try again later.";
      break;
    case 401:
      // redirect();
      msg = "Un-Authorized.";
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
