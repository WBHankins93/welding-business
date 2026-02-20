import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from '../../../app/components/ui/textarea';

describe('Textarea Component', () => {
  it('should render textarea element', () => {
    render(<Textarea placeholder="Enter message" />);
    const textarea = screen.getByPlaceholderText('Enter message');
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('should handle value changes', async () => {
    const user = userEvent.setup();
    render(<Textarea placeholder="Type here" />);
    const textarea = screen.getByPlaceholderText('Type here') as HTMLTextAreaElement;
    
    await user.type(textarea, 'This is a test message');
    expect(textarea.value).toBe('This is a test message');
  });

  it('should support rows attribute', () => {
    render(<Textarea rows={5} placeholder="Multi-line" />);
    const textarea = screen.getByPlaceholderText('Multi-line');
    expect(textarea).toHaveAttribute('rows', '5');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Textarea disabled placeholder="Disabled" />);
    const textarea = screen.getByPlaceholderText('Disabled');
    expect(textarea).toBeDisabled();
  });

  it('should have gold focus ring', () => {
    render(<Textarea placeholder="Focus test" />);
    const textarea = screen.getByPlaceholderText('Focus test');
    expect(textarea).toHaveClass('focus-visible:border-[#d4af37]');
    expect(textarea).toHaveClass('focus-visible:ring-[#d4af37]/30');
  });

  it('should support required attribute', () => {
    render(<Textarea required placeholder="Required" />);
    const textarea = screen.getByPlaceholderText('Required');
    expect(textarea).toBeRequired();
  });

  it('should call onChange handler', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Textarea onChange={handleChange} placeholder="Test" />);
    const textarea = screen.getByPlaceholderText('Test');
    
    await user.type(textarea, 'a');
    expect(handleChange).toHaveBeenCalled();
  });

  it('should support aria-invalid for validation', () => {
    render(<Textarea aria-invalid="true" placeholder="Invalid" />);
    const textarea = screen.getByPlaceholderText('Invalid');
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
  });

  it('should handle multi-line text input', async () => {
    const user = userEvent.setup();
    render(<Textarea placeholder="Multi-line" />);
    const textarea = screen.getByPlaceholderText('Multi-line') as HTMLTextAreaElement;
    
    await user.type(textarea, 'Line 1{Enter}Line 2');
    expect(textarea.value).toContain('Line 1');
    expect(textarea.value).toContain('Line 2');
  });

  it('should be keyboard accessible', async () => {
    const user = userEvent.setup();
    render(<Textarea placeholder="Accessible" />);
    const textarea = screen.getByPlaceholderText('Accessible') as HTMLTextAreaElement;
    
    textarea.focus();
    expect(textarea).toHaveFocus();
    
    await user.type(textarea, 'test');
    expect(textarea.value).toBe('test');
  });
});
