import { useState, ChangeEvent, FormEventHandler } from "react";
import { IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";
import { DateTimeReact } from "../date-time-react/DateTimeReact";
import { DatetimeOptions } from "@ionic/core";

interface INote {
  noteName: string;
  noteContent: string;
}

export function AddNote({ onSubmit }) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [noteList, setNoteList] = useState<INote[]>([]);
  // const [today, setToday] = useState(DateTimeReact);

  const addNote = (): void => {
    const newNote = { noteName: title, noteContent: content };

    onSubmit({ noteList });
    // setTitle(" ");
    // setContent(" ");
  };

  return (
    <div>
      <IonItem>
        <IonLabel position="stacked">Titlu notiței</IonLabel>
        <IonInput
          placeholder="Titlu notiței"
          type="text"
          value={title}
          onIonChange={(e) => setTitle(e.detail.value!)}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Conținutul notiței</IonLabel>
        <IonInput
          placeholder="Conținutul notiței"
          value={content}
          onIonChange={(e) => setContent(e.detail.value!)}
        ></IonInput>
      </IonItem>
      <div className="pt-4 flex justify-center">
        <IonButton onClick={addNote}>Save</IonButton>
      </div>

      <div className="bg-red-700 text-2xl text-white flex justify-center py-2">
        {noteList.map((note: INote, key: number) => {
          // return <TodoTask key={key} task={task} completeTask={completeTask} />;
          return (
            <div>
              <div>
                <span className="bg-gray-800 text-white">
                  {new Date().getFullYear()}||
                  {new Date().getDate()}||
                  {new Date().getMonth()}||
                  {new Date().getHours()}:{new Date().getMinutes()}:
                  {new Date().getSeconds()}
                </span>
                <span>{note.noteName}</span> <span>|</span>
                <span className="text-yellow-400">{note.noteContent}</span>
                <button>x</button>
              </div>
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
}
