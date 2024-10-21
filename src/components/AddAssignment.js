import React, { useState } from 'react';

const AddAssignment = ({addAssignment}) => {
    const [showModal, setShowModal] = useState(false);
    const [assignment, setAssignment] = useState({
      subject: '',
      assignment: '',
      status: 'Not started',
      startDate: '',
      dueDate: '',
      daysLeft: ''
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addAssignment({ ...assignment, id: Date.now() });
      setShowModal(false);
    };
  
    return (
      <>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add Assignment
        </button>
  
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Course Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={assignment.subject}
                    onChange={(e) => setAssignment({ ...assignment, subject: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Assignment Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={assignment.assignment}
                    onChange={(e) => setAssignment({ ...assignment, assignment: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    value={assignment.status}
                    onChange={(e) => setAssignment({ ...assignment, status: e.target.value })}
                  >
                    <option>Not started</option>
                    <option>In progress</option>
                    <option>Done</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Due Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={assignment.dueDate}
                    onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Save Assignment
                </button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default AddAssignment;