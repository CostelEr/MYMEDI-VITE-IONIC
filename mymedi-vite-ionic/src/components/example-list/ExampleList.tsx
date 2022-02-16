import {
  IonContent,
  IonFab,
  IonIcon,
  IonFabButton,
  IonFabList,
} from "@ionic/react";

import { add, logoFacebook, logoTwitter, logoVimeo } from "ionicons/icons";
import "@ionic/react/css/core.css";

export function ExampleList() {
  return (
    <IonContent fullscreen class="ion-padding">
      <IonFab horizontal="end" vertical="top" slot="fixed">
        <IonFabButton>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
        <IonFabList>
          <IonFabButton color="light">
            <IonIcon icon={logoFacebook}></IonIcon>
          </IonFabButton>
          <IonFabButton color="light">
            <IonIcon icon={logoTwitter}>Twitter</IonIcon>
          </IonFabButton>
          <IonFabButton color="light">
            <IonIcon icon={logoVimeo}>Vimeo</IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonContent>
  );
}
