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
      {/* render auth page if there is no token otherwise dont render anything */}
      (getToken() ? null : <Auth page={page} setIsVisible={setIsVisible} />)
    </>
  );
};

export default AuthController;
