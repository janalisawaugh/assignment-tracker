import React from 'react';

const AssignmentItem = ({ assignment, onDelete, onUpdate }) => {
  const handleStatusChange = (e) => {
    onUpdate({ ...assignment, status: e.target.value });
  };

  return (
    <div className="assignment-item d-flex justify-content-between align-items-center">
      <div>
        <strong>{assignment.course}</strong> - {assignment.name}
        <span className={`badge ${assignment.daysLeft < 7 ? 'bg-warning' : 'bg-secondary'}`}>
          {assignment.daysLeft} days left
        </span>
      </div>
      <div>
        <select value={assignment.status} onChange={handleStatusChange}>
          <option value="not started">Not Started</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button className="btn btn-danger ml-2" onClick={() => onDelete(assignment.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AssignmentItem;
