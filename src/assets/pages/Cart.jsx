import { useCart } from "../components/CartContext";
import Button from "../components/Button";
import cancelIcon from "/assets/icons/icon-cancel.svg";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleChange = (e, label) => {
    const qty = parseInt(e.target.value) || 1;
    updateQuantity(label, qty);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    alert("Order submitted successfully");
    clearCart();
  };

  return (
    <div className="main-cart">
      <div className="main-cart__breadcrumb">
        <span>Home</span>
        <span>/</span>
        <span>Cart</span>
      </div>

      <div className="main-cart__table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.label}>
                <td>
                  <div className="main-cart__table--image">
                    <img
                      src={cancelIcon}
                      alt="cancel"
                      className="cancel"
                      onClick={() => removeFromCart(item.label)}
                    />
                    <img src={item.product} alt={item.label} className="screen" />
                  </div>
                  <span>{item.label}</span>
                </td>
                <td>${item.price}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleChange(e, item.label)}
                  />
                </td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="main-cart__options">
        <Button buttonColour="button-transparent">Return to Shop</Button>
        <Button buttonColour="button-transparent">Update Cart</Button>
      </div>
      <div className="main-cart__coupon">
        <form>
          <input
            type="text"
            name="coupon"
            id="coupon"
            placeholder="Coupon Code"
          />
          <input type="submit" value="Apply Coupon" />
        </form>

        <div>
          <h6>Cart Total</h6>
          <div>
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div>
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <div>
            <Button buttonColour="button-reddish-brown" onClick={handleCheckout}>
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
