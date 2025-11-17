import Logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="StarSync Logo" />
        <span>StarSync - Align Your Tasks</span>
      </div>
      <div className="themeSelector">
        <span className="light"></span>
      </div>
    </header>
  );
};
