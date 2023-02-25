import { render, screen, fireEvent } from '@testing-library/react';

import App from "./App";

test('button has correct initial color, and update when clicked', () => {
  // const { container } = render(<App />);
  // logRoles(container);

  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions of checkbox and button', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('when checkbox is checked, button should be disabbled', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: "Change to blue" });
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);

  expect(colorButton).toBeDisabled();
  expect(checkbox).toBeChecked();

  fireEvent.click(checkbox);

  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
})