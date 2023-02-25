import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SummaryForm from "../summary/SummaryForm.jsx";

test('initial state of checkbox, and update when clicked', async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    const confirmButton = screen.getByRole('button', { name: /confirm order/i });
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();

    await user.click(checkbox)

    expect(checkbox).toBeChecked();
    expect(confirmButton).toBeEnabled();
})