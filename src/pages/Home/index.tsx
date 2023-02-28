import { S } from "./styles";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const goToCompaniesPage = () => {
    navigate("/companies");
  };

  const goToSuppliersPage = () => {
    navigate("/suppliers");
  };

  return (
    <S.HomeContainer>
      <S.CompanyContainer onClick={goToCompaniesPage}>
        <h1>Aqui você busca empresas. </h1>
        <h1>Clique em qualquer lugar do card</h1>
      </S.CompanyContainer>
      <S.SupplierContainer onClick={goToSuppliersPage}>
        <h1>Fornecedores para o seu negócio!</h1>
        <h1>Clique em qualquer lugar do card</h1>
      </S.SupplierContainer>
    </S.HomeContainer>
  );
};
