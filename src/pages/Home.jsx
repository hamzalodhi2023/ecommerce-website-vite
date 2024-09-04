import Header from "../components/Header";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeatureProducts from "../components/FeatureProducts";

function Home() {
  return (
    <>
      <Header data={"Hamza Store"} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
}

export default Home;
