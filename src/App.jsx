import Header from './components/Header';

//Main Contents
import Carousel from './components/Carousel';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Client from './components/Clients';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <Services />
        <Portfolio />
        <About />
        <Client />
      </main>
    </>
  );
};

export default App;
