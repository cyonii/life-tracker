import { ADD_RECORD } from './types';

const addRecord = (record) => ({
  type: ADD_RECORD,
  payload: record,
});

export { addRecord }; // eslint-disable-line
