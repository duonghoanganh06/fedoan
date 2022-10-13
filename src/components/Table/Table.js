import React from 'react';
import Row from './Row/Row';
import { useSelector } from 'react-redux';

const Table = ({ setCurrentID }) => {
  const students = useSelector((state) => state.students);

  console.log(students);
  return (
    <div className="left">
      <table>
        <tbody>
          <tr>
            <th>MSSV</th>
            <th>Ho &amp; Ten</th>
            <th>Lop</th>
            <th>Dia Chi</th>
            <th>Sua</th>
            <th>Xoa</th>
          </tr>
          {
            students.map((student) => (
              <Row key={student._id} student={student} setCurrentID={setCurrentID} />
            ))
          }
        </tbody></table>
    </div>
  );
}

export default Table;