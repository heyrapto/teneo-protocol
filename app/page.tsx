import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis>
      <Navbar />
      <Footer />
    </ReactLenis>
  );
}
