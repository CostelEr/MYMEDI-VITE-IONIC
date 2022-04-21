import {IonInput} from '@ionic/react';

export const Sibling3 = ({onIonChange}) => {
  const handleNameChange = e => {
    onIonChange (e.detail.value);
  };
  return (
    <div>
      <div>Sibling 3</div>
      <IonInput placeholder="Enter name" onIonChange={handleNameChange} />
    </div>
  );
};
