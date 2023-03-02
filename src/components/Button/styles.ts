import styled from "styled-components";

const SearchCompanyButton = styled.input`
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
  cursor: pointer;

  :hover {
    filter: brightness(70%);
  }
`;

const SearchSupplierButton = styled.input`
  width: 20%;
  height: 40%;
  margin: 3px auto;
  border: 3px solid red;
  border-radius: 5px;
  background-color: white;
  color: red;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  :hover {
    filter: brightness(70%);
  }
`;

const ChangeNameButton = styled.span`
  cursor: pointer;
  padding: 10px;

  :hover {
    background-color: white;
    transition: 350ms;
    border-radius: 3px;
  }
`;

const DeleteSupplierIcon = styled.span`
  cursor: pointer;
  position: absolute;
  top: -5px;
  right: -5px;
`;

const DeleteCompanyOrSupplierButton = styled.span`
  cursor: pointer;
  padding: 10px;

  :hover {
    background-color: white;
    transition: 350ms;
    border-radius: 3px;
  }
`;

const DeleteCompanyIcon = styled.span`
  cursor: pointer;
  position: absolute;
  top: -5px;
  right: -5px;
`;

export const S = {
  SearchCompanyButton,
  SearchSupplierButton,
  ChangeNameButton,
  DeleteSupplierIcon,
  DeleteCompanyOrSupplierButton,
  DeleteCompanyIcon,
};
