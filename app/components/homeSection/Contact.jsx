import SectionTitle from "../SectionTitle";
import MantisLocation from "../location/MantisLocation";
 
export default function Contact() {
  return (
    <section className="py-20 bg-black/95 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8db98]/20 via-transparent to-black/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
 
       <SectionTitle title="Find" subtitle="Mantis" description="Emirates Financial Towers, DIFC" />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Interactive Map */} 
          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-[#f8db98]/20 bg-black/50 backdrop-blur-sm">
           <MantisLocation />
          </div>

          {/* Location Details */}
          <div className="space-y-8 lg:pl-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-[#f8db98]">
                DIFC, Dubai
              </h3>
              <div className="space-y-1 paragraph_three leading-relaxed">
                <p>Emirates Financial Towers</p>
                <p>Podium Level</p>
                <p>Dubai International Financial Centre (DIFC)</p>
                <p>Dubai, United Arab Emirates</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#f8db98]/30">
              <div>
                <h4 className="text-xl font-light mb-3 opacity-90">Hours</h4>
                <div className="text-lg space-y-1 text-white/70">
                  <p>Tuesday – Sunday</p>
                  <p className="text-[#f8db98] font-medium">10:30 PM – 4:00 AM</p>
                  <p className="text-sm opacity-60">Monday: Closed</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-light mb-3 opacity-90">Contact</h4>
                <p className="text-lg">
                  <a 
                    href="tel:+971565607007" 
                    className="hover:text-[#f8db98] underline decoration-[#f8db98]/50 transition"
                  >
                    +971 56 560 7007
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://www.google.com/maps/place/Mantis+Dubai/@25.2085919,55.2765573,17z/data=!4m14!1m7!3m6!1s0x3e5f4350964d475f:0xa7f393ce40dae0b6!2sMantis+Dubai!8m2!3d25.2085919!4d55.2765573!16s%2Fg%2F11gk5gt2my!3m5!1s0x3e5f4350964d475f:0xa7f393ce40dae0b6!8m2!3d25.2085919!4d55.2765573!16s%2Fg%2F11gk5gt2my?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-5 bg-[#f8db98] text-black font-semibold text-lg rounded-2xl hover:bg-[#f8db98]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}