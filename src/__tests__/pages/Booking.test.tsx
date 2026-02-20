import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Booking } from '../../app/pages/Booking';

// Mock console.log to avoid noise in tests
const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('Booking Page', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  afterEach(() => {
    consoleSpy.mockClear();
  });

  it('should render booking form', () => {
    render(<Booking />);
    expect(screen.getByText('Book Your Service')).toBeInTheDocument();
    expect(screen.getByText('Schedule Your Service')).toBeInTheDocument();
  });

  it('should render all form fields', () => {
    render(<Booking />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/service type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/preferred date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/preferred time slot/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project description/i)).toBeInTheDocument();
  });

  it('should require all mandatory fields', () => {
    render(<Booking />);
    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const phoneInput = screen.getByLabelText(/phone number/i);
    const serviceSelect = screen.getByLabelText(/service type/i);
    const projectSelect = screen.getByLabelText(/project type/i);
    const locationInput = screen.getByLabelText(/project location/i);
    const dateInput = screen.getByLabelText(/preferred date/i);
    const timeSelect = screen.getByLabelText(/preferred time slot/i);
    const descriptionTextarea = screen.getByLabelText(/project description/i);

    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(phoneInput).toBeRequired();
    expect(serviceSelect).toBeRequired();
    expect(projectSelect).toBeRequired();
    expect(locationInput).toBeRequired();
    expect(dateInput).toBeRequired();
    expect(timeSelect).toBeRequired();
    expect(descriptionTextarea).toBeRequired();
  });

  it('should update form fields when user types', async () => {
    render(<Booking />);
    
    const nameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email address/i) as HTMLInputElement;
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    
    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
  });

  it('should validate email format', () => {
    render(<Booking />);
    const emailInput = screen.getByLabelText(/email address/i);
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('should validate phone format', () => {
    render(<Booking />);
    const phoneInput = screen.getByLabelText(/phone number/i);
    expect(phoneInput).toHaveAttribute('type', 'tel');
  });

  it('should have minimum date set to today', () => {
    render(<Booking />);
    const dateInput = screen.getByLabelText(/preferred date/i) as HTMLInputElement;
    const today = new Date().toISOString().split('T')[0];
    expect(dateInput).toHaveAttribute('min', today);
  });

  it('should display all service options', () => {
    render(<Booking />);
    const serviceSelect = screen.getByLabelText(/service type/i);
    expect(serviceSelect).toBeInTheDocument();
    
    // Check for service options
    expect(screen.getByText('MIG Welding')).toBeInTheDocument();
    expect(screen.getByText('TIG Welding')).toBeInTheDocument();
    expect(screen.getByText('Mobile Welding')).toBeInTheDocument();
  });

  it('should display all project type options', () => {
    render(<Booking />);
    const projectSelect = screen.getByLabelText(/project type/i);
    expect(projectSelect).toBeInTheDocument();
    
    // Check for project type options
    expect(screen.getByText('Residential')).toBeInTheDocument();
    expect(screen.getByText('Commercial')).toBeInTheDocument();
    expect(screen.getByText('Industrial')).toBeInTheDocument();
  });

  it('should display all time slot options', () => {
    render(<Booking />);
    const timeSelect = screen.getByLabelText(/preferred time slot/i);
    expect(timeSelect).toBeInTheDocument();
    
    // Check for time slot options
    expect(screen.getByText('8:00 AM - 10:00 AM')).toBeInTheDocument();
    expect(screen.getByText('10:00 AM - 12:00 PM')).toBeInTheDocument();
  });

  it('should submit form with valid data', async () => {
    const user = userEvent.setup();
    render(<Booking />);
    
    // Fill in form
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '555-123-4567' } });
    fireEvent.change(screen.getByLabelText(/project location/i), { target: { value: '123 Main St' } });
    fireEvent.change(screen.getByLabelText(/project description/i), { target: { value: 'Test project' } });
    
    // Select dropdowns
    await user.selectOptions(screen.getByLabelText(/service type/i), 'MIG Welding');
    await user.selectOptions(screen.getByLabelText(/project type/i), 'Residential');
    await user.selectOptions(screen.getByLabelText(/preferred time slot/i), '8:00 AM - 10:00 AM');
    
    // Set date (future date)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    fireEvent.change(screen.getByLabelText(/preferred date/i), { target: { value: dateStr } });
    
    // Submit form
    const submitButton = screen.getByRole('button', { name: /submit booking request/i });
    await user.click(submitButton);
    
    // Check that form was submitted
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Booking submitted:', expect.objectContaining({
        name: 'John Doe',
        email: 'john@example.com',
      }));
    });
  });

  it('should show success message after submission', async () => {
    const user = userEvent.setup();
    render(<Booking />);
    
    // Fill in minimal required fields
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '555-123-4567' } });
    fireEvent.change(screen.getByLabelText(/project location/i), { target: { value: '123 Main St' } });
    fireEvent.change(screen.getByLabelText(/project description/i), { target: { value: 'Test' } });
    
    await user.selectOptions(screen.getByLabelText(/service type/i), 'MIG Welding');
    await user.selectOptions(screen.getByLabelText(/project type/i), 'Residential');
    await user.selectOptions(screen.getByLabelText(/preferred time slot/i), '8:00 AM - 10:00 AM');
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    fireEvent.change(screen.getByLabelText(/preferred date/i), { target: { value: tomorrow.toISOString().split('T')[0] } });
    
    await user.click(screen.getByRole('button', { name: /submit booking request/i }));
    
    await waitFor(() => {
      expect(screen.getByText('Booking Request Received!')).toBeInTheDocument();
      expect(screen.getByText(/thank you for choosing/i)).toBeInTheDocument();
    });
  });

  it('should reset form after timeout', { timeout: 10000 }, async () => {
    vi.useFakeTimers();
    
    try {
      render(<Booking />);
      
      // Fill and submit form using fireEvent (faster with fake timers)
      fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '555-123-4567' } });
      fireEvent.change(screen.getByLabelText(/project location/i), { target: { value: '123 Main St' } });
      fireEvent.change(screen.getByLabelText(/project description/i), { target: { value: 'Test' } });
      
      fireEvent.change(screen.getByLabelText(/service type/i), { target: { value: 'MIG Welding' } });
      fireEvent.change(screen.getByLabelText(/project type/i), { target: { value: 'Residential' } });
      fireEvent.change(screen.getByLabelText(/preferred time slot/i), { target: { value: '8:00 AM - 10:00 AM' } });
      
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      fireEvent.change(screen.getByLabelText(/preferred date/i), { target: { value: tomorrow.toISOString().split('T')[0] } });
      
      const submitButton = screen.getByRole('button', { name: /submit booking request/i });
      fireEvent.click(submitButton);
      
      // Run pending timers to trigger state update
      act(() => {
        vi.runOnlyPendingTimers();
      });
      
      expect(screen.getByText('Booking Request Received!')).toBeInTheDocument();
      
      // Fast-forward time for form reset (5000ms)
      act(() => {
        vi.advanceTimersByTime(5000);
        vi.runOnlyPendingTimers();
      });
      
      await waitFor(() => {
        expect(screen.queryByText('Booking Request Received!')).not.toBeInTheDocument();
        expect(screen.getByLabelText(/full name/i)).toHaveValue('');
      });
    } finally {
      vi.useRealTimers();
    }
  });

  it('should render emergency service CTA', () => {
    render(<Booking />);
    expect(screen.getByText(/need emergency service/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /call now/i })).toBeInTheDocument();
  });

  it('should have emergency service phone link', () => {
    render(<Booking />);
    const emergencyLink = screen.getByRole('link', { name: /call now/i });
    expect(emergencyLink).toHaveAttribute('href', 'tel:5551234567');
  });
});
