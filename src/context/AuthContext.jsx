import { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "SIGNUP":
      return {
        ...state,
        user: action.payload,
      };
    case "AUTH_READY":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authReady: false,
  });

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch({ type: "AUTH_READY", payload: user });
      } else {
        dispatch({ type: "LOGOUT" });
      }
      unsub();
    })
  }, [])
  

  console.log("my state is", state);

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
}