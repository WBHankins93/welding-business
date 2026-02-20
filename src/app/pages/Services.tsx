import { Link } from "react-router";
import { Wrench, Truck, Package, Hammer } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Mobile Welding Services",
      description:
        "Mobile welding services offer on-site solutions for industries and individuals, focusing on flexibility and convenience. Mobile welding combines expertise and convenience, delivering high-quality results directly at client locations. Ideal for construction, repairs, and custom projects.",
      techniques: [
        {
          name: "SMAW (Shielded Metal Arc Welding)",
          description: "Durable, versatile for repair and construction.",
        },
        {
          name: "FCAW (Flux-Cored Arc Welding)",
          description: "High-speed and efficient, ideal for structural and heavy-duty tasks.",
        },
        {
          name: "GMAW (Gas Metal Arc Welding)",
          description: "Precision welding for fabrication and manufacturing.",
        },
      ],
      additionalOfferings: [
        "Cutting Services: Precise metal cutting for various applications.",
        "Custom Fabrication: Tailored solutions to meet unique client specifications.",
      ],
    },
    {
      icon: Truck,
      title: "Hotshot Services",
      description:
        "Hotshot services provide fast, on-demand transportation for time-sensitive deliveries, catering to industries needing quick and reliable logistics. With a commitment to flexibility and reliability, we provide exceptional solutions for critical transportation needs.",
      coreOfferings: [
        "Freight Delivery: Transporting goods like construction materials, equipment, and supplies.",
        "Time-Sensitive Loads: Rapid response for urgent deliveries within tight deadlines.",
        "Small to Medium Loads: Ideal for loads that don't require a full trailer, reducing costs.",
      ],
      specializedCapabilities: [
        "40' Flatbed Services: Perfect for larger, irregularly shaped, or bulky items.",
        "Regional or Long-Distance Coverage: Flexible delivery options tailored to customer needs.",
        "Compliance: Fully insured, adhering to all transportation regulations.",
      ],
    },
    {
      icon: Hammer,
      title: "Handyman Services",
      description:
        "Our handyman services are designed to handle a wide range of projects, ensuring your property is functional, safe, and looking its best. From minor repairs to larger renovations, we offer expertise in various areas. No job is too big or small—whether you're tackling a to-do list or a major project, we're here to help. With our commitment to quality, attention to detail, and exceptional customer service, DJN Services LLC is your trusted partner for all your handyman needs.",
      services: [
        "General Repairs: Fixing doors, windows, cabinets, and more.",
        "Installation Services: Installing fixtures, appliances, and other essential upgrades.",
        "Painting and Finishing: Interior and exterior painting to refresh and enhance your spaces.",
        "Custom Projects: Tailored solutions for unique needs, ensuring quality craftsmanship.",
      ],
    },
    {
      icon: Package,
      title: "Trash Removal/Dump Services",
      description:
        "Our dump services provide efficient, on-demand hauling and delivery of materials, offering reliable and timely solutions for various industries and needs. With a commitment to flexibility and reliability, we provide exceptional hauling and dump services for all your material delivery needs.",
      coreOfferings: [
        "Trash Delivery: Hauling and delivery of waste and unwanted materials to dump sites.",
        "Dirt, Rock, and Sand Delivery: Transporting dirt, rocks, sand, and similar materials to your specified location for disposal.",
        "Time-Sensitive Hauling: Quick and responsive service for urgent delivery or dump tasks.",
        "Flexible Load Sizes: Suitable for both small and large deliveries, accommodating various material volumes.",
      ],
      specializedCapabilities: [
        "Dump Services up to 10,000 lbs per Load: Capable of hauling larger loads with ease and efficiency.",
        "Regional or Long-Distance Coverage: Flexible options for local and extended transport.",
        "Compliance: Fully insured, adhering to all environmental and waste disposal regulations.",
      ],
      materials: [
        {
          name: "Rock",
          description: "Durable, natural material used for construction, landscaping, and drainage. Ideal for foundations, pathways, and decorative applications.",
        },
        {
          name: "Sand",
          description: "Versatile material used in construction, landscaping, and leveling. Ideal for concrete, paving, and filling applications.",
        },
        {
          name: "Dirt",
          description: "Essential material for landscaping, gardening, and leveling. Perfect for filling, grading, and creating healthy soil bases.",
        },
        {
          name: "Mulch",
          description: "Organic or synthetic material used for landscaping and gardening. Ideal for retaining moisture, regulating soil temperature, and enhancing curb appeal.",
        },
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

                  {/* Materials (for Dump Services) */}
                  {service.materials && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-[#0a0a0a]">Materials:</h4>
                      <div className="space-y-4">
                        {service.materials.map((material, idx) => (
                          <div key={idx} className="bg-[#f7f8fa] p-4 rounded-lg border border-gray-200">
                            <h5 className="font-semibold text-[#0a0a0a] mb-2">{material.name}</h5>
                            <p className="text-[#1a1f2e] text-sm">{material.description}</p>
                          </div>
                        ))}
                      </div>
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
