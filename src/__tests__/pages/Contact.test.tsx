import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Contact } from '../../app/pages/Contact';

// Mock console.log to avoid noise in tests
const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('Contact Page', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render contact page header', () => {
    render(<Contact />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText(/get in touch with us/i)).toBeInTheDocument();
  });

  it('should render contact info cards', () => {
    render(<Contact />);
    // These appear as headings (h3)
    const phoneHeadings = screen.getAllByText('Phone').filter(el => el.tagName === 'H3');
    const emailHeadings = screen.getAllByText('Email').filter(el => el.tagName === 'H3');
    const locationHeadings = screen.getAllByText('Location').filter(el => el.tagName === 'H3');
    const hoursHeadings = screen.getAllByText('Business Hours').filter(el => el.tagName === 'H3');
    
    expect(phoneHeadings.length).toBeGreaterThan(0);
    expect(emailHeadings.length).toBeGreaterThan(0);
    expect(locationHeadings.length).toBeGreaterThan(0);
    expect(hoursHeadings.length).toBeGreaterThan(0);
  });

  it('should display contact information', () => {
    render(<Contact />);
    expect(screen.getByText('(555) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('info@djnservicesllc.com')).toBeInTheDocument();
    expect(screen.getAllByText(/123 Industrial Parkway/i).length).toBeGreaterThan(0);
  });

  it('should render contact form', () => {
    render(<Contact />);
    expect(screen.getByText('Send Us a Message')).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('should require mandatory form fields', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/^name/i)).toBeRequired();
    expect(screen.getByLabelText(/^email/i)).toBeRequired();
    expect(screen.getByLabelText(/^subject/i)).toBeRequired();
    expect(screen.getByLabelText(/^message/i)).toBeRequired();
  });

  it('should not require phone field', () => {
    render(<Contact />);
    const phoneInput = screen.getByLabelText(/^phone$/i);
    expect(phoneInput).not.toBeRequired();
  });

  it('should validate email format', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText(/^email/i);
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('should validate phone format', () => {
    render(<Contact />);
    const phoneInput = screen.getByLabelText(/^phone$/i);
    expect(phoneInput).toHaveAttribute('type', 'tel');
  });

  it('should display all subject options', () => {
    render(<Contact />);
    expect(screen.getByText('Request a Quote')).toBeInTheDocument();
    expect(screen.getByText('General Inquiry')).toBeInTheDocument();
    expect(screen.getByText('Service Question')).toBeInTheDocument();
    // Emergency Service appears in both select option and heading, use getAllByText
    expect(screen.getAllByText('Emergency Service').length).toBeGreaterThan(0);
  });

  it('should update form fields when user types', async () => {
    const user = userEvent.setup({ delay: null });
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/^name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/^email/i) as HTMLInputElement;
    const messageTextarea = screen.getByLabelText(/^message/i) as HTMLTextAreaElement;
    
    await user.clear(nameInput);
    await user.type(nameInput, 'John Doe', { delay: null });
    await user.clear(emailInput);
    await user.type(emailInput, 'john@example.com', { delay: null });
    await user.clear(messageTextarea);
    await user.type(messageTextarea, 'Test message', { delay: null });
    
    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(messageTextarea.value).toBe('Test message');
  });

  it('should submit form with valid data', { timeout: 15000 }, async () => {
    const user = userEvent.setup({ delay: null });
    render(<Contact />);
    
    // Fill in form
    await user.clear(screen.getByLabelText(/^name/i));
    await user.type(screen.getByLabelText(/^name/i), 'John Doe', { delay: null });
    await user.clear(screen.getByLabelText(/^email/i));
    await user.type(screen.getByLabelText(/^email/i), 'john@example.com', { delay: null });
    await user.clear(screen.getByLabelText(/^phone$/i));
    await user.type(screen.getByLabelText(/^phone$/i), '555-123-4567', { delay: null });
    await user.clear(screen.getByLabelText(/^message/i));
    await user.type(screen.getByLabelText(/^message/i), 'Test message', { delay: null });
    
    // Select subject
    await user.selectOptions(screen.getByLabelText(/^subject/i), 'quote');
    
    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);
    
    // Check that form was submitted
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', expect.objectContaining({
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'quote',
      }));
    }, { timeout: 10000 });
  }, { timeout: 15000 });

  it('should show success message after submission', { timeout: 15000 }, async () => {
    const user = userEvent.setup({ delay: null });
    render(<Contact />);
    
    // Fill in form
    await user.clear(screen.getByLabelText(/^name/i));
    await user.type(screen.getByLabelText(/^name/i), 'John Doe', { delay: null });
    await user.clear(screen.getByLabelText(/^email/i));
    await user.type(screen.getByLabelText(/^email/i), 'john@example.com', { delay: null });
    await user.clear(screen.getByLabelText(/^message/i));
    await user.type(screen.getByLabelText(/^message/i), 'Test message', { delay: null });
    await user.selectOptions(screen.getByLabelText(/^subject/i), 'quote');
    
    await user.click(screen.getByRole('button', { name: /send message/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();
      expect(screen.getByText(/we'll get back to you/i)).toBeInTheDocument();
    }, { timeout: 10000 });
  }, { timeout: 15000 });

  it('should reset form after timeout', { timeout: 20000 }, async () => {
    const user = userEvent.setup({ delay: null });
    render(<Contact />);
    
    // Fill and submit form
    await user.clear(screen.getByLabelText(/^name/i));
    await user.type(screen.getByLabelText(/^name/i), 'John Doe', { delay: null });
    await user.clear(screen.getByLabelText(/^email/i));
    await user.type(screen.getByLabelText(/^email/i), 'john@example.com', { delay: null });
    await user.clear(screen.getByLabelText(/^message/i));
    await user.type(screen.getByLabelText(/^message/i), 'Test', { delay: null });
    await user.selectOptions(screen.getByLabelText(/^subject/i), 'quote');
    
    await user.click(screen.getByRole('button', { name: /send message/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();
    }, { timeout: 10000 });
    
    // Fast-forward time
    vi.advanceTimersByTime(3000);
    
    await waitFor(() => {
      expect(screen.queryByText(/thank you for your message/i)).not.toBeInTheDocument();
      expect(screen.getByLabelText(/^name/i)).toHaveValue('');
    }, { timeout: 5000 });
  });

  it('should render emergency service section', () => {
    render(<Contact />);
    // Emergency Service appears in both select option and heading
    const emergencyHeadings = screen.getAllByText('Emergency Service').filter(el => el.tagName === 'H3');
    expect(emergencyHeadings.length).toBeGreaterThan(0);
    expect(screen.getByText(/need urgent welding repairs/i)).toBeInTheDocument();
  });

  it('should have emergency service phone link', () => {
    render(<Contact />);
    const emergencyLink = screen.getByRole('link', { name: /call now/i });
    expect(emergencyLink).toHaveAttribute('href', 'tel:5551234567');
  });

  it('should render FAQ section', () => {
    render(<Contact />);
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByText(/do you offer free estimates/i)).toBeInTheDocument();
    expect(screen.getByText(/what areas do you serve/i)).toBeInTheDocument();
  });

  it('should render service area information', () => {
    render(<Contact />);
    expect(screen.getByText('Service Area')).toBeInTheDocument();
    expect(screen.getByText(/we proudly serve/i)).toBeInTheDocument();
  });
});
