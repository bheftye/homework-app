import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  source: [],
  loading: false
});

export default (state = initialState, action) => {
  switch (action.type){
    default:
      return state;
  }
}