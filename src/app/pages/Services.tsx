import { Link } from "react-router";
import { Wrench, Truck, Package, Hammer } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Mobile Welding Services",
      description:
        "Professional on-site welding, cutting, and custom fabrication to meet your project demands.",
      features: [
        "On-site welding services",
        "Cutting and fabrication",
        "Custom metalwork",
        "Professional quality",
      ],
    },
    {
      icon: Truck,
      title: "Hotshot Services",
      description:
        "Reliable, on-demand freight transportation with flexible load capabilities, including 40' flatbed services.",
      features: [
        "On-demand freight transportation",
        "40' flatbed services",
        "Flexible load capabilities",
        "Reliable delivery",
      ],
    },
    {
      icon: Package,
      title: "Trash Removal and Dump Services",
      description:
        "Efficient hauling and disposal of dirt, rock, sand, and waste materials, with load capacities up to 10,000 lbs.",
      features: [
        "Dirt, rock, and sand removal",
        "Waste material disposal",
        "Up to 10,000 lbs capacity",
        "Efficient hauling",
      ],
    },
    {
      icon: Hammer,
      title: "Handyman Services",
      description:
        "Skilled repairs, installations, and custom projects to keep your home or business in top shape.",
      features: [
        "Repairs and installations",
        "Custom projects",
        "Home and business services",
        "Skilled craftsmanship",
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
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="text-[#d4af37] mt-1.5 font-bold">•</span>
                        <span className="text-[#1a1f2e]">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
