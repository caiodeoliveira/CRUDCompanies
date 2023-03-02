import { ButtonProps } from "./types";
import { S } from "./styles";

export const Button = ({ type, children, onClick }: ButtonProps) => {
  const selectType = () => {
    switch (type) {
      case "searchCompanyButton":
        return <S.SearchCompanyButton type="submit" value="Buscar" />;
      case "searchSupplierButton":
        return (
          <S.SearchSupplierButton type="submit" value="Buscar">
            {children}
          </S.SearchSupplierButton>
        );
      case "changeNameButton":
        return (
          <S.ChangeNameButton onClick={onClick}>{children}</S.ChangeNameButton>
        );
      case "deleteCompanyOrSupplierButton":
        return (
          <S.DeleteCompanyOrSupplierButton onClick={onClick}>
            {children}
          </S.DeleteCompanyOrSupplierButton>
        );
      case "deleteSupplier":
        return (
          <S.DeleteCompanyIcon onClick={onClick}>
            {children}
          </S.DeleteCompanyIcon>
        );
      case "deleteCompany":
        return (
          <S.DeleteSupplierIcon onClick={onClick}>
            {children}
          </S.DeleteSupplierIcon>
        );
    }
  };
  return selectType();
};
