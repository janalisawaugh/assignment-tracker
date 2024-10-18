import React from 'react';
import AssignmentList from './AssignmentList';

const Dashboard = ({ assignments, deleteAssignment, updateAssignment }) => {
  const notStarted = assignments.filter((assignment) => assignment.status === 'not started');
  const inProgress = assignments.filter((assignment) => assignment.status === 'in progress');
  const done = assignments.filter((assignment) => assignment.status === 'done');

  return (
    <div>
      <h2>In Progress</h2>
      <AssignmentList
        assignments={[...notStarted, ...inProgress]}
        onDelete={deleteAssignment}
        onUpdate={updateAssignment}
      />

      <h2>Done</h2>
      <AssignmentList assignments={done} onDelete={deleteAssignment} onUpdate={updateAssignment} />
    </div>
  );
};

export default Dashboard;
