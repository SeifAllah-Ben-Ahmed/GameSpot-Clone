import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import SliderArrow from "./SliderArrow";
import ProductCard from "../ProductCard";

const animation = { duration: 10000, easing: (t) => t };

const ProductSlider = ({ products, auto }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: auto,
    renderMode: "performance",
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(s) {
      auto ? s.moveToIdx(5, true, animation) : setLoaded(true);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
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
      <div className="navigation-wrapper my-3">
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
