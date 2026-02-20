import { Link } from "react-router";
import { Wrench, Truck, Package, Hammer } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Mobile Welding Services",
      description:
        "Professional on-site welding services delivering high-quality results directly at your location. Ideal for construction, repairs, and custom fabrication projects.",
      techniques: [
        {
          name: "SMAW (Shielded Metal Arc Welding)",
          description: "Durable and versatile for repair and construction.",
        },
        {
          name: "FCAW (Flux-Cored Arc Welding)",
          description: "High-speed and efficient for structural and heavy-duty tasks.",
        },
        {
          name: "GMAW (Gas Metal Arc Welding)",
          description: "Precision welding for fabrication and manufacturing.",
        },
      ],
      additionalOfferings: [
        "Cutting Services: Precise metal cutting for various applications.",
        "Custom Fabrication: Tailored solutions to meet unique specifications.",
      ],
    },
    {
      icon: Truck,
      title: "Hotshot Services",
      description:
        "Fast, on-demand transportation for time-sensitive deliveries. Reliable logistics solutions for industries requiring quick response times.",
      coreOfferings: [
        "Freight Delivery: Construction materials, equipment, and supplies.",
        "Time-Sensitive Loads: Rapid response for urgent deliveries.",
        "Small to Medium Loads: Cost-effective solutions for partial loads.",
      ],
      specializedCapabilities: [
        "40' Flatbed Services: Large, irregularly shaped, or bulky items.",
        "Regional or Long-Distance Coverage: Flexible delivery options.",
        "Compliance: Fully insured and DOT compliant.",
      ],
    },
    {
      icon: Hammer,
      title: "Handyman Services",
      description:
        "Comprehensive handyman services for residential and commercial properties. From minor repairs to major renovations, we handle projects of all sizes with quality craftsmanship.",
      services: [
        "General Repairs: Doors, windows, cabinets, and fixtures.",
        "Installation Services: Fixtures, appliances, and essential upgrades.",
        "Painting and Finishing: Interior and exterior painting services.",
        "Custom Projects: Tailored solutions with quality craftsmanship.",
      ],
    },
    {
      icon: Package,
      title: "Trash Removal/Dump Services",
      description:
        "Efficient on-demand hauling and delivery of materials. Reliable solutions for waste removal, dirt delivery, and material transport across various industries.",
      coreOfferings: [
        "Trash Delivery: Waste and unwanted materials to dump sites.",
        "Dirt, Rock, and Sand Delivery: Material transport to specified locations.",
        "Time-Sensitive Hauling: Quick response for urgent delivery needs.",
        "Flexible Load Sizes: Small to large deliveries accommodated.",
      ],
      specializedCapabilities: [
        "Up to 10,000 lbs per Load: Efficient handling of larger loads.",
        "Regional or Long-Distance Coverage: Local and extended transport options.",
        "Compliance: Fully insured and compliant with environmental regulations.",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1681407979977-ea6060c802f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwc3RlZWx8ZW58MXx8fHwxNzcxNTU4MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Metal fabrication"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Welding, Hotshot, and Dump Services - Your one-stop resource for construction and service needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37]/30"
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="bg-[#fef3c7] p-4 rounded-xl flex-shrink-0 shadow-md">
                      <Icon className="size-8 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-[#0a0a0a]">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-[#4a5568] mb-6 leading-relaxed">{service.description}</p>

                  {/* Welding Techniques */}
                  {service.techniques && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-[#0a0a0a]">Welding Techniques:</h4>
                      <ul className="space-y-3">
                        {service.techniques.map((technique, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#d4af37] mt-1.5 font-bold">•</span>
                            <div>
                              <span className="font-semibold text-[#1a1f2e]">{technique.name}: </span>
                              <span className="text-[#1a1f2e]">{technique.description}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Additional Offerings */}
                  {service.additionalOfferings && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-[#0a0a0a]">Additional Offerings:</h4>
                      <ul className="space-y-3">
                        {service.additionalOfferings.map((offering, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#d4af37] mt-1.5 font-bold">•</span>
                            <span className="text-[#1a1f2e]">{offering}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Core Offerings */}
                  {service.coreOfferings && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-[#0a0a0a]">Core Offerings:</h4>
                      <ul className="space-y-3">
                        {service.coreOfferings.map((offering, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#d4af37] mt-1.5 font-bold">•</span>
                            <span className="text-[#1a1f2e]">{offering}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Specialized Capabilities */}
                  {service.specializedCapabilities && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-[#0a0a0a]">Specialized Capabilities:</h4>
                      <ul className="space-y-3">
                        {service.specializedCapabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#d4af37] mt-1.5 font-bold">•</span>
                            <span className="text-[#1a1f2e]">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Services (for Handyman) */}
                  {service.services && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-[#0a0a0a]">Services:</h4>
                      <ul className="space-y-3">
                        {service.services.map((serviceItem, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#d4af37] mt-1.5 font-bold">•</span>
                            <span className="text-[#1a1f2e]">{serviceItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Book Now Button */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                      to="/booking"
                      className="inline-block bg-[#d4af37] hover:bg-[#fbbf24] text-[#0a0a0a] px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Book now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 md:py-28 bg-[#f7f8fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0a0a0a]">Materials</h2>
            <p className="text-xl text-[#4a5568] max-w-2xl mx-auto">
              We provide a variety of materials for your construction and landscaping needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37]/30">
              <h3 className="text-xl font-bold mb-3 text-[#0a0a0a]">Rock</h3>
              <p className="text-[#1a1f2e] leading-relaxed">
                Durable natural material for construction, landscaping, and drainage. Ideal for foundations, pathways, and decorative applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37]/30">
              <h3 className="text-xl font-bold mb-3 text-[#0a0a0a]">Sand</h3>
              <p className="text-[#1a1f2e] leading-relaxed">
                Versatile material for construction, landscaping, and leveling. Ideal for concrete, paving, and filling applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37]/30">
              <h3 className="text-xl font-bold mb-3 text-[#0a0a0a]">Dirt</h3>
              <p className="text-[#1a1f2e] leading-relaxed">
                Essential material for landscaping, gardening, and leveling. Perfect for filling, grading, and creating healthy soil bases.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37]/30">
              <h3 className="text-xl font-bold mb-3 text-[#0a0a0a]">Mulch</h3>
              <p className="text-[#1a1f2e] leading-relaxed">
                Organic or synthetic material for landscaping and gardening. Ideal for moisture retention, soil temperature regulation, and enhanced curb appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#d4af37] text-[#0a0a0a] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Our Services?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-[#1a1f2e]">
            Get in touch with us today to discuss your project requirements and receive a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-[#0a0a0a] text-[#d4af37] hover:bg-[#1a1f2e] px-10 py-4 rounded-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Schedule Service
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#d4af37] px-10 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
