import React from "react";
import styled from "styled-components";
import Vaga from "./vaga";

const ListaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

const ListaVagas = ({ vagas }) => {
  return (
    <ListaContainer>
      {vagas.map((vaga, index) => (
        <Vaga key={index} title={vaga.title} description={vaga.description} />
      ))}
    </ListaContainer>
  );
};

export default ListaVagas;
