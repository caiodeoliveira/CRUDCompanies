import { S } from "./styles";
import { UpperArea } from "../../components/UpperArea";
import React from "react";
import { BsPencil } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FcCancel } from "react-icons/fc";
import { GiConfirmed } from "react-icons/gi";
import { Button } from "../../components/Button";

export const Companies = () => {
  const [query, setQuery] = React.useState("");
  const [isEditingCompanyName, setIsEditingCompanyName] = React.useState(false);
  const [hasCompanies, setHasCompanies] = React.useState(true);
  const [companyName, setCompanyName] = React.useState("Tempero da dona Benta");
  const [hasSuppliers, setHasSuppliers] = React.useState(true);

  const handleSubmit = (e: any) => {
    alert(query);
    e.preventDefault();
  };

  const editCompanyName = () => {
    setIsEditingCompanyName(!isEditingCompanyName);
  };

  const showModalBeforeDeleteCompany = (e: any) => {
    window.confirm("Tem certeza que deseja exluir a empresa?");
    if (window.confirm()) {
      setHasCompanies(false);
      alert("Empresa exluída com sucesso!");
      e.preventDefault();
    }
  };

  const showModalBeforeDeleteSupplier = (e: any) => {
    window.confirm("Tem certeza que deseja remover este fornecedor?");
    if (window.confirm()) {
      setHasSuppliers(false);
      alert("Fornecedor(s) removido com sucesso!");
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
          <Button type="searchCompanyButton" />
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
                          <Button
                            type="changeNameButton"
                            onClick={editCompanyName}
                          >
                            {<BsPencil size="45px" color="green" />}
                          </Button>
                          <Button
                            type="deleteCompanyOrSupplierButton"
                            onClick={showModalBeforeDeleteCompany}
                          >
                            {<RiDeleteBin5Line size="45px" color="red" />}
                          </Button>
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
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
                    </S.SuppliersTag>
                    <S.SuppliersTag>
                      <h2>Fornecedor2</h2>
                      <Button
                        type="deleteSupplier"
                        onClick={showModalBeforeDeleteSupplier}
                      >
                        {<TiDelete size="30px" color="red" />}
                      </Button>
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
