import { useContext, createContext, useReducer } from 'react';

import { GlobalReducer } from '@reducers';
import { OPEN_MENU, CLOSE_MENU } from '@utils/actions';

const initialState = {
  isMenuOpen: false,
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

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        openMenu,
        closeMenu,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
