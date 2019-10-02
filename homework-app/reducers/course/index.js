import Immutable from 'immutable';
import { SET_NAME_FORM, SET_COLOR_FORM, CREATE_COURSE, RESTART_CREATED } from '../../actions/course'

const initialState = Immutable.fromJS({
  courses: [{name: 'Cloud Computing', color: '#E82C0C'}],
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
      const course = {name: name, color: color, id: Math.random()};
      courses.push(course)
      return state
        .set('courses', courses)
        .set('created', true)
        .setIn(['courseForm', 'name'], '')
        .setIn([['courseForm', 'color'], '#E82C0C']);
    case RESTART_CREATED:
      return state.set('created', false);
    default:
      return state;
  }
}