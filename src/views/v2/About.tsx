import { motion } from 'framer-motion'
import { variantsText } from '../../utils/variants'
import { useCorporateStore } from '../../store/CorporateStore'
import 'react-loading-skeleton/dist/skeleton.css'
import { ImageLoading } from '../../components/ui/ImageLoading'

export const About = () => {
	const { dataCorporate } = useCorporateStore()
	
	return (
		<div className='w-full py-20 lg:-translate-y-20 ' id='about'>
			<div className='w-full h-fit  flex flex-col  items-center   -translate-y-1 gap-20 py-0 '>
				<div className='max-w-6xl grid grid-cols-1 lg:grid-cols-2  gap-10 lg:gap-24 items-center w-full justify-center '>
					<motion.div
						className='  h-auto md:h-[60vh] w-full   flex items-center justify-center order-2  relative '
						variants={variantsText}
						initial='initial'
						whileInView='show'
						viewport={{ once: true }}
						transition={{ duration: 0.5, type: 'tween', delay: 0.5 }}>

						{/* <div className='img-form3  absolute top-0 bg-slate-700 -rotate-12'></div> */}
						<div className='img-form relative overflow-hidden shadow-lg shadow-orange-200 '>
							<ImageLoading src={dataCorporate?.info.imageUri!} />
						</div>

					</motion.div>

					<div className='flex flex-col items-center lg:items-start gap-7 lg:order-2'>
						<div>
							<motion.h3
								variants={variantsText}
								initial='initial'
								whileInView='show'
								viewport={{ once: true }}
								transition={{ duration: 0.5, type: 'tween' }}
								className='text-[#FF0C0C] font-normal  overflow-hidden text-center lg:text-left uppercase'>
								{dataCorporate?.info.name}
							</motion.h3>
							<motion.h2
								variants={variantsText}
								initial='initial'
								viewport={{ once: true }}
								whileInView='show'
								transition={{ duration: 0.5, delay: 0.2, type: 'tween' }}
								className='text-[38px] text-[#212529] font-bold  relative overflow-hidden text-center lg:text-left'>
								Lideres en{' '}
								<span className='text-[#FF0C0C] '>entretenimiento</span>
							</motion.h2>
						</div>
						<div className='px-2'>
							<motion.div
								variants={variantsText}
								initial='initial'
								whileInView='show'
								viewport={{ once: true }}
								transition={{ duration: 0.5, type: 'tween', delay: 0.4 }}>
								<motion.p className='text-2xl text-[#333333] font-semibold mb-3 text-center lg:text-left'>
									Misión
								</motion.p>
								<motion.p className='text-sm text-[#242732] font-normal max-w-md leading-7 text-center lg:text-left'>
									{dataCorporate?.info.mission}
								</motion.p>
							</motion.div>
						</div>
						<div className='px-2'>
							<motion.div
								variants={variantsText}
								initial='initial'
								whileInView='show'
								viewport={{ once: true }}
								transition={{ duration: 0.5, type: 'tween', delay: 0.6 }}>
								<motion.p className='text-2xl text-[#333333] font-semibold mb-3 text-center lg:text-left'>
									Visión
								</motion.p>
								<motion.p className='text-sm text-[#242732] font-normal max-w-md leading-7 text-center lg:text-left'>
									{dataCorporate?.info.vision}
								</motion.p>
							</motion.div>
						</div>

						<hr />
						<motion.div
							variants={variantsText}
							initial='initial'
							whileInView='show'
							viewport={{ once: true }}
							transition={{ duration: 0.5, type: 'tween', delay: 0.8 }}>
							<button className='shadow-lg shadow-orange-200 max-w-fit bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-10 py-3 text-white rounded-[45px] text-sm hover:brightness-150 transition-all duration-300 ease-in'>
								Ver historia
							</button>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}
