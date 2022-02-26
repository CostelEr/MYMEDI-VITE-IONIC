import React, { useState } from "react";
import { IonModal, IonButton, IonContent } from "@ionic/react";

export function ExampleModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <IonModal isOpen={showModal}>
        <p>This is the modal content.</p>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
    </div>
  );
}
