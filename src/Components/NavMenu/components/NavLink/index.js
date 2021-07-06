import { NavLink } from "react-router-dom";

const Nav = ({ to, texto, activeClassName, className }) => {
  return (
    <NavLink to={to} activeClassName={activeClassName} className={className}>
      {texto}
    </NavLink>
  );
};

export default Nav;
