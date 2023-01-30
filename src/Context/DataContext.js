import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
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

  useEffect(() => {
    fetchUser();
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
