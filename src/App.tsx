import FeatureSection from "./components/Feature/FeatureSection";
import HeaderContent from "./components/Header/HeaderContent";
import HeaderSection from "./components/Header/HeaderSection";
import ProductsSection from "./components/Products/ProductsSection";

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
      <>
        <ProductsSection />
      </>
    </div>
  );
};

export default App;
