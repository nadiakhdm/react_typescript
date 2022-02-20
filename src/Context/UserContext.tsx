import React from "react";
import { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};
export type UserContextProps = {
  user: string;
};
export type UserContextTypes = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
export type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextTypes);
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
