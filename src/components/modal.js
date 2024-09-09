import React from 'react';
import '../styles/modal.css';
import SegmentForm from './SegmentForm';
import Button from '../common/components/Button';

const Modal = ({ onClose, onSave }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Saving Segment</h2>
        <SegmentForm onSave={onSave} />
        <div className="modal-actions">
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
