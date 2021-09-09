import { useGlobalContext } from '@contexts/global_context';
import { Sidebar } from '@components';
import { CloseIcon } from '@icons';
import {
  CartContainer,
  CartHeader,
  CartTitle,
  CartItemsContainer,
} from './CartStyles';

const Cart = () => {
  const { closeCart } = useGlobalContext();

  return (
    <Sidebar cart={true} handleClick={closeCart}>
      <CartContainer>
        <CartHeader>
          <CartTitle>cart</CartTitle>
          <button onClick={closeCart}>
            <CloseIcon />
          </button>
        </CartHeader>
        <CartItemsContainer>
          <p>Your cart is currently empty.</p>
        </CartItemsContainer>
      </CartContainer>
    </Sidebar>
  );
};

export default Cart;
