import styles from "./App.module.css";

import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  return (
    <div App={styles}>
      <Nav />
      <Carousel />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
