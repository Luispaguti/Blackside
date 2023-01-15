import styles, { layout } from '../style';
import CoachCard from "./CoachCard";
import { feedback } from "../constant/index";

const Coach = () => {
  return (
  <section id="equipo" className={`${styles.flexEvenly} flex-col relative bg-black`}>
    <div/>
    <div className="flex flex-wrap sm:justify-evenly justify-center w-full feedback-container relative z-[1]"
    data-aos='fade-right'
    data-aos-delay='600'>
      {feedback.map((card) => <CoachCard key={card.id} {...card} />)}
    </div>

  </section>
  )
}

export default Coach