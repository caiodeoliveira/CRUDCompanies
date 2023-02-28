import { S } from "./styles";
import { UpperArea } from "../../components/UpperArea";
import React, { useEffect } from "react";
import { TiDelete, TiLocation } from "react-icons/ti";
import { Form } from "reactstrap";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FcCancel } from "react-icons/fc";

export const Suppliers = () => {
  const [query, setQuery] = React.useState("");
  const [isEditingSuppliersName, setIsEditingSuppliersName] =
    React.useState(false);
  const [hasSuppliers, setHasSuppliers] = React.useState(true);
  const [boxOpt, setBoxOpt] = React.useState("");

  const handleSubmit = () => {
    alert(query);
  };

  useEffect(() => {
    console.log(boxOpt);
  }, [boxOpt]);
  console.log(boxOpt);

  const handleShowFiltersInput = () => {
    switch (boxOpt) {
      case "Nome":
        return (
          <S.FilterInputText
            type="text"
            placeholder="Digite o nome de um fornecedor"
          />
        );
      case "CPF/CNPJ":
        return (
          <S.FilterInputText type="text" placeholder="Digite um CPF ou CNPJ" />
        );
    }
  };

  const editSupplierName = () => {
    setIsEditingSuppliersName(!isEditingSuppliersName);
  };

  const showModalBeforeDelete = (e: any) => {
    window.confirm("Tem certeza que deseja exluir a empresa?");
    if (window.confirm()) {
      setHasSuppliers(false);
      alert("Empresa exluída com sucesso!");
      e.preventDefault();
    }
  };

  return (
    <>
      <UpperArea type="supplier">
        <h1>
          Encontre o(s) fornecedor(es) que deseja buscando por CEP ou endereço
        </h1>
        <S.FormContainer onSubmit={handleSubmit}>
          <S.FiltersContainer>
            <Form>
              <S.FiltersFormGroup>
                <>
                  <S.FiltersLabel for="filtersSelect">
                    Filtrar Por:
                  </S.FiltersLabel>
                  <S.FilterSelectBox
                    type="select"
                    name="filtersBy"
                    id="filtersSelect"
                    onChange={(e: any) => setBoxOpt(e.target.value)}
                  >
                    <option>Selecione a forma de filtro</option>
                    <option>Nome</option>
                    <option>CPF/CNPJ</option>
                  </S.FilterSelectBox>
                  {handleShowFiltersInput()}
                </>
              </S.FiltersFormGroup>
            </Form>
          </S.FiltersContainer>
          <S.InputSearchSuppliers
            placeholder="Bodoquena MS (endereço ou CEP)"
            onChange={(e) => setQuery(e.target.value)}
          />
          <S.ButtonElement type="submit" value="Buscar" />
        </S.FormContainer>
      </UpperArea>

      <S.InnerAreaContainer>
        <S.ChangeSuppliersNameContainer>
          <S.SuppliersNameList>
            <S.SuppliersDataAndActionsContainer>
              {isEditingSuppliersName ? (
                <>
                  <S.NameAndActionsSuppliers>
                    <h1>Informe o novo nome do fornecedor</h1>
                    <S.ChangeSuppliersNameContainer>
                      <S.InputChangeSuppliersName
                        type="text"
                        placeholder="Ex.: Medeiros Distribuidora"
                      />
                      <S.ChangeSuppliersNameIcon onClick={editSupplierName}>
                        {<FcCancel size="30" color="red" />}
                      </S.ChangeSuppliersNameIcon>
                    </S.ChangeSuppliersNameContainer>
                  </S.NameAndActionsSuppliers>
                </>
              ) : (
                <>
                  {hasSuppliers ? (
                    <>
                      <S.NameAndActionsSuppliers>
                        <h1>Medeiros Distribuidora</h1>
                        <S.NameAndActionsCompanyIcons>
                          <S.EditIcon onClick={editSupplierName}>
                            {<BsPencil size="45px" color="green" />}
                          </S.EditIcon>
                          <S.DeleteIcon onClick={showModalBeforeDelete}>
                            {<RiDeleteBin5Line size="45px" color="red" />}
                          </S.DeleteIcon>
                        </S.NameAndActionsCompanyIcons>
                      </S.NameAndActionsSuppliers>
                    </>
                  ) : (
                    <h1>
                      Nenhum fornecedor no momento, faça uma busca no campo de
                      pesquisa acima.
                    </h1>
                  )}
                </>
              )}
              {hasSuppliers ? (
                <>
                  <S.CompaniesListContainer>
                    <S.CompaniesTag>
                      <h2>Empresa1</h2>
                      <S.DeleteCompanyIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteCompanyIcon>
                    </S.CompaniesTag>
                    <S.CompaniesTag>
                      <h2>Empresa2</h2>
                      <S.DeleteCompanyIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteCompanyIcon>
                    </S.CompaniesTag>
                    <S.CompaniesTag>
                      <h2>Empresa3</h2>
                      <S.DeleteCompanyIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteCompanyIcon>
                    </S.CompaniesTag>
                    <S.CompaniesTag>
                      <h2>Empresa3</h2>
                      <S.DeleteCompanyIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteCompanyIcon>
                    </S.CompaniesTag>
                    <S.CompaniesTag>
                      <h2>Empresa3</h2>
                      <S.DeleteCompanyIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteCompanyIcon>
                    </S.CompaniesTag>
                    <S.CompaniesTag>
                      <h2>Empresa3</h2>
                      <S.DeleteCompanyIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteCompanyIcon>
                    </S.CompaniesTag>
                    <S.CompaniesTag>
                      <h2>Empresa3</h2>
                      <S.DeleteCompanyIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteCompanyIcon>
                    </S.CompaniesTag>
                    <S.CompaniesTag>
                      <h2>Empresa3</h2>
                      <S.DeleteCompanyIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteCompanyIcon>
                    </S.CompaniesTag>
                    <S.CompaniesTag>
                      <h2>Empresa3</h2>
                      <S.DeleteCompanyIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteCompanyIcon>
                    </S.CompaniesTag>
                    <S.CompaniesTag>
                      <h2>Empresa3</h2>
                      <S.DeleteCompanyIcon>
                        {<TiDelete size="30px" color="red" />}
                      </S.DeleteCompanyIcon>
                    </S.CompaniesTag>
                  </S.CompaniesListContainer>
                </>
              ) : (
                <></>
              )}
            </S.SuppliersDataAndActionsContainer>
          </S.SuppliersNameList>
        </S.ChangeSuppliersNameContainer>
      </S.InnerAreaContainer>
    </>
  );
};
