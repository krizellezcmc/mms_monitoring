import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { DataProvider } from "./Context/DataContext";
import "./index.css";
import { extendTheme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

root.render(
  <React.StrictMode>
    <DataProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </DataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
