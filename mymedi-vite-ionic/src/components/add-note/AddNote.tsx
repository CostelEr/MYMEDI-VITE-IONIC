import { useState } from "react";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/react";
export function AddNote() {
  const [note, setNote] = useState("");
  const [notiteNoi, setNotiteNoi] = useState("");
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
        <IonTextarea
          placeholder="Conținutul notiței"
          onIonChange={(e) => {
            setNote(e.detail.value!);
            setNotiteNoi("true");
          }}
        ></IonTextarea>
      </IonItem>
      {notiteNoi && (
        <div className="bg-red-700 text-2xl text-white flex justify-center py-2">
          {note}
        </div>
      )}
    </div>
  );
}
