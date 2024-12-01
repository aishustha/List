import Logo from "../assets/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header className="navBar">
        <img className="logoImg" src={Logo} alt=""/>
        <a href="/">Home</a>
    </header>
  )
}
