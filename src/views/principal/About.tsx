import { motion, Variants } from 'framer-motion'
import imgAbout from '../../assets/aboutImg.svg'
import '../Views.css'
import {variantsTitle} from '../../utils/variantsTitles'
const variants:Variants={
	initial:{opacity:0, translateX:-100},
	show:{opacity:1, translateX:0,transition:{ease:'easeOut', duration:2, type:'tween',delay:1}}

}
const variants2:Variants={
	initial:{opacity:0, translateX:100},
	show:{opacity:1, translateX:0,transition:{ease:'easeOut', duration:2, type:'tween',delay:1.5}}

}

export const About = () => {
	return (
		<div
			className='w-screen h-auto flex flex-col justify-center items-center py-28 bg-[#F5FAFF]'
			id='about'>
				<motion.p variants={variantsTitle} initial="initial" whileInView="show" viewport={{once:true}} className='text-[#094998] font-medium text-sm mb-10 lg:mb-20'>SOBRE NOSOTROS</motion.p>
			<div className='max-w-7xl h-auto w-full grid grid-cols-1 lg:grid-cols-2 px-5 gap-4'>
				
				<motion.div variants={variants} viewport={{once:true}} initial="initial" whileInView="show" className=' h-full w-full  flex justify-center items-center order-2 '>
					<div className=' min-w-[280px] w-3/6 lg:w-5/6 aboutImage'>
						<img src={imgAbout} alt='' className=' h-full w-full object-cover'/>
					</div>
				</motion.div>

				<motion.div variants={variants2}  viewport={{once:true}} initial="initial" whileInView="show" className='flex flex-col gap-10 lg:order-2 p-7 md:p-10'>
					<div>
						<p className='font-bold text-[#313131] text-3xl md:text-4xl xl:text-5xl mb-5 '>Nuestra misión</p>
						<p className='text-base md:text-base xl:text-xl text-[#1F589E] font-normal  leading-7'>Ser la empresa de entretenimiento más sólida y organizada del país.</p>
					</div>
					<div>
						<p className='font-bold text-[#313131] text-3xl md:text-4xl xl:text-5xl mb-5 '>Nuestra visión</p>
						<p className='text-[#1F589E] line-clamp- font-normal leading-7 text-base md:text-base xl:text-xl'>Que los clientes logren la mejor experiencia de entretenimiento. Brindar a nuestros colaboradores un medio para su desarrollo y bienestar. Incrementar el valor de la Corporación.</p>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
