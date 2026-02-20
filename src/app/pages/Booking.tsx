import { useState } from "react";
import { Calendar, Clock, CheckCircle } from "lucide-react";

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    projectType: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    console.log("Booking submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        projectType: "",
        date: "",
        time: "",
        location: "",
        description: "",
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    "MIG Welding",
    "TIG Welding",
    "Stick Welding",
    "Custom Fabrication",
    "Mobile Welding",
    "Structural Welding",
    "Repair Services",
    "Other",
  ];

  const projectTypes = [
    "Residential",
    "Commercial",
    "Industrial",
    "Automotive",
    "Agricultural",
    "Emergency Repair",
  ];

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0a0a0a] text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Book Your Service</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
              Schedule your welding service online. We'll contact you within 24 hours to
              confirm your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CheckCircle className="size-10 sm:size-12 text-green-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Booking Request Received!</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">
                Thank you for choosing DJN Services LLC.
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                We've received your booking request and will contact you within 24 hours
                to confirm your appointment and discuss your project details.
              </p>
              <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-[#fef3c7] rounded-xl border border-[#d4af37]/30">
                <p className="text-gray-700 text-sm sm:text-base">
                  <strong>What's next?</strong> Our team will review your request and
                  reach out to confirm the date, time, and provide a detailed quote for
                  your project.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-14 rounded-xl shadow-xl border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#0a0a0a]">Schedule Your Service</h2>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Personal Information */}
                <div className="border-b pb-4 sm:pb-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium text-sm sm:text-base">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium text-sm sm:text-base">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <label htmlFor="phone" className="block mb-2 font-medium text-sm sm:text-base">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Service Details */}
                <div className="border-b pb-4 sm:pb-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Service Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="serviceType" className="block mb-2 font-medium text-sm sm:text-base">
                        Service Type *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block mb-2 font-medium text-sm sm:text-base">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <label htmlFor="location" className="block mb-2 font-medium text-sm sm:text-base">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
                      placeholder="Address or location description"
                    />
                  </div>
                </div>

                {/* Preferred Date & Time */}
                <div className="border-b pb-4 sm:pb-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Preferred Date & Time</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="date" className="block mb-2 font-medium text-sm sm:text-base">
                        <Calendar className="inline size-3 sm:size-4 mr-1" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block mb-2 font-medium text-sm sm:text-base">
                        <Clock className="inline size-3 sm:size-4 mr-1" />
                        Preferred Time Slot *
                      </label>
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    * This is a preferred date and time. We'll confirm availability when
                    we contact you.
                  </p>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="description" className="block mb-2 font-medium text-sm sm:text-base">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-sm sm:text-base"
                    placeholder="Please describe your welding project, including materials, dimensions, and any specific requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#d4af37] hover:bg-[#fbbf24] text-[#0a0a0a] py-3 sm:py-4 rounded-lg transition-all duration-200 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  Submit Booking Request
                </button>

                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  By submitting this form, you agree to be contacted by DJN Services LLC
                  regarding your booking request.
                </p>
              </form>
            </div>
          )}

          {/* Additional Information */}
          {!submitted && (
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-[#f7f8fa] p-6 sm:p-8 rounded-xl border border-gray-100 shadow-md">
                <h3 className="font-bold mb-2 text-sm sm:text-base">Quick Response</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  We'll contact you within 24 hours to confirm your appointment.
                </p>
              </div>
              <div className="bg-[#f7f8fa] p-6 sm:p-8 rounded-xl border border-gray-100 shadow-md">
                <h3 className="font-bold mb-2 text-sm sm:text-base">Free Estimates</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  All bookings include a free, no-obligation quote.
                </p>
              </div>
              <div className="bg-[#f7f8fa] p-6 sm:p-8 rounded-xl border border-gray-100 shadow-md">
                <h3 className="font-bold mb-2 text-sm sm:text-base">Flexible Scheduling</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  We work around your schedule to minimize disruption.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Emergency Service CTA */}
      {!submitted && (
        <section className="bg-[#d4af37] text-[#0a0a0a] py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Need Emergency Service?</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-[#1a1f2e] px-4">
              For urgent welding repairs, call us directly at (555) 123-4567
            </p>
            <a
              href="tel:5551234567"
              className="inline-block bg-[#0a0a0a] text-[#d4af37] hover:bg-[#1a1f2e] px-8 sm:px-10 py-3 sm:py-4 rounded-lg transition-all duration-200 font-semibold shadow-xl hover:shadow-2xl text-sm sm:text-base"
            >
              Call Now
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
