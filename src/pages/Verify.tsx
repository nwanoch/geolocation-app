import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonLoading,
  IonPage,
} from "@ionic/react";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useRef } from "react";
import axios from "axios";
import OtpInput from "react-otp-input";
import { toastError, toastSuccess } from "../components/Toast";
import Greeting from "../components/Greeting/Greeting";
function Verify() {
  const history = useHistory();
  const usernameRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const [showLoading, setShowLoading] = useState(false);
  const username = usernameRef.current?.value;
  const password = passwordRef.current?.value;
  const [otp, setotp] = useState("");
  const handleVerification = (e: any) => {
    e.preventDefault();
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      toastSuccess("User successfully registered");
      history.push("/initialmapboard");
    }, 1000);

    const api = axios.create({
      baseURL: `http://localhost:5000/api`,
    });
    e.preventDefault();
    api
      .post("/login", { username, password })
      .then((res) => {
        history.push("/mapboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    // ;
    // toastError("User is not created try again");
    <IonPage style={{ justifyContent: "flex-start" }}>
      <IonContent fullscreen>
        <Greeting />
        <IonCard
          style={{
            margin: "50% 25px 0",
            transform: "translateY(-50%)",
            alignItem: "center",
            padding: "30px",
          }}
        >
          {/* <IonCardHeader>
            <IonCardSubtitle>Destination</IonCardSubtitle>
            <IonCardTitle>Madison, WI</IonCardTitle>
          </IonCardHeader> */}
          <IonCardContent>
            A One Time Password has Been sent to your registered Email
          </IonCardContent>{" "}
          <div style={{ width: "100%", textAlign: "center" }}>
            {" "}
            <OtpInput
              value={otp}
              onChange={(otp) => {
                setotp(otp);
              }}
              separator={
                <span>
                  <strong></strong>
                </span>
              }
              containerStyle={{
                justifyContent: "center",
                margin: "10px auto 20px ",
              }}
              inputStyle={{
                width: "3rem",
                height: "3rem",
                margin: "0rem .5rem",
                fontSize: "2rem",
                borderRadius: 4,
                border: "1px solid rgba(0,0,0,0.3)",
              }}
            />
          </div>
          <div>
            <button
              onClick={handleVerification}
              style={{
                backgroundColor: "#3A5369",
                color: "#fff",
                border: "none",
                borderRadius: "25px",
                padding: "18px 70px",
                fontSize: "12px",
                display: "block",
                margin: "auto",
              }}
            >
              Verify
            </button>{" "}
          </div>
        </IonCard>
      </IonContent>{" "}
      <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Loading ..."}
        duration={5000}
      />
    </IonPage>
  );
}

export default Verify;
