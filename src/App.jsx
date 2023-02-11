import styles from "./style";
import { Coach, Business, Clients, CTA, Footer, Navbar, Stats, Testimonials, Home, About, Carousel, Workouts, Pricing, Community, Faq, Join } from "./components";
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
        <Carousel/>
        <Workouts/>
        <Coach />
        <Community/>
        {/* <About/> */}
        <Pricing/>
        <Faq/>
        <Join/>
        <Clients />
        <CTA />
        <Footer />
    </div>
)
}

export default App;