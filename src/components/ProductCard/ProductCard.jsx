import { BsFillStarFill } from "react-icons/bs";

const ProductCard = ({ product }) => {
  return (
    <div className="shadow p-3 mb-3 card">
      <img
        className="m-auto"
        src={product.image}
        alt={product.name}
        width="100%"
      />
      <div className=" mt-2">
        <strong className="text-danger">{product.price}</strong>
        <h6 className="pd-name"> {product.name}</h6>
        <small>{product.brand}</small>
        <div className="d-flex gt-2">
          <BsFillStarFill fontSize={14} className="mr-1" />
          <BsFillStarFill fontSize={14} className="mr-1" />
          <BsFillStarFill fontSize={14} className="mr-1" />
          <BsFillStarFill fontSize={14} className="mr-1" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
