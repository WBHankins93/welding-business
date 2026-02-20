import { describe, it, expect } from 'vitest';
import { router } from '../app/routes';

describe('Routes Configuration', () => {
  it('should have all required routes defined', () => {
    expect(router).toBeDefined();
    expect(router.routes).toBeDefined();
    expect(router.routes.length).toBeGreaterThan(0);
  });

  it('should have a root route with Layout component', () => {
    const rootRoute = router.routes.find(route => route.path === '/');
    expect(rootRoute).toBeDefined();
    // Check if Component exists (it's a function reference)
    expect(rootRoute?.Component || rootRoute?.element).toBeDefined();
  });

  it('should have child routes for all pages', () => {
    const rootRoute = router.routes.find(route => route.path === '/');
    expect(rootRoute).toBeDefined();
    
    const children = rootRoute?.children || [];
    expect(children.length).toBeGreaterThanOrEqual(4);
    
    // Check for index route (home)
    const indexRoute = children.find(r => r.index === true);
    expect(indexRoute).toBeDefined();
    
    // Check for named routes
    const paths = children.map(child => child.path).filter(Boolean);
    expect(paths.length).toBeGreaterThanOrEqual(4);
  });

  it('should have correct route paths', () => {
    const rootRoute = router.routes.find(route => route.path === '/');
    const children = rootRoute?.children || [];
    
    const paths = children.map(child => child.path).filter(Boolean);
    expect(paths).toContain('services');
    expect(paths).toContain('about');
    expect(paths).toContain('contact');
    expect(paths).toContain('booking');
  });
});
