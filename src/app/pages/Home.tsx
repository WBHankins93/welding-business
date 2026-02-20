import { Link } from "react-router";
import { Shield, Zap, CheckCircle, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const services = [
    {
      icon: Shield,
      title: "MIG Welding",
      description: "Precision MIG welding for clean, strong joints on various metals.",
    },
    {
      icon: Zap,
      title: "TIG Welding",
      description: "High-quality TIG welding for detailed work and exotic metals.",
    },
    {
      icon: CheckCircle,
      title: "Fabrication",
      description: "Custom metal fabrication tailored to your specific needs.",
    },
    {
      icon: Award,
      title: "Repair Services",
      description: "Expert repair services for damaged metal structures and equipment.",
    },
  ];

  const features = [
    "Certified & Licensed Welders",
    "20+ Years Combined Experience",
    "Competitive Pricing",
    "Quick Turnaround Time",
    "Mobile Welding Available",
    "Quality Guaranteed",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1582649831749-e2d634f55cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwc3BhcmtzJTIwbWV0YWwlMjB3b3JrfGVufDF8fHx8MTc3MTUzMzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Welding sparks"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Expert Welding Services You Can Trust
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed">
              Professional welding and metal fabrication for commercial, industrial, and residential projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/booking"
                className="bg-[#d4af37] hover:bg-[#fbbf24] text-[#0a0a0a] px-10 py-4 rounded-lg text-center font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Schedule Service
              </Link>
              <Link
                to="/services"
                className="border-2 border-white hover:bg-white hover:text-[#0a0a0a] px-10 py-4 rounded-lg text-center font-semibold transition-all duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0a0a0a]">Our Services</h2>
            <p className="text-xl text-[#4a5568] max-w-2xl mx-auto">
              We offer a comprehensive range of welding and fabrication services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37]/30"
                >
                  <div className="bg-[#fef3c7] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="size-7 text-[#d4af37]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0a0a0a]">{service.title}</h3>
                  <p className="text-[#4a5568] leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-block bg-[#d4af37] hover:bg-[#fbbf24] text-[#0a0a0a] px-10 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#1a1f2e] text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why Choose DJN Services LLC?
              </h2>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                With over two decades of combined experience, we've built our reputation
                on quality workmanship, reliability, and customer satisfaction. We take
                pride in every project, no matter the size.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="size-6 text-[#d4af37] flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
              <div>
                <Link
                  to="/about"
                  className="inline-block border-2 border-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] text-[#d4af37] px-10 py-4 rounded-lg font-semibold transition-all duration-200"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745448797901-2a4c9d9af1c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MTU1ODExOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Industrial welding workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#d4af37] text-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-[#1a1f2e]">
            Contact us today for a free quote or to schedule your welding service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-[#0a0a0a] text-[#d4af37] hover:bg-[#1a1f2e] px-10 py-4 rounded-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Book an Appointment
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#d4af37] px-10 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
