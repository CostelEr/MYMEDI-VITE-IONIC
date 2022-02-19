import {
  IonItem,
  IonLabel,
  IonButton,
  IonCheckbox,
  IonInput,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

import "../../index.css";
import { DateTimeReact } from "../date-time-react/DateTimeReact";

export function AddFamilyMember() {
  return (
    <div>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle color="primary">
            <div className="flex justify-center pt-4">
              Adaugă o persoană nouă
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <div className="flex justify-center pt-4">
        <IonAvatar>
          <img src="https://zm-cs.ru/files/avatars/1537189754.jpg" />
        </IonAvatar>
      </div>

      <IonItem>
        <IonLabel position="floating">Numele</IonLabel>
        <IonInput />
      </IonItem>

      <IonItem>
        <IonLabel>Genul</IonLabel>
        <IonSelect value="bărbat">
          <IonSelectOption value="bărbat">bărbat</IonSelectOption>
          <IonSelectOption value="femeie">femeie</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem lines="none">
        <DateTimeReact></DateTimeReact>
      </IonItem>
      <IonItem lines="none">
        <div className="pt-4 flex justify-center">
          <IonButton>Save</IonButton>
        </div>
      </IonItem>
    </div>
  );
}
