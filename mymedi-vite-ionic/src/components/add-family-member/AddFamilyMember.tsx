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

import { DateTimeReact } from "../date-time-react/DateTimeReact";

import "../../index.css";
import { ImageUpload } from "../image-upload/ImageUpload";

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
        <ImageUpload></ImageUpload>
      </div>

      <IonItem>
        <IonLabel position="floating">Numele</IonLabel>
        <IonInput />
      </IonItem>

      <div className="m-4">
        <IonItem lines="none">
          <DateTimeReact></DateTimeReact>
        </IonItem>
      </div>

      <IonItem>
        <IonLabel>Genul</IonLabel>
        <IonSelect value="bărbat">
          <IonSelectOption value="bărbat">bărbat</IonSelectOption>
          <IonSelectOption value="femeie">femeie</IonSelectOption>
        </IonSelect>
      </IonItem>

      <div className="flex justify-center mt-4">
        <IonButton>Save</IonButton>
      </div>
    </div>
  );
}
