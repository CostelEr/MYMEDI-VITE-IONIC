import {IonInput} from '@ionic/react';

export const Sibling2 = ({name}) => {
  return (
    <div>
      <p>Sibling 2</p>
      <div className="bg-yellow-400 text-red-600">Name is: {name}</div>
    </div>
  );
};
