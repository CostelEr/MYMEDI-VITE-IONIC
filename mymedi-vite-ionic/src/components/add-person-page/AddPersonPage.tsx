import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItemDivider,
  setupIonicReact,
  IonAvatar,
  IonItem,
  IonFabButton,
  IonIcon,
} from "@ionic/react";

import { add } from "ionicons/icons";

import "@ionic/react/css/core.css";

setupIonicReact();

export const AddPersonPage: React.FC = () => (
  <IonGrid>
    <IonRow>
      <h1>
        <b>Grigore</b>
      </h1>
    </IonRow>
    <IonItemDivider></IonItemDivider>
    <IonRow>
      <IonCol>
        <IonItem lines="none">
          <IonAvatar slot="start">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Valeriy_Konovalyuk_3x4.jpg" />
          </IonAvatar>
          <IonAvatar slot="start">
            <img src="https://ru.visafoto.com/img/3x4-cm-passport-photo-example.jpg" />
          </IonAvatar>
          <IonFabButton size="small">
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonItem>
      </IonCol>
    </IonRow>
    <IonItemDivider></IonItemDivider>
  </IonGrid>
);
