import styled from "styled-components";

const UpperAreaCompaniesContainer = styled.header`
  width: 100%;
  height: 15%;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

/*Montar o componente header abaixo para a página de fornecedores. Olhar requisitos para a
filtragem dos fornecedores no PDF:
*/
const UpperAreaSuppliersContainer = styled.header`
  width: 100%;
  height: 20%;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const S = {
  UpperAreaCompaniesContainer,
  UpperAreaSuppliersContainer,
};
