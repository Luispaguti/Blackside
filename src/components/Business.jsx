import styles, { layout } from '../style';
import Button from './Button';
import Coach from './Coach';

const Business = () => {
  return (
    <section id="features" className='bg-black py-20'  >
    <div className='flex justify-evenly py-9' data-aos='fade-left'
              data-aos-delay='600'>
    <Coach />
    <Coach/>
    <Coach/>  
   </div>
    
    </section>
  )
}

export default Business