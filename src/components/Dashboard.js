import React from 'react';
import AssignmentItem from './AssignmentItem';


const Dashboard = ({ assignments, deleteAssignment, updateAssignment }) => {
  const incompleteAssignments = assignments.filter((assignment) => assignment.status !== 'done');
  const done = assignments.filter((assignment) => assignment.status === 'done');

  return (
    <div className="dashboard">
      <h2>In Progress</h2>
      {incompleteAssignments.length ===  0 ? <p>No incomplete assignments.</p> :
        incompleteAssignments.map((assignment) => (
            <AssignmentItem
                key={assignment.id}
                assignment={assignment}
                deleteAssignment={deleteAssignment}
                updateAssignment={updateAssignment}
            />
        ))}


      <h2>Done</h2>
      {done.length ===  0 ? <p>No completed assignments.</p> :
        done.map((assignment) => (
            <AssignmentItem
                key={assignment.id}
                assignment={assignment}
                deleteAssignment={deleteAssignment}
                updateAssignment={updateAssignment}
            />
        ))}
    </div>
  );
};

export default Dashboard;
