// Integration.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('integration test for happy path', async () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Rechercher un utilisateur/i);
  const buttonElement = screen.getByText(/Rechercher/i);

  // Simulate user interaction
  // Trigger input change
  userEvent.type(inputElement, 'testuser');
  // Trigger search button click
  userEvent.click(buttonElement);

  // Wait for the results
  const resultElement = await screen.findByText(/testuser/i);
  expect(resultElement).toBeInTheDocument();
});

// Add more integration tests for other paths
