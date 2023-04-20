import { NavLink } from "react-router-dom";

export function Header() {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "black" : "grey",
    borderRight: isActive ? "5px solid rgb(48, 25, 52)" : "",
  });
  return (
    <>
      <h1 className="heading">Chirag's Mail Box</h1>
      <nav>
        <ul></ul>
        <NavLink style={activeStyle} className="navbar" to="/">
          Inbox
        </NavLink>{" "}
        <NavLink style={activeStyle} className="navbar" to="/spam">
          Spam
        </NavLink>{" "}
        <NavLink style={activeStyle} className="navbar" to="/trash">
          Trash
        </NavLink>
      </nav>
    </>
  );
}
