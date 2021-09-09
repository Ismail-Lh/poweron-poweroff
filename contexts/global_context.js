import { useContext, createContext, useReducer } from 'react';

import { GlobalReducer } from '@reducers';
import { OPEN_MENU, CLOSE_MENU, OPEN_CART, CLOSE_CART } from '@utils/actions';

const initialState = {
  isMenuOpen: false,
  isCartOpen: false,
};

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const openMenu = () => {
    dispatch({ type: OPEN_MENU });
  };

  const closeMenu = () => {
    dispatch({ type: CLOSE_MENU });
  };

  const openCart = () => {
    dispatch({ type: OPEN_CART });
  };

  const closeCart = () => {
    dispatch({ type: CLOSE_CART });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        openMenu,
        closeMenu,
        openCart,
        closeCart,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
