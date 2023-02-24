import { S } from "./styles";

export const Home = () => {
  return (
    <S.HomeContainer>
      <S.CompanyContainer>
        <h2>Aqui você busca empresas</h2>
      </S.CompanyContainer>
      <S.SupplierContainer>
        <h2>Encontre fornecedores para o seu negócio!</h2>
      </S.SupplierContainer>
    </S.HomeContainer>
  );
};
