import React from "react";
import Header from "././src/Components/header.js";
import Hero from "./src/Components/hero.js";
import Form from "./src/Components/form.js";
import ListaVagas from "././src/Components/listavagas";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  const vagas = [
    { title: "Desenvolvedor Frontend", description: "React, JavaScript, CSS" },
    { title: "Desenvolvedor Backend", description: "Node.js, MongoDB, SQL" },
  ];

  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Form />
      <ListaVagas vagas={vagas} />
    </>
  );
};

export default App;
