import { IonAvatar, IonFabButton, IonIcon, IonText } from "@ionic/react";
import { add } from "ionicons/icons";
export function AddNewPerson() {
  return (
    <div className="flex justify-start align-middle">
      <IonAvatar className="ml-2 justify-items-center">
        <img src="https://www.lightningdesignsystem.com/assets/images/avatar2.jpg" />
        <IonText>Alina</IonText>
      </IonAvatar>
      <IonAvatar className="ml-4 justify-items-center">
        <img src="https://pickaface.net/gallery/avatar/20120415_210833_653_RH.png" />
        <IonText>Grigore</IonText>
      </IonAvatar>
      <IonFabButton className="ml-4 mt-1">
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </div>
  );
}
