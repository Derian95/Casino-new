
import {motion} from 'framer-motion'

export const Loader = () => {
  return (
    <motion.div 
    initial={{opacity:1}}
    animate={{opacity:0}}
    transition={{duration:5}}
    className='h-screen w-full bg-white fixed z-50 flex justify-center items-center'>
        <motion.div 
        animate={{width:'100%'}}
        transition={{duration:5}}
        className='h-1 w-1 bg-black'>

        </motion.div>
    </motion.div>
  )
}
