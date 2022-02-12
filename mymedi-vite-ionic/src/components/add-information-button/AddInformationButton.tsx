import {
  IonIcon,
  setupIonicReact,
  IonFabButton,
  IonFabList,
  IonFab,
  IonChip,
  IonLabel,
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

setupIonicReact();

export function AddInformationButton() {
  return (
    <IonFab vertical="bottom" horizontal="center" slot="fixed">
      <IonFabButton>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList></IonFabList>
      <IonFabList side="top">
        <IonChip color="primary">
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
        <IonChip color="primary">
          <IonLabel>NOTE</IonLabel>
          <IonIcon icon={pencilOutline}></IonIcon>
        </IonChip>
      </IonFabList>
    </IonFab>
  );
}
