/* Using with useIonModal Hook */

import React, { useState } from "react";
import { IonButton, IonContent, IonPage, useIonModal } from "@ionic/react";

const Body: React.FC<{
  onDismiss: () => void;
}> = ({ onDismiss }) => (
  <div
    style={{
      position: "absolute",
      right: "0px",
      textAlign: "left",
      top: "0px",
      width: "100%",
      padding: "30px",
    }}
  >
    <div style={{ textAlign: "right", width: "100%" }}>
      <IonButton
        style={{
          color: "light",
          background: "#fff",
        }}
        color="light"
        onClick={() => onDismiss()}
      >
        Close
      </IonButton>
    </div>
    <h1>How it works</h1>
  </div>
);

const ModalExample: React.FC = () => {
  const handleDismiss = () => {
    dismiss();
  };

  /**
   * First parameter is the component to show, second is the props to pass
   */
  const [present, dismiss] = useIonModal(Body, {
    onDismiss: handleDismiss,
  });

  return (
    <IonPage
      style={{
        width: "100%",

        // color: "#254159",
      }}
    >
      <p
        style={{
          backgroundColor: "#254159",
          position: "absolute",
          top: 0,
          right: "0",
          color: "#fff",
          fontSize: "17px",
          fontFamily: "'Helvetica 55 Roman', sans-serif",
          margin: " 28px 30px 0",
          padding: "5px 10px",
          borderRadius: "50%",
        }}
        onClick={() => {
          present({
            cssClass: "my-class",
          });
        }}
      >
        ?
      </p>
    </IonPage>
  );
};

export default ModalExample;
