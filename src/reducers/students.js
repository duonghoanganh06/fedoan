export default (students = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...students, action.payload];
    case 'UPDATE':
      return students.map((student) => student._id === action.payload._id ? action.payload : student);
    default:
      return students;
  }
}