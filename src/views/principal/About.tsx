import { motion } from 'framer-motion'

import pattern from '../../assets/pattern.svg'
import imagen1 from '../../assets/about1.jpg'
import imagen2 from '../../assets/imagen2.webp'
import imagen4 from '../../assets/imagen4.jpg'

export const About = () => {
	return (
		<div className='w-screen h-auto flex justify-center pt-16 bg-white' id='about'>
			<div className='max-w-5xl h-auto w-full grid grid-cols-1 px-5'>
				<div className='h-auto grid grid-cols-1 md:grid-cols-2 gap-4  '>
					<motion.div
						initial={{ opacity: 0, translateX: -100 }}
						whileInView={{ opacity: 1, translateX: 0 }}
						transition={{
							duration: 2.5,
							type: 'spring',
							stiffness: 152,
						}}
						viewport={{ once: true }}
						className='flex justify-center items-center md:justify-start order-last md:order-first'>
						<div className='image-decoration'>
							<img
								src={imagen1}
								alt=''
								className='h-full w-full relative z-[2] '
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, translateX: 100 }}
						whileInView={{ opacity: 1, translateX: 0 }}
						transition={{
							duration: 2.5,
							type: 'spring',
							stiffness: 152,
						}}
						viewport={{ once: true }}
						className=' flex flex-col justify-center items-center md:items-start gap-y-10 '>
						<p className='text-3xl font-bold text-[#0A47C9] text-center '><span className='text-[#333333]'>Sobre</span> nosotros</p>

						<motion.p className='text-[#3e4a63] font-normal'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In
							laudantium ea distinctio debitis quis, nesciunt pariatur alias
							maiores et. Incidunt illo ipsam soluta deserunt voluptas tempora
							eos. Inventore, fugiat laboriosam.
						</motion.p>
					</motion.div>
				</div>

				<div className='h-auto grid grid-cols-1 md:grid-cols-2 gap-14	 '>
					<motion.div
						initial={{ opacity: 0, translateX: -100 }}
						whileInView={{ opacity: 1, translateX: 0 }}
						transition={{
							duration: 2.5,
							type: 'spring',
							stiffness: 152,
						}}
						viewport={{ once: true }}
						className=' flex flex-col justify-center items-start gap-y-10 '>
						
						<p className='text-3xl font-bold text-[#0A47C9]'><span className='text-[#333333]'>Nuestra</span> misión</p>

						<p className='text-[#3e4a63] font-normal'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In
							laudantium ea distinctio debitis quis, nesciunt pariatur alias
							maiores et. Incidunt illo ipsam soluta deserunt voluptas tempora
							eos. Inventore, fugiat laboriosam.
						</p>
						<p className='text-3xl font-bold text-[#0A47C9]'><span className='text-[#333333]'>Nuestra</span> visión</p>
						<p className='text-[#3e4a63] font-normal'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In
							laudantium ea distinctio debitis quis, nesciunt pariatur alias
							maiores et. Incidunt illo ipsam soluta deserunt voluptas tempora
							eos. Inventore, fugiat laboriosam.
						</p>
					</motion.div>
					<motion.div				
						initial={{ opacity: 0, translateX: 100 }}
						whileInView={{ opacity: 1, translateX: 0 }}
						transition={{
							duration: 2.5,
							type: 'spring',
							stiffness: 152,
						}}
						viewport={{ once: true }}
						className=' h-[350px] md:h-[500px]  relative w-full '>
						<img src={imagen4} alt='' className='w-4/5 absolute' />
					
						<img
							src={imagen2}
							alt=''
							className='w-4/5 h-3/6 absolute bottom-20 right-0 z-[1]'
						/>
						<img src={pattern} alt='' className='absolute -left-10 bottom-10 ' />
						<img src={pattern} alt='' className='absolute -right-0 top-0 ' />
					</motion.div>
				</div>
			</div>
		</div>
	)
}
