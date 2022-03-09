import { IonAvatar, IonFabButton, IonIcon, IonText } from "@ionic/react";
import { add } from "ionicons/icons";
export function AddNewPerson() {
  return (
    <div className="flex justify-start align-middle text-center">
      <IonAvatar className="ml-2 justify-center">
        <img
          className="border-solid border-4 border-red-600"
          src="https://www.lightningdesignsystem.com/assets/images/avatar2.jpg"
        />
        <div>Alina</div>
      </IonAvatar>
      <IonAvatar className="ml-4 justify-items-center">
        <img
          className="opacity-60"
          src="https://pickaface.net/gallery/avatar/20120415_210833_653_RH.png"
        />
        <div>Grigore</div>
      </IonAvatar>
      <IonFabButton className="ml-4 mt-1">
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </div>
  );
}
