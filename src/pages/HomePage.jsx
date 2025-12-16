import Hero from '../sections/Hero';
import TrustBar from '../sections/TrustBar';
import SafetyBenefits from '../sections/SafetyBenefits';
import Catalog from '../sections/Catalog';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';

const HomePage = () => {
  return (
    <main className="bg-[#13151A]">
      <Hero />
      <TrustBar />
      <SafetyBenefits />
      <Catalog />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default HomePage;