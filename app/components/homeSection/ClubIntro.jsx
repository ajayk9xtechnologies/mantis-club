import {
  MantisImageTwevele,
  MantisImageTen,
  MantisImageEleven,
} from "../../common";
 import GsapReveal from "../GsapRevealImage";
const ClubIntro = () => {
  return (
    <section className="relative w-full bg-black py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="mb-10 md:mb-20 text-center lg:text-left">
          <h1 className="text-white leading-tight lg:mb-6">
            <span className="bg-gradient-to-r from-[#6b5a2e] via-[#f8db98] to-[#f8db98] bg-clip-text text-transparent">
              Nightclub in Dubai
            </span>{" "}
            DIFC - Mantis Dubai
          </h1>
        </div>

        {/* First Block - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 md:mb-28 items-center">
          <div className="space-y-6">
            <h2 className="leading-tight text-color-one">
              Where Music, Mood, and Momentum Meet
            </h2>
            <p className="text-gray-300 paragraph_three leading-relaxed">
              Mantis Dubai is a Best nightclub in DIFC where the music flows
              with intention, where the vibe comes from the music, and where the
              energy grows with the music, rather than creating chaos or trying
              to overcompensate with alcohol or other substances.
            </p>
            <p className="text-gray-300 paragraph_three leading-relaxed">
              We create an atmosphere rather than just filling the room with
              noise. Each beat at Premium nightclub DIFC is arranged in a way
              that will maintain the energy of the night without killing the
              conversation.
            </p>
          </div>
          <div className="hidden lg:block  fade-up relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <GsapReveal
              src={MantisImageTwevele}
              alt="Mantis Dubai Dance Floor"
              animation="fade-left"
              className="hidden lg:block h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            />
            
          </div>
        </div>

        {/* Second Block - Image Left, Text Right */}
        <div className="hidden lg:block grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 md:mb-28 items-center">
          <div className="fade-left relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <GsapReveal
              src={MantisImageTen}
              alt="Mantis Dubai Dance Floor"
              animation="fade-left"
              className="hidden lg:block h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            />
          </div>
          <div className="space-y-6 mt-5">
            <p className="text-gray-300 paragraph_three leading-relaxed text-center ">
              Whether you are just getting off work and grabbing a drink or
              working up, Mantis is the place where music-orientated nights,
              eye-catching/elegant cocktails, and an alert/engaged audience come
              together in a smooth, confident, and unapologetically social way.
            </p>
          </div>
        </div>

        {/* Third Block - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="leading-tight text-color-one">
              Top Dance Club in DIFC Dubai —Mantis Dubai
            </h2>
            <p className="text-gray-300 leading-relaxed paragraph_three">
              Located in the middle of Dubai s DIFC, Mantis is one of the best
              clubs to party in DIFC, hosting a variety of music-focused events
              with a fun crowd and a vibe driven more by rhythm than excess.
            </p>
            <p className="text-gray-300 leading-relaxed paragraph_three">
              Through its signature cocktails, beautiful ambiance, and
              thoughtfully designed atmosphere, Mantis creates an intentional
              social scene on nights.
            </p>
            <p className="text-gray-300 leading-relaxed paragraph_three">
              From the first sip of an after-work drink to the last beat of a
              tailored DJ experience, each visit builds its own momentum.
            </p>
          </div>
          <div className="hidden lg:block fade-right relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <GsapReveal
              src={MantisImageEleven}
              alt="Mantis Dubai Atmosphere"
              animation="fade-left"
              className="w-full h-full object-cover"
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubIntro;
