import styles, { layout } from '../style';
import CoachCard from "./CoachCard";
import { feedback } from "../constant/index";

const Coach = () => {
  return (
  <section id="equipo" className={`${styles.flexEvenly} flex-col relative bg-black lg:mt-[80px] min-[320px]:mt-[100px] max-[600px]:mt-[100px]`}>
    <div/>
    <div className="flex flex-wrap sm:justify-evenly justify-center w-full feedback-container relative z-[1]"
    data-aos='fade-left'
    data-aos-delay='1200'>
      {feedback.map((card) => <CoachCard key={card.id} {...card} />)}
    </div>

  </section>
  )
}

export default Coach