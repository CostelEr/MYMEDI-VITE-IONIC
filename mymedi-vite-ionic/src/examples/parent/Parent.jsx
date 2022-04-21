import {useState} from 'react';
import {Sibling2} from '../sibling2/Sibling2';
import {Sibling3} from '../sibling3/Sibling3';

export const Parent = () => {
  const [name, setName] = useState ('');

  const handleNameChange = name => {
    setName (name);
  };
  return (
    <div className="text-white text-2xl font-bold flex-col bg-green-700">
      <p><i>Parent component</i></p>
      <div className="text-gray-800">
        <Sibling3 onIonChange={handleNameChange} />
        <Sibling2 name={name} />
      </div>
    </div>
  );
};
