import React from 'react';
import AssignmentItem from './AssignmentItem';

const Assignment = ({ assignments, onDelete, onUpdate }) => {
  return (
    <div className="assignment-list">
      {assignments.map((assignment) => (
        <AssignmentItem
          key={assignment.id}
          assignment={assignment}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default Assignment;
