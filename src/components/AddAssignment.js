import React, { useState } from 'react';
import AssignmentInput from './AssignmentInput';

const AddAssignment = ({ onSave, onClose }) => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    course: '',
    name: '',
    status: 'not started',
    dueDate: '',
    daysLeft: '',
  });

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <AssignmentInput formData={formData} setFormData={setFormData} />
        <button className="btn btn-success" onClick={handleSubmit}>
          Save
        </button>
        <button className="btn btn-danger" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AddAssignment;
