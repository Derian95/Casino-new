import { motion } from 'framer-motion'
import aboutImg from '../assets/aboutImg.png'
import pattern from '../assets/pattern.svg'

export const About = () => {
	return (
		<div className='w-screen h-auto flex justify-center pt-16 bg-white'>
			<div className='max-w-5xl h-auto w-full grid grid-cols-1 gap-14 px-5 sm:px-20 md:px-10 lg:px-0'>
				<div className='h-auto grid grid-cols-1 md:grid-cols-2 gap-4  '>
					<motion.div
						initial={{ opacity: 0, translateX: -100 }}
						whileInView={{ opacity: 1, translateX: 0 }}
						transition={{
							duration: 2.5,
							type: 'spring',
							stiffness: 152,
							delay: 1,
						}}
						viewport={{ once: true }}
						className='flex justify-center items-center md:justify-start order-last md:order-first'>
						<div className='image-decoration'>
							<img
								src={aboutImg}
								alt=''
								className='h-full w-full relative z-[2] '
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, translateX: 100 }}
						whileInView={{ opacity: 1, translateX: 0 }}
						transition={{
							duration: 1.5,
							type: 'spring',
							stiffness: 152,
							delay: 1,
						}}
						viewport={{ once: true }}
						className=' flex flex-col justify-center items-start gap-y-10 '>
						<p className='text-3xl'>Nosotros</p>

						<motion.p>
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
							delay: 1,
						}}
						viewport={{ once: true }}
						className=' flex flex-col justify-center items-start gap-y-10 '>
						<p className='text-3xl'>Mision</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In
							laudantium ea distinctio debitis quis, nesciunt pariatur alias
							maiores et. Incidunt illo ipsam soluta deserunt voluptas tempora
							eos. Inventore, fugiat laboriosam.
						</p>
						<p className='text-3xl'>Vision</p>
						<p>
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
							duration: 1.5,
							type: 'spring',
							stiffness: 152,
							delay: 1,
						}}
						viewport={{ once: true }}
						className=' h-[350px] md:h-[500px]  relative w-full '>
						<img src={aboutImg} alt='' className='w-2/4 absolute' />
						<img
							src={aboutImg}
							alt=''
							className='w-3/6 absolute z-10 right-11 top-10'
						/>
						<img
							src={aboutImg}
							alt=''
							className='w-4/5 h-3/6 absolute bottom-0 right-0 z-[1]'
						/>
						<img src={pattern} alt='' className='absolute -left-10 bottom-0 ' />
						<img src={pattern} alt='' className='absolute -right-0 top-0 ' />
					</motion.div>
				</div>
			</div>
		</div>
	)
}
