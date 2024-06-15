import React from "react";
import Auth from "../Auth";
import "./Auth.Controller.css";

const AuthController = ({ page, setIsVisible }) => {
  // const [isVisible, setIsVisible] = React.useState(true);

  const getToken = () => {
    const token = localStorage.getItem("token");
    // return token;
    return token;
  };

  const [token, setToken] = React.useState(getToken());

  if (getToken()) {
    return null;
  }

  return (
    <>
      <div
        className="auth-container"
      >
        <Auth page={page} setToken={setToken} setIsVisible={setIsVisible}/>
      </div>
    </>
  );
};

export default AuthController;
