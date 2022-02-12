import { setupIonicReact } from "@ionic/react";

import { AddPersonPage } from "./components/add-person-page/AddPersonPage";

import "@ionic/react/css/core.css";

setupIonicReact();

function App() {
  return <AddPersonPage></AddPersonPage>;
}

export default App;
