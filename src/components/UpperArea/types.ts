import { ReactNode } from "react";

type UpperAreaTypes = "company" | "supplier";

export interface UpperAreaProps {
  type: UpperAreaTypes;
  children: ReactNode;
}
