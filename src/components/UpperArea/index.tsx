import { S } from "./styles";
import { UpperAreaProps } from "./types";

export const UpperArea = ({ type, children }: UpperAreaProps) => {
  const selectType = () => {
    switch (type) {
      case "company":
        return (
          <S.UpperAreaCompaniesContainer>
            {children}
          </S.UpperAreaCompaniesContainer>
        );
      case "supplier":
        return (
          <S.UpperAreaSuppliersContainer>
            {children}
          </S.UpperAreaSuppliersContainer>
        );
    }
  };
  return selectType();
};
