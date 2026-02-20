import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../../../app/components/ui/input';

describe('Input Component', () => {
  it('should render input element', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
  });

  it('should handle value changes', async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText('Type here') as HTMLInputElement;
    
    await user.type(input, 'Hello World');
    expect(input.value).toBe('Hello World');
  });

  it('should support different input types', () => {
    const { rerender } = render(<Input type="text" placeholder="Text" />);
    expect(screen.getByPlaceholderText('Text')).toHaveAttribute('type', 'text');
    
    rerender(<Input type="email" placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email');
    
    rerender(<Input type="tel" placeholder="Phone" />);
    expect(screen.getByPlaceholderText('Phone')).toHaveAttribute('type', 'tel');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Input disabled placeholder="Disabled" />);
    const input = screen.getByPlaceholderText('Disabled');
    expect(input).toBeDisabled();
  });

  it('should have gold focus ring', () => {
    render(<Input placeholder="Focus test" />);
    const input = screen.getByPlaceholderText('Focus test');
    expect(input).toHaveClass('focus-visible:border-[#d4af37]');
    expect(input).toHaveClass('focus-visible:ring-[#d4af37]/30');
  });

  it('should support required attribute', () => {
    render(<Input required placeholder="Required" />);
    const input = screen.getByPlaceholderText('Required');
    expect(input).toBeRequired();
  });

  it('should call onChange handler', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Input onChange={handleChange} placeholder="Test" />);
    const input = screen.getByPlaceholderText('Test');
    
    await user.type(input, 'a');
    expect(handleChange).toHaveBeenCalled();
  });

  it('should support aria-invalid for validation', () => {
    render(<Input aria-invalid="true" placeholder="Invalid" />);
    const input = screen.getByPlaceholderText('Invalid');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('should be keyboard accessible', async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Accessible" />);
    const input = screen.getByPlaceholderText('Accessible') as HTMLInputElement;
    
    input.focus();
    expect(input).toHaveFocus();
    
    await user.type(input, 'test');
    expect(input.value).toBe('test');
  });
});
