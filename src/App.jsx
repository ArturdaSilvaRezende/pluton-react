import Carousel from './components/Carousel';
import Header from './components/Header';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <Services />
      </main>
    </>
  );
};

export default App;
