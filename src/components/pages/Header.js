import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <nav>
      <h1>Chirag's Email App</h1>
      <NavLink to="/">Inbox</NavLink> <NavLink to="/spam">Spam</NavLink>{" "}
      <NavLink to="/trash">Trash</NavLink>
    </nav>
  );
}
