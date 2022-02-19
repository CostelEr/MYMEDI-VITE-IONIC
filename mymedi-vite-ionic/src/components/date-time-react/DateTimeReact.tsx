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
      {/* Datetime in overlay */}
      <IonButton id="open-modal" color="secondary">
        Data nașterii
      </IonButton>
      <IonModal trigger="open-modal">
        <IonContent>
          <IonDatetime presentation="date" mode="ios"></IonDatetime>
          <div className="flex justify-center">
            <IonButton target="_top">Save</IonButton>
          </div>
        </IonContent>
      </IonModal>
    </IonPage>
  );
}
