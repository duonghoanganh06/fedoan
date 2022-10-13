import axios from 'axios';

const url = "http://localhost:5000/students";

export const fetchStudents = () => axios.get(url);
export const createStudent = (newStudent) => axios.post(url, newStudent)
export const updateStudent = (id, updatedStudent) => axios.patch(`${url}/${id}`, updatedStudent);