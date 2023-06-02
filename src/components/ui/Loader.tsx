
import {motion} from 'framer-motion'
import CountUp from 'react-countup';
export const Loader = () => {
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
    <motion.div initial={{opacity:1}} animate={{opacity:0,zIndex:-10}} transition={{delay:10, duration:2}} className='bg-orange-500 text-white absolute z-50 w-full h-full flex items-center justify-center '>
        <CountUp end={100} duration={15} className='font-bold text-8xl' /> <span className='font-bold text-7xl ml-1'>  %</span>
    </motion.div>
  )
}
