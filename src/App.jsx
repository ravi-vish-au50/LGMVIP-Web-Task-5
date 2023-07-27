// app.jsx

import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', marks: 85 },
    { id: 2, name: 'Jane Smith', marks: 78 },
    { id: 3, name: 'Mike Johnson', marks: 92 },
    // Add more students here
  ]);

  const handleMarkChange = (studentId, newMarks) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId ? { ...student, marks: newMarks } : student
      )
    );
  };

  return (
    <div className="app">
      <h1>Student Result Management System</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <input
                  type="number"
                  value={student.marks}
                  onChange={(e) =>
                    handleMarkChange(student.id, parseInt(e.target.value, 10))
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
