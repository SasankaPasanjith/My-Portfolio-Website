
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Technologies } from "./components/Technologies/Technologies";

function App() {
  return <div className={styles.App}>
  <Navbar/>
  <Hero/>
  <About/>
  <Technologies/>
    </div>
}

export default App;
