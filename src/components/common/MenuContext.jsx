import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export function useShowMenu() {
  return useContext(MenuContext);
}

export function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  //   function handleShowMenu() {
  const handleOpenMenu = () => {
    setShowMenu(true);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  //   }
  return (
    <MenuContext.Provider value={{ showMenu, handleOpenMenu, handleCloseMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
