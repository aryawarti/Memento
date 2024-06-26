import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../reducers/useReducer";

export const FormSubmit= ({email,password}) => async (dispatch) => {

    dispatch(loginStart());

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        },
        config
      );

      console.log(data);
      dispatch(loginSuccess(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
