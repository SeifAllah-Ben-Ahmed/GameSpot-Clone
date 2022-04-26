import { Link, useLocation } from "react-router-dom";
import { BsHouseDoorFill } from "react-icons/bs";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const pathnameArray = pathname.split("/");
  const link = (index) => {
    return pathnameArray.slice(0, index + 1).join("/") || "/";
  };

  return (
    <nav className=" breadcrumb pt-5">
      <ol className=" breadcrumb">
        {pathnameArray.map((item, i) => (
          <li
            key={i}
            className={`breadcrumb-item ${
              i === pathnameArray.length - 1 ? "active" : ""
            }`}
          >
            <Link to={link(i)}>
              {item.replace(/%20/g, " ") || <BsHouseDoorFill />}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
