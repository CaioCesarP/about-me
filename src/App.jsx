import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import About from "./pages/sobre/Sobre";
import Contato from "./pages/contato/Contato";

import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Routes, Route } from "react-router-dom";

const useStyles = makeStyles(() => ({
  Container: {
    backgroundColor: "black",

    height: "100vh",
    maxHeight: "100%",
  },
}));

const App = () => {
  const styles = useStyles();
  return (
    <div className={styles.Container}>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contato />} />
      </Routes>
    </div>
  );
};

export default App;
