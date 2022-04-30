import { useState } from "react";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonTextarea,
} from "@ionic/react";

interface INote {
  noteName: string;
  noteContent: string;
  noteDay: string;
  noteMounth: string;
  noteDate: number;
  noteHours: string;
  noteMinutes: string;
}

export function AddNote() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [noteList, setNoteList] = useState<INote[]>([]);

  const weekday = [
    "duminică",
    "luni",
    "marți",
    "miercuri",
    "joi",
    "vineri",
    "sâmbătă",
  ];
  const yearmounth = [
    "ianuarie",
    "februarie",
    "martie",
    "aprilie",
    "mai",
    "iunie",
    "iulie",
    "august",
    "septembrie",
    "octombrie",
    "noiembrie",
    "decembrie",
  ];

  const dayhours = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "00",
  ];

  const hoursminutes = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "00",
  ];

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
