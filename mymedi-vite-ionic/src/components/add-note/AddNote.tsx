import {
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/react";
export function AddNote() {
  return (
    <div>
      <IonItem>
        <IonLabel position="stacked">Date and Time</IonLabel>
        <IonInput placeholder="24 februarie 2022" type="text"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Titlu notiței</IonLabel>
        <IonInput placeholder="Titlu notiței" type="text"></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Conținutul notiței</IonLabel>
        <IonTextarea placeholder="Conținutul notiței"></IonTextarea>
      </IonItem>
      <div className="flex justify-center mt-4">
        <IonButton>Save</IonButton>
      </div>
    </div>
  );
}
