import Immutable from 'immutable';
const initialState = Immutable.fromJS({
  loading: false
})

export default (state = initialState, action) => {
  switch (action.type){
    default:
      return state;
  }
}
