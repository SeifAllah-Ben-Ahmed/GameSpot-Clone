import { Button } from "react-bootstrap";
import { BsTruck } from "react-icons/bs";

const ProductDetails = () => {
  return (
    <div className="d-flex flex-column justify-content-between">
      <div className="mb-3">
        <h1>Sony DualSense Wireless Controller for PlayStation 5</h1>
        <span>Sony</span>
      </div>
      <div className="mb-3">
        <h2 className="p-0 text-primary">
          <strong>$340.99</strong>
        </h2>
        <h3>highlights :</h3>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            sapiente.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            sapiente.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            sapiente.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            sapiente.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            sapiente.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            sapiente.
          </li>
        </ul>
      </div>
      <div className="d-grid gap-2">
        <Button size="lg"> Add to Card</Button>
      </div>

      <div className="card flex-row p-3 my-3 align-items-center">
        <BsTruck fontSize={30} />
        <div className="ms-3">
          <h3 className="h5">
            <strong>FREE shipping</strong> <small>on orders $35+</small>
          </h3>
          <span>Arrives in 2 - 5 days</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
