import { Link, Outlet, useLocation } from "react-router";
import { Menu, X, Flame } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="bg-[#0a0a0a] text-white sticky top-0 z-50 shadow-xl border-b border-[#1a1f2e]/20">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-[#d4af37] p-2.5 rounded-lg shadow-lg group-hover:bg-[#fbbf24] transition-colors">
                <Flame className="size-6 text-[#0a0a0a]" />
              </div>
              <span className="text-xl font-bold tracking-tight">DJN Services LLC</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-[#d4af37] border-b-2 border-[#d4af37] pb-1"
                      : "text-gray-300 hover:text-[#d4af37]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="bg-[#d4af37] hover:bg-[#fbbf24] text-[#0a0a0a] px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#d4af37] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-[#1a1f2e]/30">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-[#d4af37] text-[#0a0a0a] font-semibold"
                      : "text-gray-300 hover:bg-[#1a1f2e] hover:text-[#d4af37]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-[#d4af37] hover:bg-[#fbbf24] text-[#0a0a0a] px-4 py-3 rounded-lg transition-colors text-center font-semibold shadow-lg"
              >
                Book Now
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white mt-16 border-t border-[#1a1f2e]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#d4af37] p-2.5 rounded-lg shadow-lg">
                  <Flame className="size-6 text-[#0a0a0a]" />
                </div>
                <span className="text-xl font-bold">DJN Services LLC</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional welding services for all your metal fabrication needs.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-[#d4af37]">Quick Links</h3>
              <div className="space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-gray-400 hover:text-[#d4af37] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-[#d4af37]">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <p className="hover:text-[#d4af37] transition-colors duration-200">Phone: (555) 123-4567</p>
                <p className="hover:text-[#d4af37] transition-colors duration-200">Email: info@djnservicesllc.com</p>
                <p>Hours: Mon-Fri, 8AM-6PM</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#1a1f2e]/30 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} DJN Services LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
