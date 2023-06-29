import Header from './components/Header';
import Carousel from './components/Carousel';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <Services />
        <Portfolio />
        <About />
      </main>
    </>
  );
};

export default App;
