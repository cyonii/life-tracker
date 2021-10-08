import recordsReducer from '../records';

describe('records reducer', () => {
  it('should return the initial state', () => {
    expect(recordsReducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_RECORDS', () => {
    expect(
      recordsReducer([], {
        type: 'ADD_RECORDS',
        records: [{ id: 1, duration: 120, satisfaction: 8 }],
      }),
    ).toEqual([{ id: 1, duration: 120, satisfaction: 8 }]);
  });
});
