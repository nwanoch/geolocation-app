import Axios from "axios";
import toast from "react-hot-toast"; 
import history from "../../history";

//enpoint base Url
const baseUrl = "https://paygo.gitit-tech.com";

//login action
export const login = (values) => {
  console.log(userData);
  return async (dispatch, getState) => {
    const options = {
      url: baseUrl + "/autj",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: values,
    };

    Axios(options)
      .then((response) => {
        console.log(response.data);
        window.localStorage.setItem("accessToken", response.data.authorization);
        dispatch({ type: "USER", payload: response.data });
        history.push("/dashboard");
        dispatch({ type: "NOTLOADING" });
      })
      .catch((error) => {
        if ((error.response.data.message = "Invalid login credentials")) {
          toast.error("Invalid Credentials");
          dispatch({ type: "NOTLOADING" });
        } else {
          toast.error("something went wrong");
          dispatch({ type: "NOTLOADING" });
        }
      });
  };
};

