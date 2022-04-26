import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import SliderArrow from "./SliderArrow";
import ProductCard from "../ProductCard";

const ProductSlider = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(max-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5, spacing: 20 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <>
      <div className="navigation-wrapper m-y-3">
        <div ref={sliderRef} className="keen-slider my-5">
          {products &&
            products.map((product, i) => (
              <div key={i} className="keen-slider__slide ">
                <ProductCard product={product} />
              </div>
            ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <SliderArrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            <SliderArrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length -
                  instanceRef.current.options.slides.perView
              }
            />
          </>
        )}
      </div>
    </>
  );
};

export default ProductSlider;
