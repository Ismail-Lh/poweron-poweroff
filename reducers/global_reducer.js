import { OPEN_MENU, CLOSE_MENU } from '@utils/actions';

const GlobalReducer = (state, action) => {
  if (action.type === OPEN_MENU) {
    return { ...state, isMenuOpen: true };
  }

  if (action.type === CLOSE_MENU) {
    return { ...state, isMenuOpen: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default GlobalReducer;
