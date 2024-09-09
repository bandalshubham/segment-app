import React, { useState } from 'react';
import Modal from './components/modal.js';
import './App.css';
import Button from './common/components/Button';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveSegment = async (segmentData) => {
    // Send data to the server using the webhook URL
    await fetch('https://webhook.site/3dbe78c9-51a6-424f-a0fe-c8f5236eae35', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(segmentData),
       mode: "no-cors"
    });

    alert('Segment saved successfully!');
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Button onClick={handleOpenModal}>Save Segment</Button>
      {isModalOpen && <Modal onClose={handleCloseModal} onSave={handleSaveSegment} />}
    </div>
  );
}

export default App;
