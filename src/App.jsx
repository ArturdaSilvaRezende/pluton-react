import Header from './components/Header';
import Carousel from './components/Carousel';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Client from './components/Clients';
import OurClients from './components/OurClients';
import Price from './components/Price';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import BtnBackToTop from './components/BtnBackToTop';

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <main>
        <Services />
        <Portfolio />
        <About />
        <Client />
        <OurClients />
        <Price />
        <ContactUs />
      </main>
      <Footer />
      <BtnBackToTop />
    </>
  );
};

export default App;
