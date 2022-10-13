import * as api from '../api';

export const getStudents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStudents();

    dispatch({ type: 'FETCH_ALL', payload: data })
  } catch (error) {
    console.log(error.message);
  }
}

export const createStudent = (student) => async (dispatch) => {
  try {
    const { data } = await api.createStudent(student);

    dispatch({ type: 'CREATE', payload: data })
  } catch (error) {
    console.log(error.message);
  }
}

export const updateStudent = (id, student) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent(id, student);

    dispatch({ type: 'UPDATE', payload: data })
  } catch (error) {
    console.log(error.message);
  }
}