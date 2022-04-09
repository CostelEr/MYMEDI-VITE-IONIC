import { IonApp, setupIonicReact } from "@ionic/react";
setupIonicReact();

import { AddInformationButton } from "./components/add-information-button/AddInformationButton";
import { TimeLine } from "./components/time-line/TimeLine";

import "@ionic/react/css/core.css";
import "./index.css";
import { AddFamilyMember } from "./components/add-family-member/AddFamilyMember";
import { AddNewPerson } from "./components/add-new-person/AddNewPerson";

function App() {
  return (
    <div>
      <TimeLine></TimeLine>
      <AddInformationButton></AddInformationButton>
    </div>
  );
}

export default App;
