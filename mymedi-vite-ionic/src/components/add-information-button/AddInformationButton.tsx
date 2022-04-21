import { useState } from "react";
import {
  IonIcon,
  setupIonicReact,
  IonFabButton,
  IonFabList,
  IonFab,
  IonChip,
  IonLabel,
  IonModal,
  IonButton,
} from "@ionic/react";

import {
  add,
  happyOutline,
  thermometerOutline,
  gitNetworkOutline,
  pencilOutline,
  flaskOutline,
  alarmOutline,
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import { AddNote } from "../add-note/AddNote";

setupIonicReact();

export function AddInformationButton() {
  const [showModal, setShowModal] = useState(false);
  const onCloseNote = (isOpen: boolean) => {
    setShowModal(isOpen);
  };

  return (
    <div>
      <div className="bg-gray-800 text-white text-3xl"></div>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
        <IonFabList side="top">
          <IonChip color="primary" className="bg-slate-700">
            <IonLabel>TEMPERATURE</IonLabel>
            <IonIcon icon={thermometerOutline}></IonIcon>
          </IonChip>
          <IonChip color="primary">
            <IonLabel>SYMPTOM</IonLabel>
            <IonIcon icon={happyOutline}></IonIcon>
          </IonChip>
          <IonChip color="primary">
            <IonLabel>DIAGNOSIS</IonLabel>
            <IonIcon icon={gitNetworkOutline}></IonIcon>
          </IonChip>
          <IonChip color="primary">
            <IonLabel>MEDICATION</IonLabel>
            <IonIcon icon={flaskOutline}></IonIcon>
          </IonChip>
          <IonChip color="primary">
            <IonLabel>REMINDER</IonLabel>
            <IonIcon icon={alarmOutline}></IonIcon>
          </IonChip>
          <IonChip color="primary" onClick={() => setShowModal(true)}>
            <IonLabel>NOTE</IonLabel>
            <IonIcon icon={pencilOutline}></IonIcon>
          </IonChip>
        </IonFabList>
      </IonFab>
      <IonModal isOpen={showModal}>
        <div className="flex justify-center mt-4">
          <IonButton onClick={() => setShowModal(false)}>x</IonButton>
        </div>
        <AddNote onCloseNote={onCloseNote}></AddNote>
      </IonModal>
    </div>
  );
}
