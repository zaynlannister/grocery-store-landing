import FeatureSection from "./components/Feature/FeatureSection";
import HeaderContent from "./components/Header/HeaderContent";
import HeaderSection from "./components/Header/HeaderSection";

const App = () => {
  return (
    <div className="my-container">
      <>
        <HeaderSection />
        <HeaderContent />
      </>
      <>
        <FeatureSection />
      </>
    </div>
  );
};

export default App;
