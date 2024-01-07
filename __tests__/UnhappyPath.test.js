// UnhappyPath.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('integration test for unhappy path', async () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Rechercher un utilisateur/i);
  const buttonElement = screen.getByText(/Rechercher/i);

  // Simulate user interaction
  // Leave input empty
  // Trigger search button click
  userEvent.click(buttonElement);

  // Ensure that an error message or appropriate handling is in place
  const errorMessage = await screen.findByText(/Please enter a search term/i);
  expect(errorMessage).toBeInTheDocument();
});

