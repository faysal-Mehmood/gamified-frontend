import Hero from "@/views/sections/Hero";
import PerformanceStats from "@/views/sections/PerformanceStats";
import WorkWithUsSection from "@/views/sections/WorkWithUs";
import StartEarning from "@/views/sections/startEarning";
import Ourgames from "@/views/sections/ourgames";
export default function Home() {
  return (
    <main>
      <Hero />
      <PerformanceStats />
      <Ourgames />
      <WorkWithUsSection />
      <StartEarning />
    </main>
  );
}
