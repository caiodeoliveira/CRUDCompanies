import styled from "styled-components";
import companyCardBg from "../../common/companyCardBg.jpg";
import supplierCardBg from "../../common/supplierCardBg.jpg";

const HomeContainer = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CompanyContainer = styled.span`
  height: 100%;
  width: 50%;
  background: url(${companyCardBg}) no-repeat;
  border: 2px solid green;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-top: 50px;
  transition: 700ms;
  :hover {
    transition: 700ms;
    transform: translateY(-10px);
  }
`;

const SupplierContainer = styled.span`
  height: 100%;
  width: 50%;
  background: url(${supplierCardBg}) no-repeat;
  border: 2px solid red;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-top: 50px;
  transition: 700ms;
  :hover {
    transition: 700ms;
    transform: translateY(-10px);
  }
`;

export const S = {
  CompanyContainer,
  SupplierContainer,
  HomeContainer,
};
