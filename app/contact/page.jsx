import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import { Mail, MapPin, Phone } from "lucide-react";
import FormField from "../components/forms/FormField";
import bgImage from "../assets/images/gallery/gallery-6.jpeg";
export default function ContactPage() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white pt-32 pb-20 px-4 md:px-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Mantis Contact Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          title="Get in"
          subtitle="Touch"
          description="We'd love to hear from you. Book a table or ask us anything."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-12 items-start">
          {/* Left Column: Contact Info */}
          <div className="space-y-12">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#f8db98]/50 transition-colors duration-300">
              <h3 className="text-3xl font-bold mb-8 text-[#f8db98]">
                Contact Info
              </h3>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#f8db98]/10 text-[#f8db98]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Location</h4>
                    <p className="opacity-80 leading-relaxed paragraph_three">
                      Mantis Dubai, Emirates Financial Towers,
                      <br />
                      Podium Level, DIFC, Dubai, UAE
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#f8db98]/10 text-[#f8db98]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      Booking & Info
                    </h4>
                    <p className="opacity-80 paragraph_three hover:text-[#f8db98] transition-colors">
                      <a href="tel:+971501234567">+971 50 123 4567</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#f8db98]/10 text-[#f8db98]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                    <p className="opacity-80 paragraph_three hover:text-[#f8db98] transition-colors">
                      <a href="mailto:info@mantisdubai.com">
                        info@mantisdubai.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10">
            <h3 className="text-3xl font-bold mb-2">Send an Inquiry</h3>
            <p className="opacity-60 mb-8">
              Fill up the form and our team will get back to you within 24
              hours.
            </p>
            <FormField />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3610.178523316692!2d55.2753239!3d25.1972018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a473689%3A0xc391b1062973523!2sMantis%20Dubai!5e0!3m2!1sen!2sae!4v1709123456789!5m2!1sen!2sae"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </section>
  );
}
