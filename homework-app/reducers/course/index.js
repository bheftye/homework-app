import Immutable from 'immutable';
import { SET_NAME_FORM, SET_COLOR_FORM, CREATE_COURSE } from '../../actions/course';

const initialState = Immutable.fromJS({
  courses: [],
  courseForm:{
    name: '',
    color: '#E82C0C'
  },
  created: false
});

export default (state = initialState, action) => {
  switch (action.type){
    case SET_NAME_FORM:
      return state.setIn(['courseForm', 'name'],action.payload);
    case SET_COLOR_FORM:
      return state.setIn(['courseForm', 'color'], action.payload);
    case CREATE_COURSE:
      let courses = [...state.get('courses')];
      const name = state.get('courseForm').get('name');
      const color = state.get('courseForm').get('color');
      //store course
      const course = {name: name, color: color};
      courses.push(course)
      return state
        .set('courses', course)
        .set('created', true)
        .setIn(['courseForm', 'name'], '')
        .setIn([['courseForm', 'color'], '#E82C0C']);
    default:
      return state;
  }
}