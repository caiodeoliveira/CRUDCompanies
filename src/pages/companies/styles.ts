import styled from "styled-components";
import companyPageBg from "../../common/companyPageBg.png";

/* Fazer a parte de cima colocando os filtros da página: 
const UpperAreaContainner = styled.header``;
*/
const InnerAreaContainer = styled.div`
  background: url(${companyPageBg}) no-repeat;
  border-top: 1px solid white;
  border-radius: 1px;
  height: 90%;
  width: 100%;
  position: absolute;
  top: 87px;
`;

const FormBlockContainer = styled.main`
  color: white;
  background-color: black;
`;

export const S = {
  InnerAreaContainer,
  FormBlockContainer,
};
