import { card } from '../assets/index'
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, quisquam. Accusantium, natus itaque ab asperiores quos sint praesentium inventore nisi ipsa reiciendis dolores omnis, doloremque quaerat incidunt quibusdam! A, similique.</p>
        
        <Button styles="mt-10"/>
      </div>

      
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )


export default CardDeal