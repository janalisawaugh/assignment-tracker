import React from 'react';
import Assignment from './Assignment';

const AssignmentList = ({ assignments, onDelete, onUpdate }) => {
  return (
    <div>
      {assignments.length ? (
        <Assignment assignments={assignments} onDelete={onDelete} onUpdate={onUpdate} />
      ) : (
        <p>No assignments yet!</p>
      )}
    </div>
  );
};

export default AssignmentList;
