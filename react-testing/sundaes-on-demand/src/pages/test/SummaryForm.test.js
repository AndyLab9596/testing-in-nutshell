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
});

test('popover responds to hover', async () => {
    const user = userEvent.setup();
    render(<SummaryForm/>);
    // popover starts out hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();
    // popover appears on mouseover of checkbox label
    const termAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termAndConditions);
    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();
    // popover disappers when mouse out
    await user.unhover(termAndConditions);
    expect(popover).not.toBeInTheDocument();

})