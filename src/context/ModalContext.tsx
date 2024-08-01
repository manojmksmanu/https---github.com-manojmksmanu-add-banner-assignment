// context/UserContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const[type,setType]=useState()
   const openModal = () => setIsModalOpen(true);
   const closeModal = () => setIsModalOpen(false);

  return (
    <UserContext.Provider value={{ isModalOpen, openModal,closeModal,type,setType}}>
      {children}
    </UserContext.Provider>
  );
};

export const useModal = () => useContext(UserContext);
