import { IonApp, setupIonicReact } from "@ionic/react";

import { AddInformationButton } from "./components/add-information-button/AddInformationButton";
import { AddPersonPage } from "./components/add-person-page/AddPersonPage";

import "@ionic/react/css/core.css";

setupIonicReact();
import "./index.css";

import { AddFamilyMember } from "./components/add-family-member/AddFamilyMember";

function App() {
  return (
    <IonApp>
      <div className="bg-black text-white">12359</div>
      <AddFamilyMember></AddFamilyMember>
      <AddPersonPage></AddPersonPage>
      <AddInformationButton></AddInformationButton>
    </IonApp>
  );
}

export default App;
