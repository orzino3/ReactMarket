import { useNavigate } from "react-router-dom";
import "./styles/Header.css";
import logo from "../assets/LOGO.png";

function Header() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="header-container">
      <div className="site-name">
        <div className="logo-container">
          <img src={logo} alt="Site Logo" />
          <img
            src="https://icon.icepanel.io/Technology/svg/React.svg"
            alt="reactLogo"
            className="rLogo"
          />
        </div>
      </div>
      <div className="marquee-container">
        <marquee className="site-desc">Welcome to the REACT Market!</marquee>
      </div>

      <div className="button-container">
        <button className="btn btn-primary" onClick={goToHome}>
          Home
        </button>
        <button className="btn btn-primary" onClick={goToCart}>
          Cart
        </button>
      </div>
    </div>
  );
}

export default Header;
