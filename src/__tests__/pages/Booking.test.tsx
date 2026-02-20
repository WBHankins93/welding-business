import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Booking } from '../../app/pages/Booking';

// Mock console.log to avoid noise in tests
const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('Booking Page', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
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

  it('should update form fields when user types', { timeout: 10000 }, async () => {
    const user = userEvent.setup({ delay: null });
    render(<Booking />);
    
    const nameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email address/i) as HTMLInputElement;
    
    await user.clear(nameInput);
    await user.type(nameInput, 'John Doe', { delay: null });
    await user.clear(emailInput);
    await user.type(emailInput, 'john@example.com', { delay: null });
    
    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
  }, { timeout: 10000 });

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

  it('should submit form with valid data', { timeout: 20000 }, async () => {
    const user = userEvent.setup({ delay: null });
    render(<Booking />);
    
    // Fill in form
    await user.clear(screen.getByLabelText(/full name/i));
    await user.type(screen.getByLabelText(/full name/i), 'John Doe', { delay: null });
    await user.clear(screen.getByLabelText(/email address/i));
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com', { delay: null });
    await user.clear(screen.getByLabelText(/phone number/i));
    await user.type(screen.getByLabelText(/phone number/i), '555-123-4567', { delay: null });
    await user.clear(screen.getByLabelText(/project location/i));
    await user.type(screen.getByLabelText(/project location/i), '123 Main St', { delay: null });
    await user.clear(screen.getByLabelText(/project description/i));
    await user.type(screen.getByLabelText(/project description/i), 'Test project', { delay: null });
    
    // Select dropdowns
    await user.selectOptions(screen.getByLabelText(/service type/i), 'MIG Welding');
    await user.selectOptions(screen.getByLabelText(/project type/i), 'Residential');
    await user.selectOptions(screen.getByLabelText(/preferred time slot/i), '8:00 AM - 10:00 AM');
    
    // Set date (future date)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    await user.clear(screen.getByLabelText(/preferred date/i));
    await user.type(screen.getByLabelText(/preferred date/i), dateStr, { delay: null });
    
    // Submit form
    const submitButton = screen.getByRole('button', { name: /submit booking request/i });
    await user.click(submitButton);
    
    // Check that form was submitted
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Booking submitted:', expect.objectContaining({
        name: 'John Doe',
        email: 'john@example.com',
      }));
    }, { timeout: 10000 });
  }, { timeout: 20000 });

  it('should show success message after submission', { timeout: 20000 }, async () => {
    const user = userEvent.setup({ delay: null });
    render(<Booking />);
    
    // Fill in minimal required fields
    await user.clear(screen.getByLabelText(/full name/i));
    await user.type(screen.getByLabelText(/full name/i), 'John Doe', { delay: null });
    await user.clear(screen.getByLabelText(/email address/i));
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com', { delay: null });
    await user.clear(screen.getByLabelText(/phone number/i));
    await user.type(screen.getByLabelText(/phone number/i), '555-123-4567', { delay: null });
    await user.clear(screen.getByLabelText(/project location/i));
    await user.type(screen.getByLabelText(/project location/i), '123 Main St', { delay: null });
    await user.clear(screen.getByLabelText(/project description/i));
    await user.type(screen.getByLabelText(/project description/i), 'Test', { delay: null });
    
    await user.selectOptions(screen.getByLabelText(/service type/i), 'MIG Welding');
    await user.selectOptions(screen.getByLabelText(/project type/i), 'Residential');
    await user.selectOptions(screen.getByLabelText(/preferred time slot/i), '8:00 AM - 10:00 AM');
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    await user.clear(screen.getByLabelText(/preferred date/i));
    await user.type(screen.getByLabelText(/preferred date/i), tomorrow.toISOString().split('T')[0], { delay: null });
    
    await user.click(screen.getByRole('button', { name: /submit booking request/i }));
    
    await waitFor(() => {
      expect(screen.getByText('Booking Request Received!')).toBeInTheDocument();
      expect(screen.getByText(/thank you for choosing/i)).toBeInTheDocument();
    }, { timeout: 10000 });
  }, { timeout: 20000 });

  it('should reset form after timeout', { timeout: 25000 }, async () => {
    const user = userEvent.setup({ delay: null });
    render(<Booking />);
    
    // Fill and submit form
    await user.clear(screen.getByLabelText(/full name/i));
    await user.type(screen.getByLabelText(/full name/i), 'John Doe', { delay: null });
    await user.clear(screen.getByLabelText(/email address/i));
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com', { delay: null });
    await user.clear(screen.getByLabelText(/phone number/i));
    await user.type(screen.getByLabelText(/phone number/i), '555-123-4567', { delay: null });
    await user.clear(screen.getByLabelText(/project location/i));
    await user.type(screen.getByLabelText(/project location/i), '123 Main St', { delay: null });
    await user.clear(screen.getByLabelText(/project description/i));
    await user.type(screen.getByLabelText(/project description/i), 'Test', { delay: null });
    
    await user.selectOptions(screen.getByLabelText(/service type/i), 'MIG Welding');
    await user.selectOptions(screen.getByLabelText(/project type/i), 'Residential');
    await user.selectOptions(screen.getByLabelText(/preferred time slot/i), '8:00 AM - 10:00 AM');
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    await user.clear(screen.getByLabelText(/preferred date/i));
    await user.type(screen.getByLabelText(/preferred date/i), tomorrow.toISOString().split('T')[0], { delay: null });
    
    await user.click(screen.getByRole('button', { name: /submit booking request/i }));
    
    await waitFor(() => {
      expect(screen.getByText('Booking Request Received!')).toBeInTheDocument();
    }, { timeout: 10000 });
    
    // Fast-forward time
    vi.advanceTimersByTime(5000);
    
    await waitFor(() => {
      expect(screen.queryByText('Booking Request Received!')).not.toBeInTheDocument();
      expect(screen.getByLabelText(/full name/i)).toHaveValue('');
    }, { timeout: 5000 });
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
