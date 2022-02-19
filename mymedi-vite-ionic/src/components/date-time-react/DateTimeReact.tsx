import {
  IonDatetime,
  IonPage,
  IonButton,
  IonModal,
  IonContent,
} from "@ionic/react";

import "../../index.css";

export function DateTimeReact() {
  return (
    <IonPage>
      <IonButton id="open-modal" color="secondary">
        Data nașterii
      </IonButton>
      <IonModal trigger="open-modal">
        <IonContent>
          <IonDatetime presentation="date"></IonDatetime>
          <div className="flex justify-center">
            <IonButton>Save</IonButton>
          </div>
        </IonContent>
      </IonModal>
    </IonPage>
  );
}
