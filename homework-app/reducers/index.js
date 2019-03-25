import {combineReducers} from 'redux-immutable';
import App from './app/index';
import Task from './task/index';

export default combineReducers({
  app: App,
  task: Task
});