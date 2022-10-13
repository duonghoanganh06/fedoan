import React from 'react';

const Row = ({ student, setCurrentID }) => {
  return (
    <tr>
      <td>{student.studentID}</td>
      <td>{student.fullName}</td>
      <td>{student.class}</td>
      <td>{student.address}</td>
      <td><button onClick={() => setCurrentID(student._id)}>Sua</button></td>
      <td><button onClick={() => { }}>Xoa</button></td>
    </tr>
  );
}

export default Row;