import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonDatetime,
  IonButtons,
  IonButton,
  IonModal,
} from "@ionic/react";

import "../../index.css";

export function AddInformationButton() {
  return (
    <IonApp>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>DateTime</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding-start ion-padding-end" fullscreen>
        <div className="grid">
          <div className="grid-item">
            <h2>Initial Value</h2>
            <IonDatetime value="2012-12-15T13:47:20.789"></IonDatetime>
          </div>
          <div className="grid-item">
            <h2>Readonly</h2>
            <IonDatetime readonly></IonDatetime>
          </div>
          <div className="grid-item">
            <h2>Disabled</h2>
            <IonDatetime disabled></IonDatetime>
          </div>
          <div className="grid-item">
            <h2>Custom Locale</h2>
            <IonDatetime locale="en-GB"></IonDatetime>
          </div>
          <div className="grid-item">
            <h2>Max and min</h2>
            <IonDatetime
              min="1994-03-14"
              max="2012-12-09"
              value="2008-09-02"
            ></IonDatetime>
          </div>
          <div className="grid-item">
            <h2>15 minute increments</h2>
            <IonDatetime minute-values="0,15,30,45"></IonDatetime>
          </div>
          <div className="grid-item">
            <h2>Specific days/months/years</h2>
            <IonDatetime
              month-values="6,7,8"
              year-values="2014,2015"
              day-values="01,02,03,04,05,06,08,09,10,11,12,13,14"
            ></IonDatetime>
          </div>
          <div className="grid-item">
            <h2>Time Only</h2>
            <IonDatetime presentation="time"></IonDatetime>
          </div>
          <div className="grid-item">
            <h2>Time First, Date Second</h2>
            <IonDatetime presentation="time-date"></IonDatetime>
          </div>
          <div className="grid-item">
            <h2>Custom Hour Cycle</h2>
            <IonDatetime hour-cycle="h23"></IonDatetime>
          </div>
          <div className="grid-item">
            <h2>Custom First Day Of Week</h2>
            <IonDatetime first-day-of-week="1"></IonDatetime>
          </div>
          <div className="grid-item">
            <h2>Custom Title</h2>
            <IonDatetime>
              <div slot="title">My Custom Title</div>
            </IonDatetime>
          </div>
          <div className="grid-item">
            <h2>Clear Button</h2>
            <IonDatetime show-clear-button="true"></IonDatetime>
          </div>
          <div className="grid-item">
            <h2>Custom Buttons</h2>
            <IonDatetime ref="el => this.customDatetime = el">
              <IonButtons slot="buttons">
                <IonButton color="primary" onClick="{() => this.confirm()}">
                  Good to go!
                </IonButton>
                <IonButton color="danger" onClick={() => this.reset()}>
                  Reset
                </IonButton>
              </IonButtons>
            </IonDatetime>
          </div>
          <div className="grid-item">
            <h2>Datetime in Overlay</h2>
            <IonButton id="open-modal">Open Datetime Modal</IonButton>
            <IonModal trigger="open-modal">
              <IonContent force-overscroll="false">
                <IonDatetime></IonDatetime>
              </IonContent>
            </IonModal>
          </div>
        </div>
      </IonContent>
    </IonApp>
  );
}
