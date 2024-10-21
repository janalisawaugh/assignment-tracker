import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import AddAssignment from './components/AddAssignment';
// import './styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [assignments, setAssignments] = useState([]);
  const [showMode, setShowMode] = useState(false);

  useEffect(() => {
    const storedAssignments = JSON.parse(localStorage.getItem('assignments')) || [];
    setAssignments(storedAssignments);
  }, []);

  const saveAssignments = (updatedAssignments) => {
    setAssignments(updatedAssignments);
    localStorage.setItem('assignments', JSON.stringify(updatedAssignments));
  };

  const addAssignment = (newAssignment) => {
    const newAssignments = [...assignments, newAssignment];
    saveAssignments(newAssignments);
  };

  const deleteAssignment = (id) => {
    const updatedAssignments = assignments.filter(assignment => assignment.id !== id);
    saveAssignments(updatedAssignments);
  };

  const updateAssignment = (updatedAssignment) => {
    const updatedAssignments = assignments.map((assignment) =>
      assignment.id === updatedAssignment.id ? updatedAssignment : assignment
    );
    saveAssignments(updatedAssignments);
  };

  return (
    <div className="app-container">
      <h1 className="text-center">Assignment Tracker</h1>
      <button className="btn btn-primary mb-4" onClick={() => setShowMode(true)}>
        Add Assignment
      </button>

      <Dashboard
        assignments={assignments}
        deleteAssignment={deleteAssignment}
        updateAssignment={updateAssignment}
      />

      {showMode && <AddAssignment onClose={() => setShowMode(false)} onSave={addAssignment} />}
    </div>
  );
};

export default App;
