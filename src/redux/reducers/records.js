import { ADD_RECORD } from '../actions/types';

const records = (state = [], action) => {
  switch (action.type) {
    case ADD_RECORD:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default records;
