import Carousel from './components/Carousel';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <Services />
        <Portfolio />
      </main>
    </>
  );
};

export default App;
