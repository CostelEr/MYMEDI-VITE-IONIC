import { IonApp } from "@ionic/react";

import { AddInformationButton } from "./components/add-information-button/AddInformationButton";
import { AddPersonPage } from "./components/add-person-page/AddPersonPage";
import "./output.css";

function App() {
  return (
    <IonApp>
      <AddPersonPage></AddPersonPage>
      <div className="border-2 bg-gray-800 text-white">Salut</div>
      <AddInformationButton></AddInformationButton>
    </IonApp>
  );
}

export default App;
