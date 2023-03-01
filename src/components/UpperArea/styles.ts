import styled from "styled-components";

const UpperAreaCompaniesContainer = styled.header`
  width: 100%;
  height: 15%;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  top: 20px;
`;

const UpperAreaSuppliersContainer = styled.header`
  width: 100%;
  height: 20%;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  top: 0;
`;

export const S = {
  UpperAreaCompaniesContainer,
  UpperAreaSuppliersContainer,
};
