import { OPEN_MENU, CLOSE_MENU, OPEN_CART, CLOSE_CART } from '@utils/actions';

const GlobalReducer = (state, action) => {
  if (action.type === OPEN_MENU) {
    return { ...state, isMenuOpen: true };
  }

  if (action.type === CLOSE_MENU) {
    return { ...state, isMenuOpen: false };
  }

  if (action.type === OPEN_CART) {
    return { ...state, isCartOpen: true };
  }

  if (action.type === CLOSE_CART) {
    return { ...state, isCartOpen: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default GlobalReducer;
