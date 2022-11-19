import React, { createContext, useEffect, useState } from "react";

interface ContextProps {
  businessName: string;
  email: string;
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setBusinessName: (name: string) => void;
  setEmail: (email: string) => void;
}

const AppContext = createContext<Partial<ContextProps>>({});

const AppProvider = ({ children }: any) => {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  console.log(isLoading);
  useEffect(() => {
    const counter = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <AppContext.Provider
      value={{
        businessName,
        email,
        setBusinessName,
        setEmail,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
