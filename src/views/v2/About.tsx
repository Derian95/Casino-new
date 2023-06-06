import { motion } from 'framer-motion'
import imgAbout from '../../assets/aboutImg.svg'
import { variantsText } from '../../utils/variants'

export const About = () => {
	return (
		<div className='w-full py-36  '>
			<div className='w-full h-fit  flex flex-col  items-center   -translate-y-1 gap-20 py-0 '>
				<div className='max-w-6xl grid grid-cols-1 lg:grid-cols-2  gap-10 lg:gap-24 items-center w-full justify-center '>
					<motion.div
						className='h-auto md:h-[60vh] w-full   flex items-center justify-center order-2  '
						variants={variantsText}
						initial='initial'
						whileInView='show'
						transition={{ duration: 0.5, type: 'tween', delay: 0.5 }}>
						<div className='img-form'>
							<img
								src={imgAbout}
								alt=''
								className='h-full img-form2 w-full object-cover   z-10 absolute'
							/>
						</div>
					</motion.div>
					<div className='flex flex-col items-center lg:items-start gap-7 lg:order-2'>
						<div>
							<motion.h3
								variants={variantsText}
								initial='initial'
								whileInView='show'
								transition={{ duration: 0.5, type: 'tween' }}
								className='text-[#FF0C0C] font-normal  overflow-hidden text-center lg:text-left'>
								SOBRE NOSOTROS
							</motion.h3>
							<motion.h2
								variants={variantsText}
								initial='initial'
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
								transition={{ duration: 0.5, type: 'tween', delay: 0.4 }}>
								<motion.p className='text-2xl text-[#333333] font-semibold mb-3 text-center lg:text-left'>
									Misión
								</motion.p>
								<motion.p className='text-sm text-[#242732] font-normal max-w-md leading-7 text-center lg:text-left'>
									Ser la empresa de entretenimiento más sólida y organizada del
									país.
								</motion.p>
							</motion.div>
						</div>
						<div className='px-2'>
							<motion.div
								variants={variantsText}
								initial='initial'
								whileInView='show'
								transition={{ duration: 0.5, type: 'tween', delay: 0.6 }}>
								<motion.p className='text-2xl text-[#333333] font-semibold mb-3 text-center lg:text-left'>
									Visión
								</motion.p>
								<motion.p className='text-sm text-[#242732] font-normal max-w-md leading-7 text-center lg:text-left'>
									Que los clientes logren la mejor experiencia de
									entretenimiento. Brindar a nuestros colaboradores un medio
									para su desarrollo y bienestar. Incrementar el valor de la
									Corporación.
								</motion.p>
							</motion.div>
						</div>

						<hr />
						<motion.div
							variants={variantsText}
							initial='initial'
							whileInView='show'
							transition={{ duration: 0.5, type: 'tween', delay: 0.8 }}>
							<button className='shadow-lg shadow-orange-200 max-w-fit bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-10 py-3 text-white rounded-[45px] text-sm'>
								Ver historia
							</button>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}
