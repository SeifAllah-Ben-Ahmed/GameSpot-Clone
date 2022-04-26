import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const SliderArrow = (props) => {
  const disabled = props.disabled ? " arrow--disabled" : "";

  return (
    <button
      className={`btn btn-danger arrow ${
        props.left ? "arrow--left" : "arrow--right"
      }`}
      disabled={disabled}
      onClick={props.onClick}
    >
      {props.left ? (
        <BsFillArrowLeftCircleFill fontSize={32} />
      ) : (
        <BsFillArrowRightCircleFill fontSize={32} />
      )}
    </button>
  );
};

export default SliderArrow;
