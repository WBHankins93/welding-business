import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "Available 24/7 for emergencies"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@djnservicesllc.com", "We respond within 24 hours"],
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Industrial Parkway", "Your City, ST 12345"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 2PM"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0a0a0a] text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Get in touch with us for a free quote or to discuss your welding project
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="text-center">
                  <div className="bg-[#fef3c7] w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md">
                    <Icon className="size-8 sm:size-10 text-[#d4af37]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0a0a0a]">{info.title}</h3>
                  {info.details.map((detail, index) => (
                    <p key={index} className="text-[#4a5568] mb-1 text-sm sm:text-base">
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Form */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#0a0a0a]">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 sm:p-6 rounded-lg text-center">
                  <p className="text-base sm:text-lg font-medium">Thank you for your message!</p>
                  <p className="mt-2 text-sm sm:text-base">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request a Quote</option>
                      <option value="general">General Inquiry</option>
                      <option value="service">Service Question</option>
                      <option value="emergency">Emergency Service</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-semibold text-[#0a0a0a] text-sm sm:text-base">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#d4af37] hover:bg-[#fbbf24] text-[#0a0a0a] py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder & Additional Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-[#f7f8fa] rounded-xl overflow-hidden h-64 sm:h-80 flex items-center justify-center border border-gray-200">
                <div className="text-center text-[#4a5568]">
                  <MapPin className="size-10 sm:size-12 mx-auto mb-2 sm:mb-3 text-[#d4af37]" />
                  <p className="font-semibold text-[#0a0a0a] text-sm sm:text-base">Map Location</p>
                  <p className="text-xs sm:text-sm mt-1">123 Industrial Parkway</p>
                  <p className="text-xs sm:text-sm">Your City, ST 12345</p>
                </div>
              </div>

              <div className="bg-[#fef3c7] p-6 sm:p-8 rounded-xl border border-[#d4af37]/30 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#0a0a0a]">Emergency Service</h3>
                <p className="text-[#1a1f2e] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Need urgent welding repairs? We offer 24/7 emergency service for
                  critical situations.
                </p>
                <a
                  href="tel:5551234567"
                  className="block bg-[#d4af37] hover:bg-[#fbbf24] text-[#0a0a0a] text-center py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Call Now: (555) 123-4567
                </a>
              </div>

              <div className="bg-[#f7f8fa] p-6 sm:p-8 rounded-xl border border-gray-100 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#0a0a0a]">Service Area</h3>
                <p className="text-[#1a1f2e] leading-relaxed">
                  We proudly serve the greater metropolitan area and surrounding
                  counties. Mobile welding services available within 50 miles. Contact
                  us to confirm we serve your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f7f8fa] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#0a0a0a]">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-[#d4af37]/30 transition-all duration-300">
              <h3 className="font-bold mb-3 text-[#0a0a0a] text-lg">Do you offer free estimates?</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Yes! We provide free, no-obligation quotes for all welding and
                fabrication projects.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-[#d4af37]/30 transition-all duration-300">
              <h3 className="font-bold mb-3 text-[#0a0a0a] text-lg">What areas do you serve?</h3>
              <p className="text-[#4a5568] leading-relaxed">
                We serve the greater metropolitan area and offer mobile services within
                50 miles of our location.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-[#d4af37]/30 transition-all duration-300">
              <h3 className="font-bold mb-3 text-[#0a0a0a] text-lg">How quickly can you start?</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Most projects can be scheduled within a few days. Emergency services
                are available 24/7.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-[#d4af37]/30 transition-all duration-300">
              <h3 className="font-bold mb-3 text-[#0a0a0a] text-lg">Are you licensed and insured?</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Yes, we are fully licensed, insured, and our welders are AWS certified.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
