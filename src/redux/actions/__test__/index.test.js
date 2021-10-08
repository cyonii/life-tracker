import { addRecord } from '../index';

describe('addRecord', () => {
  it('should return the correct action and payload', () => {
    const action = addRecord([{ id: 1, duration: 120, satisfaction: 5 }]);

    expect(action.type).toEqual('ADD_RECORD');
    expect(action.payload).toEqual([{ id: 1, duration: 120, satisfaction: 5 }]);
  });
});
