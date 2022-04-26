import { useState } from "react";
import Slider from "rc-slider";

const PriceFilter = () => {
  const [priceFilter, setPriceFilter] = useState([10, 1000]);
  return (
    <div className="position-relative mb-5 p-3">
      <h6>Price</h6>
      <Slider
        range
        className="t-slider"
        max={1000}
        min={10}
        defaultValue={[50, 500]}
        onChange={(val) => setPriceFilter(val)}
      />
      <div className="position-absolute start-0 card py-1 px-2">
        <span>{priceFilter[0]}</span>
      </div>
      <div className="position-absolute end-0 card py-1 px-2">
        <span>{priceFilter[1]}</span>
      </div>
    </div>
  );
};

export default PriceFilter;
