import { createContext, useState, useEffect } from "react";
import { primaryPathToken } from "../API/Path_List";
import { Get } from "../API/Base_Http_Request";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  //  {
  //   name: "Tristan Jay Amit",
  //   username: "tristan23",
  //   url: "../assets/logo/default_profile.png",
  //   address: "San roque, Zamboanga City",
  //   department: "Procurement",
  // }
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fetchUser = async () => {
    try {
      const response = await JSON.parse(localStorage.getItem("user"));

      if (response) {
        setUser(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCsrf = async () => {
    await Get({ url: primaryPathToken });
  };

  useEffect(() => {
    fetchCsrf();
    setTimeout(() => fetchUser(), [300]);
  }, []);

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        username,
        setUsername,
        password,
        setPassword,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
