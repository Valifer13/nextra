import Hero from "./Sections/Hero";
import Feature from "./Sections/Feature";
import Service from "./Sections/Service";
import OverviewAreas from "./Sections/OverviewAreas";
import OverviewPlaces from "./Sections/OverviewPlaces";
import Stats from "./Sections/Stats";
import Contact from "./Sections/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Service />
      <OverviewAreas />
      <OverviewPlaces />
      <Stats />
      <Contact />
    </>
  );
}

export default Home;
