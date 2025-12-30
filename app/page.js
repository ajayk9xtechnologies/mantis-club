import HeroVideo from "./components/homeSection/Hero";
import StorySection from "./components/homeSection/StorySection";
import HorizontalScroll from "./components/homeSection/HorizontalScroll";

import ClubIntro from "./components/homeSection/ClubIntro";
import Contact from "./components/homeSection/Contact";
import NightClub from "./components/homeSection/NightClub";
export default function Home() {
  return (
    <>
      <HeroVideo />
      <ClubIntro />
      <StorySection />
      <HorizontalScroll />
      <NightClub />
      <Contact />
    </>
  );
}
