import { IonApp } from "@ionic/react";

import { AddInformationButton } from "./components/add-information-button/AddInformationButton";
import { AddPersonPage } from "./components/add-person-page/AddPersonPage";
import "./output.css";

function App() {
  return (
    <IonApp>
      <AddPersonPage></AddPersonPage>
      <AddInformationButton></AddInformationButton>
    </IonApp>
  );
}

export default App;
