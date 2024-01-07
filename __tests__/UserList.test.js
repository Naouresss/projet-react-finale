// UserList.test.js
import { render, screen } from '@testing-library/react';
import UserList from '../src/UserList';

test('renders UserList component', () => {
  render(<UserList />);
  const inputElement = screen.getByPlaceholderText(/Rechercher un utilisateur/i);
  const buttonElement = screen.getByText(/Rechercher/i);

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

