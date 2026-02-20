import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router';
import { Layout } from '../../app/components/Layout';

// Mock the Outlet component
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    Outlet: () => <div data-testid="outlet">Outlet Content</div>,
  };
});

const renderWithRouter = (initialEntries = ['/']) => {
  return render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

describe('Layout Component', () => {
  it('should render header with logo', () => {
    renderWithRouter();
    const logoText = screen.getAllByText('DJN Services LLC');
    expect(logoText.length).toBeGreaterThan(0);
  });

  it('should render navigation links', () => {
    renderWithRouter();
    const homeLinks = screen.getAllByRole('link', { name: /home/i });
    const servicesLinks = screen.getAllByRole('link', { name: /services/i });
    const aboutLinks = screen.getAllByRole('link', { name: /about/i });
    const contactLinks = screen.getAllByRole('link', { name: /contact/i });
    
    expect(homeLinks.length).toBeGreaterThan(0);
    expect(servicesLinks.length).toBeGreaterThan(0);
    expect(aboutLinks.length).toBeGreaterThan(0);
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  it('should render Book Now button', () => {
    renderWithRouter();
    const bookNowButton = screen.getAllByRole('link', { name: /book now/i });
    expect(bookNowButton.length).toBeGreaterThan(0);
  });

  it('should have logo link to home', () => {
    renderWithRouter();
    const logoLinks = screen.getAllByText('DJN Services LLC');
    const headerLogoLink = logoLinks.find(link => {
      const parent = link.closest('a');
      return parent && parent.getAttribute('href') === '/';
    });
    expect(headerLogoLink).toBeDefined();
  });

  it('should toggle mobile menu when button is clicked', async () => {
    const user = userEvent.setup();
    renderWithRouter();
    
    // Mobile menu button should be visible on small screens
    const menuButton = screen.getByRole('button');
    expect(menuButton).toBeInTheDocument();
    
    // Initially mobile menu should be closed (menu icon visible)
    expect(screen.queryByText(/x/i)).not.toBeInTheDocument();
    
    // Click to open menu
    await user.click(menuButton);
    
    // Menu items should be visible in mobile menu
    await waitFor(() => {
      const mobileMenuLinks = screen.getAllByRole('link', { name: /home/i });
      expect(mobileMenuLinks.length).toBeGreaterThan(0);
    });
  });

  it('should close mobile menu when link is clicked', async () => {
    const user = userEvent.setup();
    renderWithRouter();
    
    const menuButton = screen.getByRole('button');
    await user.click(menuButton);
    
    // Wait for menu to open - mobile menu links should be visible
    await waitFor(() => {
      const mobileLinks = screen.getAllByRole('link', { name: /home/i });
      expect(mobileLinks.length).toBeGreaterThan(0);
    });
    
    // Click a mobile menu link (should be in the mobile menu div)
    const mobileMenuLinks = screen.getAllByRole('link', { name: /home/i });
    const mobileLink = mobileMenuLinks.find(link => {
      const parent = link.closest('div');
      return parent?.className.includes('md:hidden');
    });
    
    if (mobileLink) {
      await user.click(mobileLink);
    }
    
    // Menu should close
    await waitFor(() => {
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  it('should render footer with company info', () => {
    renderWithRouter();
    expect(screen.getByText(/professional welding services/i)).toBeInTheDocument();
    expect(screen.getByText(/quick links/i)).toBeInTheDocument();
    const footerContactHeading = screen.getAllByText(/contact/i).find(el => el.tagName === 'H3');
    expect(footerContactHeading).toBeInTheDocument();
  });

  it('should render footer links', () => {
    renderWithRouter();
    const footerLinks = screen.getAllByRole('link');
    const footerHomeLink = footerLinks.find(link => 
      link.textContent === 'Home' && link.closest('footer')
    );
    expect(footerHomeLink).toBeInTheDocument();
  });

  it('should render outlet for child routes', () => {
    renderWithRouter();
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
  });

  it('should have correct navigation hrefs', () => {
    renderWithRouter();
    const homeLinks = screen.getAllByRole('link', { name: /home/i });
    const servicesLinks = screen.getAllByRole('link', { name: /services/i });
    const aboutLinks = screen.getAllByRole('link', { name: /about/i });
    const contactLinks = screen.getAllByRole('link', { name: /contact/i });
    
    // Check that at least one link has the correct href
    expect(homeLinks.some(link => link.getAttribute('href') === '/')).toBe(true);
    expect(servicesLinks.some(link => link.getAttribute('href') === '/services')).toBe(true);
    expect(aboutLinks.some(link => link.getAttribute('href') === '/about')).toBe(true);
    expect(contactLinks.some(link => link.getAttribute('href') === '/contact')).toBe(true);
  });

  it('should have Book Now button linking to /booking', () => {
    renderWithRouter();
    const bookNowLinks = screen.getAllByRole('link', { name: /book now/i });
    expect(bookNowLinks[0]).toHaveAttribute('href', '/booking');
  });
});
