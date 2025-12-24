import HorizontalScroll from "./components/HorizontalScroll";
import LenisProvider from "./components/Lenis";
export default function Home() {
  return (
    <>
      <LenisProvider>
        {[1, 2, 3].map((e, id) => (
          <div key={id}>
            <div style={{ minHeight: "100vh" }}>
              {e}. mantis{e}
            </div>
          </div>
        ))}
        <HorizontalScroll />
        {[1, 2, 3].map((e, id) => (
          <div key={id}>
            <div style={{ minHeight: "100vh" }}>
              {e}. mantis{e}
            </div>
          </div>
        ))}
      </LenisProvider>
    </>
  );
}
