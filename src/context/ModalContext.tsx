// context/UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types for context state and actions
interface UserContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  type?: number; // Adjust type as needed
  setType: (type?: number) => void;
}

// Create a default value for the context (can be adjusted as needed)
const defaultContext: UserContextType = {
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  type: undefined,
  setType: () => {},
};

const UserContext = createContext<UserContextType>(defaultContext);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [type, setType] = useState<number | undefined>(undefined);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <UserContext.Provider
      value={{ isModalOpen, openModal, closeModal, type, setType }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useModal = () => useContext(UserContext);
