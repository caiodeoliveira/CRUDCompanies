import styled from "styled-components";
import companyPageBg from "../../common/companyPageBg.png";

const InnerAreaContainer = styled.main`
  color: white;
  text-align: center;
  background: url(${companyPageBg}) no-repeat;
  border-top: 1px solid green;
  border-bottom: 1px solid green;
  border-radius: 1px;
  height: 78.7%;
  width: 100%;
  position: fixed;
  bottom: 0;
  overflow-y: auto;
`;

const CompaniesNameContainer = styled.div`
  width: 100%;
  height: 90%;
  border-radius: 3px;
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  margin: 20px auto;
`;

const CompaniesNameTitleContainer = styled.div`
  text-align: center;
`;

const CompaniesNameList = styled.ol`
  width: 80%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr;
  gap: 15px;
  justify-content: space-around;
`;

const CompaniesDataAndActionsContainer = styled.li`
  padding: 30px 10px;
  list-style-type: none;
  border-radius: 3px;
`;

const NameAndActionsCompany = styled.div`
  width: 50%;
  height: 40%;
  background-color: silver;
  color: black;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
`;

const NameAndActionsCompanyIcons = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
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

const ChangeCompanyNameContainer = styled.div`
  position: relative;
`;

const InputChangeCompanyName = styled.input`
  width: 100%;
  min-height: 45%;
  border: 3px solid green;
  border-radius: 5px;
  color: green;
  font-size: 26px;
  font-weight: bold;
  outline: none;
`;

const ChangeCompanyNameCancelButton = styled.span`
  cursor: pointer;
  position: absolute;
  top: 1px;
  right: 0px;
`;

const ChangeCompanyNameConfirmButton = styled.span`
  cursor: pointer;
  position: absolute;
  top: 3.5px;
  right: 35px;
`;

const SuppliersListContainer = styled.div`
  margin-top: 30px;
  padding: 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 10px;
  overflow-y: auto;
`;

const SuppliersTag = styled.div`
  color: black;
  background-color: silver;
  border-radius: 5px;
  padding: 25px 25px;
  position: relative;
`;

const DeleteSupplierIcon = styled.span`
  cursor: pointer;
  position: absolute;
  top: -5px;
  right: -5px;
`;

const InputSearchCompanies = styled.input`
  width: 90%;
  min-height: 45%;
  border: 3px solid green;
  border-radius: 5px;
  color: green;
  margin: 0 auto;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  outline: none;
`;

const ButtonElement = styled.input`
  width: 20%;
  height: 45%;
  margin: 10px auto;
  border: 3px solid green;
  border-radius: 5px;
  background-color: white;
  color: green;
  font-size: 30px;
  font-weight: bold;
  text-align: center;

  :hover {
    filter: brightness(70%);
  }
`;

export const S = {
  InnerAreaContainer,
  InputSearchCompanies,
  ButtonElement,
  CompaniesNameContainer,
  CompaniesNameTitleContainer,
  CompaniesNameList,
  CompaniesDataAndActionsContainer,
  SuppliersListContainer,
  SuppliersTag,
  DeleteSupplierIcon,
  NameAndActionsCompany,
  NameAndActionsCompanyIcons,
  EditIcon,
  DeleteIcon,
  InputChangeCompanyName,
  ChangeCompanyNameContainer,
  ChangeCompanyNameCancelButton,
  ChangeCompanyNameConfirmButton,
};
