import Hero from "@/views/homepage/Hero";
import PerformanceStats from "@/views/homepage/PerformanceStats";
import WorkWithUsSection from "@/views/homepage/WorkWithUs";
import StartEarning from "@/views/homepage/startEarning";
import Ourgames from "@/views/homepage/ourgames";
import Reviews from "@/views/homepage/Reviews";
import HowItWorks from "@/views/homepage/HowItWorks";
export default function Home() {
  return (
    <main className="w-full  overflow-hidden xxl:overflow-visible">
      <Hero />
      <PerformanceStats />
      <HowItWorks />
      <Reviews />
      <Ourgames />
      <WorkWithUsSection />
      <StartEarning />
    </main>
  );
}
