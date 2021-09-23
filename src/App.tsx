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
        [
          [-67.13734, 45.13745],
          [-66.96466, 44.8097],
          [-68.03252, 44.3252],
          [-69.06, 43.98],
          [-70.11617, 43.68405],
          [-70.64573, 43.09008],
          [-70.75102, 43.08003],
          [-70.79761, 43.21973],
          [-70.98176, 43.36789],
          [-70.94416, 43.46633],
          [-71.08482, 45.30524],
          [-70.66002, 45.46022],
          [-70.30495, 45.91479],
          [-70.00014, 46.69317],
          [-69.23708, 47.44777],
          [-68.90478, 47.18479],
          [-68.2343, 47.35462],
          [-67.79035, 47.06624],
          [-67.79141, 45.70258],
          [-67.13734, 45.13745],
        ],

        { location },
      ],
    },
  };
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
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
