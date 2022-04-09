import {useState} from 'react';
import {Child} from '../child/Child';

export const Parent = () => {
  const [name, setName] = useState ('');

  const handleNameChange = e => {
    setName ('Vasile');
  };

  return (
    <div className="text-green-600 text-2xl font-bold flex-col">
      <p>Parent</p>
      <div className="text-red-600 py-2 pl-3">Name</div>
      <form>
        <input
          className="bg-gray-500 text-white py-2 pl-3"
          placeholder="Introdu textul tau"
          name="InI"
        />
        <button onClick={handleNameChange}>Save</button>
      </form>
      <p className="pl-3">
        <Child name={name} />
      </p>
    </div>
  );
};
