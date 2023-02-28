import styled from "styled-components";
import companyPageBg from "../../common/companyPageBg.png";
import { FormGroup, Label, Input } from "reactstrap";

const InnerAreaContainer = styled.main`
  color: white;
  text-align: center;
  background: url(${companyPageBg}) no-repeat;
  border-top: 1px solid red;
  border-radius: 1px;
  height: 78%;
  width: 100%;
  position: fixed;
  bottom: 0;
  overflow-y: auto;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const FiltersContainer = styled.div`
  width: 100%;
  min-height: 45%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FiltersFormGroup = styled(FormGroup)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FiltersLabel = styled(Label)`
  font-size: 20px;
  font-weight: bold;
`;

const FilterSelectBox = styled(Input)`
  width: 300px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
`;

const FiltersInput = styled.input`
  width: 70%;
  min-height: 10%;
  font-weight: bold;
  font-size: 23px;
`;

const FilterInputText = styled(Input)`
  width: 700px;
  min-height: 45%;
  border: 3px solid red;
  border-radius: 5px;
  color: red;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;

const IconAndCepContainer = styled.span`
  font-size: 23px;
  font-weight: bold;
  border-radius: 5px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  outline: none;
`;

const DeleteCompanyIcon = styled.span`
  cursor: pointer;
  position: absolute;
  top: -5px;
  right: -5px;
`;

const InputSearchSuppliers = styled.input`
  width: 60%;
  min-height: 45%;
  border: 3px solid red;
  border-radius: 5px;
  color: red;
  margin: 0 auto;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  outline: none;
`;

const ButtonElement = styled.input`
  width: 20%;
  height: 40%;
  margin: 10px auto;
  border: 3px solid red;
  border-radius: 5px;
  background-color: white;
  color: red;
  font-size: 30px;
  font-weight: bold;
  text-align: center;

  :hover {
    filter: brightness(70%);
  }
`;

const SuppliersDataContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NameAndActionsSuppliers = styled.div`
  width: 55%;
  height: 50%;
  background-color: silver;
  color: black;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px auto;
`;

const EditIcon = styled.span`
  cursor: pointer;
  padding: 10px;

  :hover {
    background-color: white;
    transition: 350ms;
    border-radius: 3px;
  }
`;

const DeleteIcon = styled.span`
  cursor: pointer;
  padding: 10px;

  :hover {
    background-color: white;
    transition: 350ms;
    border-radius: 3px;
  }
`;

const ChangeSuppliersNameContainer = styled.div`
  position: relative;
`;

const ChangeSuppliersNameIcon = styled.span`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: -36px;
`;

const InputChangeSuppliersName = styled.input`
  width: 110%;
  min-height: 45%;
  border: 3px solid green;
  border-radius: 5px;
  color: green;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  outline: none;
`;

const NameAndActionsCompanyIcons = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

const SuppliersDataAndActionsContainer = styled.li`
  padding: 30px 10px;
  list-style-type: none;
  border-radius: 3px;
`;

const SuplliersNameContainer = styled.div`
  width: 100%;
  height: 90%;
  border: 3px solid green;
  border-radius: 3px;
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  margin: 20px auto;
`;

const SuppliersNameList = styled.ol`
  width: 80%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr;
  gap: 15px;
  justify-content: space-around;
`;

const CompaniesListContainer = styled.div`
  margin-top: 30px;
  padding: 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 10px;
  overflow-y: auto;
`;

const CompaniesTag = styled.div`
  color: white;
  background-color: silver;
  border-radius: 5px;
  padding: 25px 25px;
  position: relative;
`;
export const S = {
  InnerAreaContainer,
  InputSearchSuppliers,
  ButtonElement,
  FormContainer,
  SuppliersDataContainer,
  FiltersContainer,
  IconAndCepContainer,
  FiltersInput,
  FilterSelectBox,
  FiltersLabel,
  FiltersFormGroup,
  FilterInputText,
  NameAndActionsSuppliers,
  DeleteIcon,
  EditIcon,
  ChangeSuppliersNameIcon,
  ChangeSuppliersNameContainer,
  InputChangeSuppliersName,
  NameAndActionsCompanyIcons,
  CompaniesListContainer,
  CompaniesTag,
  DeleteCompanyIcon,
  SuppliersDataAndActionsContainer,
  SuplliersNameContainer,
  SuppliersNameList,
};
