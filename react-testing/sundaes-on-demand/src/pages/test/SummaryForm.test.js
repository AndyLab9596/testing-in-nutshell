import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from "../summary/SummaryForm.jsx";

test('initial state of checkbox, and update when clicked', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    const confirmButton = screen.getByRole('button', { name: /confirm order/i });
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(confirmButton).toBeEnabled();
})