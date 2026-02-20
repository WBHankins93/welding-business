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
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="bg-[#d4af37] p-2 sm:p-2.5 rounded-lg shadow-lg group-hover:bg-[#fbbf24] transition-colors">
                <Flame className="size-5 sm:size-6 text-[#0a0a0a]" />
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight">DJN Services LLC</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
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
                className="bg-[#d4af37] hover:bg-[#fbbf24] text-[#0a0a0a] px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
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
      <footer className="bg-[#0a0a0a] text-white mt-8 sm:mt-12 md:mt-16 border-t border-[#1a1f2e]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="bg-[#d4af37] p-2 sm:p-2.5 rounded-lg shadow-lg">
                  <Flame className="size-5 sm:size-6 text-[#0a0a0a]" />
                </div>
                <span className="text-lg sm:text-xl font-bold">DJN Services LLC</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Professional welding services for all your metal fabrication needs.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 sm:mb-6 text-[#d4af37] text-base sm:text-lg">Quick Links</h3>
              <div className="space-y-2 sm:space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-gray-400 hover:text-[#d4af37] transition-colors duration-200 text-sm sm:text-base"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 sm:mb-6 text-[#d4af37] text-base sm:text-lg">Contact</h3>
              <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <p className="hover:text-[#d4af37] transition-colors duration-200">Phone: (555) 123-4567</p>
                <p className="hover:text-[#d4af37] transition-colors duration-200">Email: info@djnservicesllc.com</p>
                <p>Hours: Mon-Fri, 8AM-6PM</p>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#1a1f2e]/30 text-center text-gray-500 text-sm sm:text-base">
            <p>&copy; {new Date().getFullYear()} DJN Services LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
