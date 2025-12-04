import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Log In");

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Log In"
                ? setBtnName("Log Out")
                : setBtnName("Log In");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
