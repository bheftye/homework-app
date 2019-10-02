import {combineReducers} from 'redux-immutable';
import App from './app/index';
import Task from './task/index';
import Course from './course/index';

export default combineReducers({
  app: App,
  task: Task,
  course: Course
});