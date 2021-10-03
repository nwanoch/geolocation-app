import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect } from "react-router-dom";
import Menu from "./components/Menu";
import Page from "./pages/Page";
import React, { useEffect, useState } from "react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

//components

import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Forgot from "./pages/Forgot";
import Mapboard from "./pages/Mapboard";

import { useLocation } from "react-router-dom";
import { Route, Switch } from "react-router";
import FinishedMapboard from "./pages/FinishedBoard";
import Verify from "./pages/Verify";

const App: React.FC = () => {
  const [location, setLocation] = useState<any>([]);
  const [lat, setlat] = useState(3);
  const [long, setlong] = useState(5);
  const getLocation = (): void => {
    console.log("location getter ran");
    navigator.geolocation.getCurrentPosition(
      (position: any) => {
        setLocation([
          ...location,
          [position.coords.longitude, position.coords.latitude],
        ]);
        setlat(position.coords.latitude);
        setlong(position.coords.longitude);
        console.log(location);
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
      }
    );
  };


  const data = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        location,
      ],
    },
  };

  console.log(data)
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />

          <IonRouterOutlet animated id="main">
            <Route path="/" exact={true}>
              <Welcome />
            </Route>
            <Route path="/signUp" exact={true}>
              <SignUp />
            </Route>

            <Route path="/Login" exact={true}>
              <SignIn />
            </Route>
            <Route path="/forgot" exact={true}>
              <Forgot />
            </Route>
            <Route path="/initialmapboard" exact={true}>
              <Mapboard getLocation={getLocation} location={location} />
            </Route>
            <Route path="/finishedMapboard" exact={true}>
              <FinishedMapboard data={data} />
            </Route>
            <Route path="/verify" exact={true}>
              <Verify />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
