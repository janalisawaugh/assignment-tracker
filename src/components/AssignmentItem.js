import React from 'react';
// import '../styles.css';

const AssignmentItem = ({ assignment, deleteAssignment, updateAssignment }) => {
  const handleStatusChange = () => {
    const newStatus = assignment.status === 'Done' ? 'Not started' : 'Done';
    updateAssignment({ ...assignment, status: newStatus });
  };

  return (
    <div className="assignment-item card mb-3">
      <div className="card-body">
        <h5 className="card-title">{assignment.subject}</h5>
        <p className="card-text">
          {assignment.assignment} - Status: {assignment.status} - Due: {assignment.dueDate}
        </p>
        <p className="card-text">{assignment.daysLeft} days left</p>
        <button className="btn btn-sm btn-primary" onClick={handleStatusChange}>
          {assignment.status === 'Done' ? 'Mark as Not Started' : 'Mark as Done'}
        </button>
        <button className="btn btn-sm btn-danger ms-2" onClick={() => deleteAssignment(assignment.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AssignmentItem;
