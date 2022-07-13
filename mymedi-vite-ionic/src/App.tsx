import { IonApp, setupIonicReact } from "@ionic/react";
setupIonicReact();

import { AddInformationButton } from "./components/add-information-button/AddInformationButton";
import { TimeLine } from "./components/time-line/TimeLine";

import "@ionic/react/css/core.css";
import "./index.css";
import { AddFamilyMember } from "./components/add-family-member/AddFamilyMember";
import { AddNewPerson } from "./components/add-new-person/AddNewPerson";
import { AddNote } from "./components/add-note/AddNote";

function App() {
  return (
    <div>
      <AddNewPerson></AddNewPerson>
      {/* <AddNote></AddNote> */}
    </div>
  );
}

export default App;
