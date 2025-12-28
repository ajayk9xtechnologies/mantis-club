import HeroVideo from "./components/homeSection/Hero";
import StorySection from "./components/homeSection/StorySection";
import HorizontalScroll from "./components/homeSection/HorizontalScroll";
import LenisProvider from "./components/Lenis";
import ClubIntro from "./components/homeSection/ClubIntro";
import MantisLocation from "./components/location/MantisLocation";
import NightClub from "./components/homeSection/NightClub";
export default function Home() {
  return (
    <>
      <LenisProvider>
        <HeroVideo />
        <ClubIntro />
        <StorySection />
        <HorizontalScroll />
        <NightClub />
        <MantisLocation />
      </LenisProvider>
    </>
  );
}
