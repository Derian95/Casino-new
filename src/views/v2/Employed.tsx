import { motion } from 'framer-motion';
import employe from '../../assets/newEmploy.svg'
import { variantsText } from '../../utils/variants';
export const Employed = () => {
  return (
    <div className="w-full flex justify-center items-center py-36">
        <div className='max-w-6xl flex flex-col lg:flex-row gap-10 justify-center items-center'>
        <div className='flex flex-col gap-10 justify-center lg:items-start items-center'>
            <motion.h2
            variants={variantsText}
						initial='initial'
						whileInView='show'
						viewport={{once:true}}
						transition={{ duration: 0.5, type: 'tween' }}
            className=' text-5xl lg:max-w-md max-w-lg text-center lg:text-left font-semibold  text-[#212529]  leading-[60px]'>Trabaje con nosotros</motion.h2>
            <motion.button
            variants={variantsText}
						initial='initial'
						whileInView='show'
						viewport={{once:true}}
						transition={{ duration: 0.5, delay: 0.2, type: 'tween' }}
            className='shadow-lg shadow-orange-200 max-w-fit bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-10 py-3 text-white rounded-[45px] text-sm'>
						Ver empleos
					</motion.button>
        </div>
        <motion.img
        variants={variantsText}
        initial='initial'
        whileInView='show'
        viewport={{once:true}}
        transition={{ duration: 0.5, delay: 0.4, type: 'tween' }}
        src={employe} alt="" className='w-full md:w-4/5 lg:w-3/6' />

        </div>
    </div>
  )
};
