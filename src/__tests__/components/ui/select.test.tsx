import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../app/components/ui/select';

// Note: Radix UI Select has limitations in jsdom environment
// (missing hasPointerCapture, scrollIntoView APIs)
// These tests focus on rendering and basic functionality

describe('Select Component', () => {
  it('should render select trigger', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('should render with value', () => {
    render(
      <Select value="option1">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeInTheDocument();
  });

  it('should support disabled state', () => {
    render(
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    
    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeDisabled();
  });

  it('should have gold focus ring', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Focus test" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    
    const trigger = screen.getByRole('combobox');
    expect(trigger.className).toContain('focus-visible:border-[#d4af37]');
    expect(trigger.className).toContain('focus-visible:ring-[#d4af37]/30');
  });

  it('should render with correct role', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Test" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    
    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('should support required attribute', () => {
    render(
      <Select required>
        <SelectTrigger>
          <SelectValue placeholder="Required" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    
    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveAttribute('aria-required', 'true');
  });
});
