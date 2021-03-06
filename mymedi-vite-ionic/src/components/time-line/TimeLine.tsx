import React from "react";
import {
  IonList,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonListHeader,
  IonAvatar,
  IonContent,
  IonItem,
  IonLabel,
  IonApp,
  IonText,
} from "@ionic/react";
import "../../index.css";

export function TimeLine({}) {
  return (
    <IonApp>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>TimeLine</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          <IonListHeader>
            <IonText color="secondary">
              <h3> LUNI, 14 FEBRUARIE, 2022</h3>{" "}
            </IonText>
          </IonListHeader>
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
                    <h3>9:48</h3>
                  </IonText>
                </div>
              </div>
              <p>Oral Reading - Manual Entry</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>
              <div className="flex justify-start align-baseline">
                <div className="text-2xl font-bold w-4/5">
                  <IonText color="dark">
                    <h2>No Symptoms</h2>
                  </IonText>
                </div>
                <div className="w-1/5 flex justify-center">
                  <IonText color="dark">
                    <h3>10:02</h3>
                  </IonText>
                </div>
              </div>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>
              <div className="flex justify-start align-baseline">
                <div className="text-2xl font-bold w-4/5">
                  <IonText color="primary">
                    <h2>
                      36,5<sup>0</sup> No Fever
                    </h2>
                  </IonText>
                </div>
                <div className="w-1/5 flex justify-center">
                  <IonText color="dark">
                    <h3>9:48</h3>
                  </IonText>
                </div>
              </div>

              <p>Oral Reading - Manual Entry</p>
            </IonLabel>
          </IonItem>
        </IonList>
        <IonListHeader>
          <IonText color="secondary">
            <h3>MAR??I, 15 FEBRUARIE, 2022</h3>
          </IonText>
        </IonListHeader>
        <IonItem>
          <IonLabel>
            <div className="flex justify-start align-baseline">
              <div className="text-2xl font-bold w-4/5">
                <IonText color="dark">
                  <h2>No Symptoms</h2>
                </IonText>
              </div>
              <div className="w-1/5 flex justify-center">
                <IonText color="dark">
                  <h3>10:02</h3>
                </IonText>
              </div>
            </div>
          </IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>
            <div className="flex justify-start align-baseline">
              <div className="text-2xl font-bold w-4/5">
                <IonText color="primary">
                  <h2>
                    36,5<sup>0</sup> No Fever
                  </h2>
                </IonText>
              </div>
              <div className="w-1/5 flex justify-center">
                <IonText color="dark">
                  <h3>9:48</h3>
                </IonText>
              </div>
            </div>

            <p>Oral Reading - Manual Entry</p>
          </IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>
            <div className="flex justify-start align-baseline">
              <div className="text-2xl font-bold w-4/5">
                <IonText color="dark">
                  <h2>No Symptoms</h2>
                </IonText>
              </div>
              <div className="w-1/5 flex justify-center">
                <IonText color="dark">
                  <h3>10:02</h3>
                </IonText>
              </div>
            </div>
          </IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>
            <div className="flex justify-start align-baseline">
              <div className="text-2xl font-bold w-4/5">
                <IonText color="primary">
                  <h2>
                    36,5<sup>0</sup> No Fever
                  </h2>
                </IonText>
              </div>
              <div className="w-1/5 flex justify-center">
                <IonText color="dark">
                  <h3>9:48</h3>
                </IonText>
              </div>
            </div>

            <p>Oral Reading - Manual Entry</p>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonApp>
  );
}
