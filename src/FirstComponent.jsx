import React, { useState } from 'react';

export default function Component() {
  const [text, setText] = useState('');
  const [updated, setUpdated] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    setUpdated(text);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Escribe algo..."
      />
      <button onClick={handleButtonClick}>Actualizar</button>
      <p>Texto input: {text}</p>
      <p>Texto Actualizado: {updated}</p>
    </div>
  );
}
