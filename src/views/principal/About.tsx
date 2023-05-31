import { motion, Variants } from 'framer-motion'
import imgAbout from '../../assets/aboutImg.svg'
import '../Views.css'

const variants:Variants={
	initial:{opacity:0, translateX:-100},
	show:{opacity:1, translateX:0,transition:{ease:'easeOut', duration:2, type:'tween'}}

}
const variants2:Variants={
	initial:{opacity:0, translateX:100},
	show:{opacity:1, translateX:0,transition:{ease:'easeOut', duration:2, type:'tween'}}

}

export const About = () => {
	return (
		<div
			className='w-screen h-auto flex flex-col justify-center items-center py-28 bg-[#F5FAFF]'
			id='about'>
				<p className='text-[#094998] font-medium text-sm mb-20'>Sobre nosotros</p>
			<div className='max-w-7xl h-auto w-full grid grid-cols-1 md:grid-cols-2 px-5 gap-32'>
				<motion.div variants={variants} initial="initial" whileInView="show" className='aboutImage h-full w-full aboutImage flex justify-center items-center order-2 '>
					<img src={imgAbout} alt='' className=' w-4/5 h-[95%] object-cover'/>
				</motion.div>
				<motion.div variants={variants2} initial="initial" whileInView="show" className='flex flex-col gap-10 md:order-2'>
					<div>
						<p className='font-bold text-[#313131] text-[44px] mb-5 '>Nuestra misión</p>
						<p className='text-[#1F589E] font-normal text-base leading-7'>Ser la empresa de entretenimiento más sólida y organizada del país.</p>
					</div>
					<div>
						<p className='font-bold text-[#313131] text-[44px] mb-5 '>Nuestra visión</p>
						<p className='text-[#1F589E] line-clamp- font-normal leading-7 text-base'>Que los clientes logren la mejor experiencia de entretenimiento. Brindar a nuestros colaboradores un medio para su desarrollo y bienestar. Incrementar el valor de la Corporación.</p>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
