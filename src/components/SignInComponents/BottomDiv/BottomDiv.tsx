import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import bottomDivImg from "../../../images/authimage.png";


function BottomDiv() {
  const handleSign = (e: any) => {
    e.preventDefault();
    console.log("signed in");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bottomDivImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "absolute",
        borderRadius: "50px 50px 0 0",
        bottom: "0",
        height: "62vh",
        width: "100%",
      }}
    >
      <div style={{ textAlign: "left", width: "85%", margin: "auto" }}>
        <h1
          style={{
            color: "#fff",
            fontSize: "40px",
            fontFamily: "'Helvetica Neue', sans-serif",
            fontWeight: "bold",
            paddingLeft: "12px",
            margin: "30px auto 5px",
          }}
        >
          Log <br />
          In
        </h1>
        <form action="">
          {" "}
          <IonItem
            lines="none"
            color="backgroundColor"
            style={{ padding: "0", margin: "0" }}
          >
            <IonLabel
              style={{
                color: "#fff",
                fontWeight: "400",
                fontFamily: "'Helvetica 55 Roman', sans-serif",
                fontSize: "14px",
              }}
              position="floating"
            >
              Enter Username
            </IonLabel>
            <IonInput
              style={{
                color: "#fff",
                borderBottom: "1px solid white",
                marginBottom: "5px",
              }}
              value=""
            ></IonInput>
          </IonItem>{" "}
          <IonItem lines="none" color="backgroundColor">
            <IonLabel
              style={{
                color: "#fff",
                fontWeight: "400",
                fontFamily: "'Helvetica 55 Roman', sans-serif",
                fontSize: "14px",
              }}
              position="floating"
            >
              Enter Password
            </IonLabel>
            <IonInput
              autocomplete="off"
              style={{
                color: "#fff",
                borderBottom: "1px solid white",
                marginBottom: "5px",
              }}
              type="password"
              value=""
            ></IonInput>
          </IonItem>
          <Link
            to="/forgot"
            style={{
              background: "none",
              color: "#fff",
              width: "100%",
              border: "none",
              padding: "18px",
              fontSize: "12px",
              display: "block",
              fontFamily: "'Helvetica 55 Roman', sans-serif",
              textAlign: "right",
              marginBottom: "20px",
              textDecoration: "none",
            }}
          >
            Forgot Password
          </Link>
          <div style={{ textAlign: "center", width: "100%" }}>
            <button
              onClick={handleSign}
              style={{
                backgroundColor: "#fff",
                color: "#254159",
                border: "none",
                borderRadius: "25px",
                padding: "18px 70px",
                fontSize: "12px",
                display: "block",
                margin: "auto",
              }}
            >
              Sign In
            </button>{" "}
            <Link
              to="/signup"
              style={{
                background: "none",
                color: "#fff",
                width: "100%",
                border: "none",
                padding: "18px",
                fontSize: "12px",
                display: "block",
                fontFamily: "'Helvetica 55 Roman', sans-serif",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Don’t have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BottomDiv;
