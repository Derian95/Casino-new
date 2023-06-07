import { motion } from 'framer-motion'
import imgAbout from '../../assets/image 94.svg'
import { variantsText } from '../../utils/variants'

export const Club = () => {
	return (
		<div className='w-full py-36  '>
			<div className='w-full h-fit   flex flex-col  items-center   -translate-y-1 gap-20 py-0 px-10'>
				<div className='max-w-6xl grid grid-cols-1 lg:grid-cols-2  gap-10 lg:gap-10 items-center w-full justify-center px-2'>
                <motion.div
						className='h-auto md:h-[60vh] w-full   flex items-center justify-center order-2  '
						variants={variantsText}
						initial='initial'
						whileInView='show'
                        viewport={{once:true}}
						transition={{ duration: 0.5, type: 'tween', delay: 0.5 }}>
						<div className='img-form'>
							<img
								src={imgAbout}
								alt=''
								className='h-full img-form2 w-full object-cover z-10 absolute'
							/>
						</div>
					</motion.div>
					<div>
						<div className='flex flex-col gap-5 items-center lg:items-start justify-center'>
							<div>
								<motion.h3
									variants={variantsText}
									initial='initial'
									whileInView='show'
                                    viewport={{once:true}}
									transition={{ duration: 0.5, type: 'tween' }}
									className='text-[#FF0C0C] font-normal text-center lg:text-left'>
									CLUB
								</motion.h3>
								<motion.h2
									variants={variantsText}
									initial='initial'
									whileInView='show'
                                    viewport={{once:true}}
                                    transition={{ duration: 0.5, delay: 0.2, type: 'tween' }}
									className='text-[38px] text-[#212529] font-bold text-center lg:text-left max-w-md'>
									Los{' '}
									<span className='text-[#FF0C0C] '>mejores beneficios</span>{' '}
									club/socios
								</motion.h2>
							</div>

							<motion.p
								variants={variantsText}
								initial='initial'
								whileInView='show'
                                viewport={{once:true}}
								transition={{ duration: 0.5, delay: 0.4, type: 'tween' }}
								className='text-sm text-[#242732] font-normal max-w-md leading-7 text-center lg:text-left'>
								Que los clientes logren sdsa dasd asd asd  clientes logren clientes logren clientes logren  clientes logren clientes logren clientes logrenv  clientes logrenv
							</motion.p>
							<hr />
							<motion.button
								variants={variantsText}
								initial='initial'
								whileInView='show'
                                viewport={{once:true}}
								transition={{ duration: 0.5, delay: 0.6, type: 'tween' }}
								className='shadow-lg shadow-orange-200 max-w-fit bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-10 py-3 text-white rounded-[45px] text-sm '>
								Ver beneficios
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
