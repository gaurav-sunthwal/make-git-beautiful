import React, { useState } from 'react';

const SocalMedia = () => {
  const [details, setDetails] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddDetails = () => {
    if (inputValue.trim() !== '') {
      setDetails([...details, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Your Details</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter details"
      />
      <button onClick={handleAddDetails}>Add Details</button>

      <div>
        <h2>Details List</h2>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};



export default SocalMedia;
