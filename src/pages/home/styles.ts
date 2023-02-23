import styled from "styled-components";

const HomeContainer = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CompanyContainer = styled.div`
  height: 95%;
  width: 40%;
  background-color: white;
  border: 2px solid green;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const SupplierContainer = styled.div`
  height: 95%;
  width: 40%;
  background-color: white;
  border: 2px solid red;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const S = {
  CompanyContainer,
  SupplierContainer,
  HomeContainer,
};
