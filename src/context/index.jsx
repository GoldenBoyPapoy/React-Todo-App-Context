/**
 * Des: Context for state
 * created_at: 2023.05.09
 * updated_at: 2023.05.09
 */

// third-party libraries
import { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import { auth } from "../api/auth";

// Creating the user context
const MainContext = createContext();
// Making the function which will wrap the whole app using Context Provider
export const MainContextProvider = ({ children }) => {
  // states
  const [accessToken, setAccessToken] = useState("");
  const [todoList, setTodoList] = useState([]);

  // global states
  const values = {
    todoList,
    setTodoList,

    // function to login user
    login: async (loginvalues) => {
      const res = await auth("sign-in", loginvalues);
      switch (res.code) {
        case 200:
          localStorage.setItem("accessToken", res.token);
          break;
        default:
          break;
      }
      // code to process after login request here
    },

    // function to logout user
    logout: async () => {
      setAccessToken(null);
      localStorage.removeItem("accessToken"); 
    },

    // check authedUser
    isAuthed: async () => {
      if (localStorage.getItem("accessToken")) {
        window.location.href = "/home";
      } else {
      }
    },
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
// Make useMainContext Hook to easily use our context throughout the application
export const useMainContext = () => useContext(MainContext);
