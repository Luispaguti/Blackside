import styles from "./style";
import { Billing,Coach, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Home, About } from "./components";
// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <div>
        <Navbar />
        <Home/>
        <Coach />
        <About/>
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
    </div>
)
}

export default App;