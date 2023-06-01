import React from 'react'
import imgAbout from '../../assets/aboutImg.svg'
import { Variants, motion } from 'framer-motion'
import { variantsTitle } from '../../utils/variantsTitles'

const variants:Variants={
	initial:{opacity:0, translateX:-100},
	show:{opacity:1, translateX:0,transition:{ease:'easeOut', duration:2, type:'tween', delay:1.5}}

}
const variants2:Variants={
	initial:{opacity:0, translateX:100},
	show:{opacity:1, translateX:0,transition:{ease:'easeOut', duration:2, type:'tween', delay:1}}

}
export const Club = () => {
  return (
    <div
			className='w-screen h-auto flex flex-col justify-center items-center py-28 pb-56 bg-[#F5FAFF]'
			>
				<motion.p  variants={variantsTitle} initial="initial" whileInView="show" viewport={{once:true}} className='text-[#094998] font-medium text-sm mb-10 lg:mb-20'>CLUB</motion.p>
			<div className='max-w-7xl h-auto w-full grid grid-cols-1 lg:grid-cols-2 px-5 gap-10'>
				<motion.div variants={variants2} viewport={{once:true}} initial="initial" whileInView="show" className=' h-full w-full  flex justify-center items-center order-2 '>
				<div className=' min-w-[280px] w-3/6 lg:w-5/6 aboutImage'>
						<img src={imgAbout} alt='' className=' h-full w-full object-cover'/>
					</div>

				</motion.div>
				<motion.div variants={variants} viewport={{once:true}} initial="initial" whileInView="show" className='p-7 md:p-10 flex flex-col gap-5 '>
						<p className='font-bold text-[#313131] text-3xl md:text-4xl xl:text-5xl mb-5 pb-5'>Beneficio club/socios</p>
						<p className='text-[#1F589E] font-normal text-base md:text-base xl:text-xl'>Que los clientes logren la mejor experiencia de entretenimiento. Brindar a nuestros colaboradores un medio para su desarrollo y bienestar. Incrementar el valor de la Corporación.Que los clientes logren la mejor experiencia de entretenimiento. Brindar a nuestros colaboradores un medio para su desarrollo y bienestar. Incrementar el valor de la Corporación.Que los clientes logren la mejor experiencia de entretenimiento. Brindar a nuestros colaboradores un medio para su desarrollo y bienestar. Incrementar el valor de la.</p>
					
				</motion.div>
			</div>
		</div>
  )
}
