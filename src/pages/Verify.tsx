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

function Verify() {
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const handleVerification = (e: any) => {
    e.preventDefault();
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      history.push("/verify");
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
    <IonPage style={{ justifyContent: "flex-start" }}>
      <IonContent fullscreen>
        <IonCard
          style={{
            marginTop: "50%",
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
            A One Time Password has Been sent to your registered Email or phone
            number
          </IonCardContent>
          <div>
            <button
              onClick={handleVerification}
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
              Sign up
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
