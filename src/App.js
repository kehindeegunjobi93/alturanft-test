import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Market from "./components/Market";
import Navbar from "./components/Navbar";
import { fetchData } from "./services/fetch-data";
import styles from "./style";

function App() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(false);

  const address = "0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405";

  const getAssets = async () => {
    setLoading(true);
    const data = await fetchData(address);
    setAssets(data.assets);
    setLoading(false);
  };

  useEffect(() => {
    getAssets();
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Market marketData={assets} loadingState={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
