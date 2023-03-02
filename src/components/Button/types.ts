import { MouseEventHandler, ReactElement } from "react";

type ButtonTypes =
  | "deleteSupplier"
  | "deleteCompany"
  | "searchCompanyButton"
  | "searchSupplierButton"
  | "changeNameButton"
  | "deleteCompanyOrSupplierButton";

export interface ButtonProps {
  type: ButtonTypes;
  children?: ReactElement;
  onClick?: MouseEventHandler<HTMLSpanElement> | undefined;
}
