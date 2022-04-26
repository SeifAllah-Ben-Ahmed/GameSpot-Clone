import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import { menuContext } from "../../context/MenuContext";

const SubMenu = ({ title, subTitle, handleClose }) => {
  const { state, dispatch } = useContext(menuContext);
  const [show, setShow] = useState(state.subMenu);

  useEffect(() => {
    if (!state.subMenu) {
      setShow(false);
    }
  }, [state, show]);

  const handleClick = () => {
    dispatch({ type: "OPEN_SUB" });
    setShow(true);
  };

  return (
    <>
      <Nav.Link onClick={handleClick}>
        {title} <BsChevronRight />
      </Nav.Link>
      <div
        className={
          show
            ? "sub-menu custom-scrollbar-css show "
            : "sub-menu custom-scrollbar-css"
        }
      >
        <h2>{title}</h2>
        <ul className="p-0 m-0 pb-4">
          {subTitle &&
            subTitle.map((sub, i) => (
              <Nav.Item key={i}>
                <li className="d-block">
                  <Link
                    className="nav-link"
                    to={`/shop/${title}/${sub}`}
                    onClick={handleClose}
                  >
                    {sub}
                  </Link>
                </li>
              </Nav.Item>
            ))}
        </ul>
      </div>
    </>
  );
};

export default SubMenu;
