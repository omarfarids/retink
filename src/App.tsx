import React, { useContext } from "react";
import { AppContext } from "./app/context";
import Footer from "./app/Footer";
import Header from "./app/Header";
import Main from "./app/Main";
import { Loader } from "@mantine/core";

function App() {
  const { isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <Loader
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        color="grape"
        variant="bars"
      />
    );
  }

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
