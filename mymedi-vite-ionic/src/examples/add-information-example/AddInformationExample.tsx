import React from "react";
import { useState } from "react";

import {
  IonButton,
  IonItem,
  IonLabel,
  IonText,
  IonTextarea,
} from "@ionic/react";
import "../../index.css";

export function AddInformationExample() {
  const InformationToAdd = (props) => {
    return (
      <IonItem>
        <IonLabel>
          <div className="flex justify-start align-baseline">
            <div className="text-2xl font-bold w-4/5">
              <IonText color="danger">
                <h2>
                  38,0<sup>0</sup> Mild Fever
                </h2>
              </IonText>
            </div>
            <div className="w-1/5 flex justify-center">
              <IonText color="dark">
                <h3>{props.hour}</h3>
              </IonText>
            </div>
          </div>
          <p>{props.note}</p>
        </IonLabel>
      </IonItem>
    );
  };

  const [note, setNote] = useState("");
  const [count, setCount] = useState(<div></div>);

  return (
    <div>
      <IonTextarea
        placeholder="Conținutul notiței"
        onIonChange={(e) => {
          setNote(e.detail.value!);
        }}
      ></IonTextarea>
      <IonButton
        type="button"
        onClick={() =>
          setCount(() => (
            <div>
              {count} <InformationToAdd note={note} hour="9.43" />
            </div>
          ))
        }
      >
        Save
      </IonButton>
      <InformationToAdd note="XYZ" hour="9.43" />
      <InformationToAdd note="Edite" hour="10.05" />
      {count}
    </div>
  );
}
