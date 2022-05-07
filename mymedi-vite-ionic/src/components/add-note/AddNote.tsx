import { useState } from "react";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonTextarea,
} from "@ionic/react";

import {
  INote,
  weekday,
  yearmounth,
  dayhours,
  hoursminutes,
} from "./AddNoteDate";

export function AddNote() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [noteList, setNoteList] = useState<INote[]>([]);

  const d = new Date();
  let day = weekday[d.getDay()];
  let mounth = yearmounth[d.getMonth()];
  let hours = dayhours[d.getHours()];
  let minutes = hoursminutes[d.getMinutes()];

  const addNote = (): void => {
    const newNote = {
      noteName: title,
      noteContent: content,
      noteDay: day,
      noteMounth: mounth,
      noteDate: d.getDate(),
      noteHours: hours,
      noteMinutes: minutes,
    };
    setNoteList([...noteList, newNote]);
    setTitle(" ");
    setContent(" ");
  };

  return (
    <div className="overflow-y-scroll">
      <IonItem>
        <IonLabel color="primary">
          <div className="flex w-full">
            <div className="w-1/2">
              {day}, {d.getDate()} {mounth}
            </div>
            <div className="w-1/2">
              {hours}:{minutes}
            </div>
          </div>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Titlu notiței</IonLabel>
        <IonInput
          color="primary"
          placeholder="Titlu notiței"
          type="text"
          value={title}
          onIonChange={(e) => setTitle(e.detail.value!)}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Conținutul notiței</IonLabel>
        <IonTextarea
          color="primary"
          placeholder="Conținutul notiței"
          value={content}
          onIonChange={(e) => setContent(e.detail.value!)}
        ></IonTextarea>
      </IonItem>
      <div className="pt-4 flex justify-center">
        <IonButton onClick={addNote}>Save</IonButton>
      </div>

      <div className="bg-red-700 text-2xl text-white py-2">
        {noteList.map((note: INote, key: number) => {
          // return <TodoTask key={key} task={task} completeTask={completeTask} />;
          return (
            <div>
              <p>{note.noteName}</p>
              <p>
                {day}, {d.getDate()} {mounth}, {hours}:{minutes}
              </p>
              <p className="text-yellow-400">
                {note.noteContent}
                {/* <button className="text-white">x</button> */}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
