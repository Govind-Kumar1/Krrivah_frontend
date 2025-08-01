import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "react-toastify";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    country: "IN",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    if (!firstName || !lastName || !email || !phone || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("Contact form filled successfully");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      country: "IN",
    });
  };

  return (
    <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 min-h-screen w-full">
      {/* Left Side */}
      <div className="bg-[#4B3B2B] text-white px-10 py-16 flex flex-col justify-between">
        <div className="space-y-12">
          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-[#D5C7B2] mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-[#FFFFFF]">Let’s make things happen.</h3>
              <p className="text-sm font-semibold text-[#FEFEFC] mb-1">
                Reach out to our team for expert assistance.
              </p>
              <p className="text-sm text-[#FFFFFF]">krrivah@gmail.com</p>
            </div>
          </div>

          <hr className="border-white/20" />

          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#D5C7B2] mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-[#FFFFFF]">Our Headquarters</h3>
              <p className="text-sm text-[#FEFEFC] mb-1 font-semibold">
               Goa Studio
              </p>
              <p className="text-sm leading-relaxed text-[#FFFFFF]">
               
               Near Leoney Resort, Vagator, Anjuna 403509, Goa
                <br />
                House No. 599, Ozran Beach Road, Small Vagator,


              </p>
            </div>
          </div>

          <hr className="border-white/20" />

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-[#D5C7B2] mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-[#FFFFFF]">Call us at</h3>
              <p className="text-sm font-normal mb-1 text-[#FFFFFF]">
                Mon–Fri, 9:00 AM to 5:00 PM
              </p>
              <p className="text-sm">+91-9987690860 | +91-8384082906
</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white px-10 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-[#2B2B2B]">
          SEND US A MESSAGE
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-[#2B2B2B]">
                First name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-[#6D6D6D]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-[#2B2B2B]">
                Last name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-[#6D6D6D]"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-[#2B2B2B]">Email *</label>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-[#6D6D6D]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-[#2B2B2B]">
                Phone number *
              </label>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <select
                  className="px-3 py-2 text-sm bg-white border-r border-gray-300 text-[#2B2B2B]"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option>IN</option>
                  <option>US</option>
                  <option>UK</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 000000 00000"
                  className="flex-1 px-3 py-2 text-sm text-[#6D6D6D]"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2B2B2B]">Message *</label>
            <textarea
              name="message"
              placeholder="Leave us a message..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-[#6D6D6D]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full border border-gray-300 rounded-full py-3 text-sm font-semibold hover:bg-gray-100 text-[#4B3B2B]"
          >
            SEND MESSAGE
          </button>

          <p className="text-xs text-[#4B3B2B]">
            By hitting submit you agree to our{" "}
            <a href="#" className="underline">
              privacy policy
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
