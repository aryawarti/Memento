import { userLogOut } from "../reducers/useLoginReducer";
export const logout=() => async (dispatch)=> { 
       localStorage.removeItem("userInfo");
       dispatch(userLogOut());
}