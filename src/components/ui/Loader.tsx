
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
    <motion.div initial={{opacity:1}} animate={{ opacity:0, width:0}} transition={{delay:10, duration:1,type:'tween'}} className='bg-orange-500 overflow-hidden text-white absolute z-50 w-full h-full flex items-center justify-center '>
        <div></div>
        <CountUp end={100} duration={12} className='font-bold text-8xl' /> <span className='font-bold text-7xl ml-1'>  %</span>
    </motion.div>
  )
}
