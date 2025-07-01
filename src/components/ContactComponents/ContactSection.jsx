import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left Side */}
      <div className="bg-[#4B3B2B] text-white px-10 py-16 flex flex-col justify-between">
        <div className="space-y-12">
          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-white mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Drop us a line</h3>
              <p className="text-sm text-white/80 mb-1">
                Reach out to our team for expert assistance.
              </p>
              <p className="text-sm">hello@krrivah.com</p>
            </div>
          </div>

          <hr className="border-white/20" />

          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-white mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Our Headquarters</h3>
              <p className="text-sm text-white/80 mb-1">
                Visit us at our headquarters—we’d love to meet you.
              </p>
              <p className="text-sm leading-relaxed">
                #102, 1st Floor, Urban Heights,
                <br />
                Koramangala 5th Block, Bengaluru - 560095
              </p>
            </div>
          </div>

          <hr className="border-white/20" />

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-white mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Call our Experts</h3>
              <p className="text-sm font-medium mb-1">
                Mon–Fri, 9:00 AM to 5:00 PM
              </p>
              <p className="text-sm">+91 9876543210</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white px-10 py-16">
        <h2
          className="text-3xl md:text-4xl font-bold mb-10 text-[#2B2B2B]
"
        >
          SEND US A MESSAGE
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First name *
              </label>
              <input
                type="text"
                placeholder="First name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last name *
              </label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone number *
              </label>
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <select className="px-3 py-2 text-sm bg-white border-r border-gray-300">
                  <option>IN</option>
                </select>
                <input
                  type="tel"
                  placeholder="+91 000000 00000"
                  className="flex-1 px-3 py-2 text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message *</label>
            <textarea
              placeholder="Leave us a message..."
              rows={5}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full border border-gray-300 rounded-full py-3 text-sm font-semibold hover:bg-gray-100"
          >
            SEND MESSAGE
          </button>

          <p className="text-xs text-gray-500">
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