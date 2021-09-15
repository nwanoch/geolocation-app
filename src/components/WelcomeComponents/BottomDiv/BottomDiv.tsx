import { IonButton } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import bottomDivImg from "../../../images/authimage.png";
function BottomDiv() {
  return (
    <div
      style={{
        backgroundImage: `url(${bottomDivImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "absolute",
        borderRadius: "50px 50px 0 0",
        bottom: "0",
        height: "50vh",
        width: "100%",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "#fff",
            fontSize: "24px",
            fontFamily: "'Helvetica 55 Roman', sans-serif",
            margin: "90px auto 45px",
          }}
        >
          Lets get started
        </h1>
        <Link
          to="login"
          style={{
            backgroundColor: "#fff",
            color: "#254159",
            display: "inline-block",
            textDecoration: "none",
            border: "none",
            borderRadius: "25px",
            padding: "18px 70px",
            fontSize: "12px",
          }}
        >
          Sign in
        </Link>
        <p
          style={{
            margin: "10px auto 1px",
            fontFamily: "'Helvetica 55 Roman', sans-serif",
            fontSize: "12px",
            color: "#fff",
          }}
        >
          Or
        </p>
        <Link
          to="signup"
          style={{
            backgroundColor: "#fff",
            color: "#254159",
            display: "inline-block",
            textDecoration: "none",
            border: "none",
            borderRadius: "25px",
            padding: "18px 70px",
            fontSize: "12px",
          }}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default BottomDiv;
