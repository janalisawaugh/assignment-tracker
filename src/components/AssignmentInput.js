import React from 'react';

const Assignmentinput = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="course"
        placeholder="Course Name"
        value={formData.course}
        onChange={handleChange}
        className="form-control mb-3"
      />
      <input
        type="text"
        name="name"
        placeholder="Assignment Name"
        value={formData.name}
        onChange={handleChange}
        className="form-control mb-3"
      />
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        className="form-control mb-3"
      />
    </div>
  );
};

export default AssignmentInput;
