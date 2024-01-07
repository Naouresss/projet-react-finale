// reducer.test.js
import reducer from './reducer';

test('reducer handles SET_USERS action', () => {
  const initialState = { users: [], searchTerm: '' };
  const action = { type: 'SET_USERS', payload: [{ id: 1, login: 'user1' }] };

  const newState = reducer(initialState, action);

  expect(newState.users).toEqual([{ id: 1, login: 'user1' }]);
});

test('reducer handles SET_SEARCH_TERM action', () => {
  const initialState = { users: [], searchTerm: '' };
  const action = { type: 'SET_SEARCH_TERM', payload: 'search' };

  const newState = reducer(initialState, action);

  expect(newState.searchTerm).toBe('search');
});
