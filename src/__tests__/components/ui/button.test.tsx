import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../../../app/components/ui/button';

describe('Button Component', () => {
  it('should render button with default variant', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('should render button with gold variant', () => {
    render(<Button variant="gold">Book Now</Button>);
    const button = screen.getByRole('button', { name: /book now/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-[#d4af37]');
  });

  it('should render button with outline variant', () => {
    render(<Button variant="outline">Cancel</Button>);
    const button = screen.getByRole('button', { name: /cancel/i });
    expect(button).toBeInTheDocument();
  });

  it('should handle click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
  });

  it('should not call onClick when disabled', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });
    
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should render with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-8');
    
    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-10');
  });

  it('should support asChild prop for composition', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    const link = screen.getByRole('link', { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('should be keyboard accessible', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Accessible</Button>);
    const button = screen.getByRole('button', { name: /accessible/i });
    
    button.focus();
    expect(button).toHaveFocus();
    
    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    await user.keyboard(' ');
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
