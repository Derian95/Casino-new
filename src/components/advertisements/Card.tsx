import { motion } from 'framer-motion'
import imagen from '../../assets/aboutImg.png'

export const Card = () => {
  return (
    <motion.div
    initial={{opacity:0, translateY:30}}
    whileInView={{opacity:1, translateY:0}}
    transition={{type:'tween', duration:.5  }}
    viewport={{once:true}}

    className=" flex flex-col gap-y-4 ">
        <img src={imagen} alt="" />
        <div className='flex flex-col gap-y-4 items-center'>
            <span>Evento</span>
            <p className='text-lg font-bold'> dsdas da  a </p>
        </div>
        <button className='px-4 py-2 w-40 bg-black text-white '>Ver mas</button>
    </motion.div>
  )
}
