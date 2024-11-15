import Logo from "../assets/logo.png";
export const Header = () => {
  return (
    <header className="navBar">
        <img className="logoImg" src={Logo} alt=""/>
        <a href="/">Home</a>
    </header>
  )
}
