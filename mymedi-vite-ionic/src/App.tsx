import { IonApp, setupIonicReact } from "@ionic/react";
setupIonicReact();

import { AddInformationButton } from "./components/add-information-button/AddInformationButton";
import { TimeLine } from "./components/time-line/TimeLine";

import "@ionic/react/css/core.css";
import "./index.css";

function App() {
  return (
    <IonApp>
      <TimeLine></TimeLine>
      <AddInformationButton></AddInformationButton>
    </IonApp>
  );
}

export default App;
