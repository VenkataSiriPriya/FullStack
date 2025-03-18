import React, { useState } from 'react';
import "../../css/Ex9.css"; 

export default function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addStudent = () => {
    if (id && name && phone) {
      setStudents([...students, { id, name, phone }]);
      setId('');
      setName('');
      setPhone('');
    }
  };

  return (
    <div className="container">
      <h2>Student Management</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={addStudent}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td><button onClick={() => setStudents(students.filter((_, i) => i !== index))}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
