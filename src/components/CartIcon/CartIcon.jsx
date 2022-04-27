import { useState } from "react";
import CartItem from "./CartItem";
import { BsCart3 } from "react-icons/bs";
import { Button } from "react-bootstrap";

const CartIcon = ({ fontSize }) => {
  const [show, setShow] = useState(false);
  console.log(show);
  const handleDrop = () => {
    setShow((perv) => !perv);
  };
  return (
    <div onMouseEnter={handleDrop} onMouseLeave={handleDrop}>
      <BsCart3 fontSize={fontSize} />
      <div className={`shopping card position-absolute ${show ? "show" : ""}`}>
        <header className="shopping_header">
          <BsCart3 fontSize={20} />
          <h6>
            <strong>total :</strong>
            <small> $500.00</small>
          </h6>
        </header>
        <hr />
        <div className="productSection custom-scrollbar-css">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="d-grid gap-2 py-3">
          <Button variant="secondary" size="small">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
