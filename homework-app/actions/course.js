import { homeworkDB } from '../db'

export const SET_NAME_FORM = 'set_text_form';
export const SET_COLOR_FORM = 'set_color_form';
export const CREATE_COURSE = 'create_course';
export const FETCH_COURSES = 'fetch_courses';
export const FETCH_COURSES_LOADING = 'fetch_courses_loading';
export const FETCH_COURSES_ERROR = 'fetch_courses_error';

export const setText = (text) => {
  return {
    type: SET_NAME_FORM,
    payload: text
  }
}

export const setColor = (color) => {
  return {
    type: SET_COLOR_FORM,
    payload: color
  }
}

export const createCourse = () => {
 return {
   type: CREATE_COURSE
 }
}

export const fetchCourses = () => {
  return (dispatch) => {

  }
}

function fetchCoursesSuccess (courses) {
  return {
    type: FETCH_COURSES,
    payload: courses
  }
}

function fetchCoursesLoading () {
  return {
    type: FETCH_COURSES_LOADING
  }
}

function fetchCoursesError (error) {
  return {
    type: FETCH_COURSES_ERROR,
    payload: error
  }
}