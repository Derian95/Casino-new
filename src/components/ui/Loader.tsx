
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
// import { GladconLogo } from './svgAnimated/GladconLogo';
export const Loader = () => {

  const [scrollBlocked, setScrollBlocked] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setScrollBlocked(false);
    }, 10000);
    if (scrollBlocked) {
      // Bloquear scroll del body
      document.body.style.overflow = 'hidden';
    } else {
      // Desbloquear scroll del body
      document.body.style.overflow = 'auto';
    }

    return () => {
      // Asegurarse de desbloquear el scroll al desmontar el componente
      document.body.style.overflow = 'auto';
    };
  }, [scrollBlocked]);

  

  return (
    // <motion.div 
    // initial={{opacity:1}}
    // animate={{opacity:0}}
    // transition={{duration:5}}
    // className='h-screen w-full bg-white fixed z-50 flex justify-center items-center'>
    //     <motion.div 
    //     animate={{width:'100%'}}
    //     transition={{duration:5}}
    //     className='h-1 w-1 bg-black'>

    //     </motion.div>
    // </motion.div>
    <motion.div initial={{opacity:1}} animate={{ opacity:0, width:0}} transition={{delay:10, duration:1,type:'tween'}} className=' bg-gradient-to-b from-[#FF720C] to-[#FF0C0C] overflow-hidden text-white  z-50 w-screen h-screen flex items-center justify-center fixed top-0 right-0 ' >
        {/* <GladconLogo/> */}
        <div className="spinner"></div>

        <div className='absolute bottom-0 right-0'>
        <CountUp end={100} duration={12} className='font-bold text-8xl' /> <span className='font-bold text-7xl ml-1'>  %</span>
        </div>
        
    </motion.div>
  )
}
