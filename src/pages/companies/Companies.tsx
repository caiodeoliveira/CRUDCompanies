import { S } from "./styles";
import { UpperArea } from "../../components/UpperArea";
import React from "react";
import { BsPencil } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FcCancel } from "react-icons/fc";
import { GiConfirmed } from "react-icons/gi";

export const Companies = () => {
  const [query, setQuery] = React.useState("");
  const [isEditingCompanyName, setIsEditingCompanyName] = React.useState(false);
  const [hasCompanies, setHasCompanies] = React.useState(true); //Alterar o estado para um array.
  const [companyName, setCompanyName] = React.useState("Tempero da dona Benta");

  const handleSubmit = (e: any) => {
    alert(query);
    e.preventDefault();
  };

  const editCompanyName = () => {
    setIsEditingCompanyName(!isEditingCompanyName);
  };

  const showModalBeforeDelete = (e: any) => {
    window.confirm("Tem certeza que deseja exluir a empresa?");
    if (window.confirm()) {
      setHasCompanies(false);
      alert("Empresa exluída com sucesso!");
      e.preventDefault();
    }
  };

  return (
    <>
      <UpperArea type="company">
        <h1>
          Encontre a(s) empresa(s) que deseja buscando por CEP ou endereço
        </h1>
        <form onSubmit={handleSubmit}>
          <S.InputSearchCompanies
            placeholder="Bodoquena MS (endereço ou CEP)"
            onChange={(e) => setQuery(e.target.value)}
          />
          <S.ButtonElement type="submit" value="Buscar" />
        </form>
      </UpperArea>
      <S.InnerAreaContainer>
        <S.CompaniesNameContainer>
          <S.CompaniesNameList>
            <S.CompaniesDataAndActionsContainer>
              {isEditingCompanyName ? (
                <>
                  <S.NameAndActionsCompany>
                    <h1>Digite o novo nome da empresa</h1>
                    <S.ChangeCompanyNameContainer>
                      <S.InputChangeCompanyName
                        type="text"
                        placeholder="Ex.: O dogão"
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                      <S.ChangeCompanyNameCancelButton
                        onClick={editCompanyName}
                      >
                        {<FcCancel size="35" color="red" />}
                      </S.ChangeCompanyNameCancelButton>
                      <S.ChangeCompanyNameConfirmButton
                        onClick={editCompanyName}
                      >
                        {<GiConfirmed size="30" color="green" />}
                      </S.ChangeCompanyNameConfirmButton>
                    </S.ChangeCompanyNameContainer>
                  </S.NameAndActionsCompany>
                </>
              ) : (
                <>
                  {hasCompanies ? (
                    <>
                      <S.NameAndActionsCompany>
                        <h1>{companyName}</h1>
                        <S.NameAndActionsCompanyIcons>
                          <S.EditIcon onClick={editCompanyName}>
                            {<BsPencil size="45px" color="green" />}
                          </S.EditIcon>
                          <S.DeleteIcon onClick={showModalBeforeDelete}>
                            {<RiDeleteBin5Line size="45px" color="red" />}
                          </S.DeleteIcon>
                        </S.NameAndActionsCompanyIcons>
                      </S.NameAndActionsCompany>
                    </>
                  ) : (
                    <h1>
                      Nenhuma empresa no momento, busque uma empresa no campo
                      acima.
                    </h1>
                  )}
                </>
              )}
              <S.SuppliersListContainer>
                {hasCompanies ? (
                  <>
                    <S.SuppliersTag>
                      <h2>Fornecedor1</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor3</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor4</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor5</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor5</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor5</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor5</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor5</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor5</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor5</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor5</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor5</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor5</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor5</h2>
                      <S.DeleteSupplierIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteSupplierIcon>
                    </S.SuppliersTag>
                  </>
                ) : (
                  <></>
                )}
              </S.SuppliersListContainer>
            </S.CompaniesDataAndActionsContainer>
          </S.CompaniesNameList>
        </S.CompaniesNameContainer>
      </S.InnerAreaContainer>
    </>
  );
};
