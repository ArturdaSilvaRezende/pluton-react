import Header from './components/Header';

//Main Contents
import Carousel from './components/Carousel';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Client from './components/Clients';
import OurClients from './components/OurClients';
import Price from './components/Price';

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
        <OurClients />
        <Price />
      </main>
    </>
  );
};

export default App;
