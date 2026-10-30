import Banner from "@/components/home/banner";
import Navbar from "@/components/shared/navbar";
import WhyChoose from "@/components/home/why-choose";
import Testimonials from "@/components/home/testimonials";
import CtaBanner from "@/components/home/cta-banner";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <>
      <Banner />
      <WhyChoose />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
