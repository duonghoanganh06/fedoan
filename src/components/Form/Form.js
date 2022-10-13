import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createStudent, updateStudent } from '../../api';
import { useSelector } from 'react-redux';

const Form = ({ currentID, setCurrentID }) => {
  const [studentData, setStudentData] = useState({
    studentID: '', fullName: '', class: '', address: ''
  })
  const student = useSelector((state) => currentID ? state.students.find((p) => p._id === currentID) : null);

  useEffect(() => {
    if (student) setStudentData(student)
  }, [student])

  const dispatch = useDispatch();

  const clear = () => {
    setCurrentID(null)
    setStudentData({
      studentID: '', fullName: '', class: '', address: ''
    })
    console.log("student data", studentData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentID) {
      dispatch(updateStudent(currentID, studentData));

    } else {
      dispatch(createStudent(studentData));
    }
    console.log(studentData)
    clear();
  }



  return (
    <div className="right">
      <form action>
        <label htmlFor>Ma So Sinh Vien</label><br />
        <input type="text" value={studentData.studentID} onChange={(e) => setStudentData({ ...studentData, studentID: e.target.value })} /><br />
        <label htmlFor>Ho va Ten</label><br />
        <input type="text" value={studentData.fullName} onChange={(e) => setStudentData({ ...studentData, fullName: e.target.value })} /><br />
        <label htmlFor>Lop</label><br />
        <input type="text" value={studentData.class} onChange={(e) => setStudentData({ ...studentData, class: e.target.value })} /><br />
        <label htmlFor>Dia Chi</label><br />
        <input type="text" value={studentData.address} onChange={(e) => setStudentData({ ...studentData, address: e.target.value })} /><br />
        <input type="button" defaultValue="Clear" onClick={clear} />
        <input type="button" defaultValue="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default Form;