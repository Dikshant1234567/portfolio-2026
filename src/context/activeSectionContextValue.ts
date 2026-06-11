import { createContext } from "react";

export interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export const ActiveSectionContext = createContext<
  ActiveSectionContextType | undefined
>(undefined);
