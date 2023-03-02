import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Hero } from './components/Hero';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { Products } from './components/Products';
import { Team } from './components/Team';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Hero />
        <AboutUs />
        <Team />
        <Products />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
