import { motion } from 'framer-motion'
import { variantsText } from '../../utils/variants'
import { useCorporateStore } from '../../store/CorporateStore'
import { ImageLoading } from '../../components/ui/ImageLoading'

export const Club = () => {
    const { dataCorporate:DataClub } = useCorporateStore()
	return (
		<div className='w-full py-36  ' id='club'>
			<div className='w-full h-fit   flex flex-col  items-center   -translate-y-1 gap-20 py-0 '>
				<div className='max-w-6xl grid grid-cols-1 lg:grid-cols-2  gap-10 lg:gap-10 items-center w-full justify-center px-2'>
                <motion.div
						className='h-auto md:h-[60vh] w-full   flex items-center justify-center order-2  relative '
						variants={variantsText}
						initial='initial'
						whileInView='show'
						viewport={{ once: true }}
						transition={{ duration: 0.5, type: 'tween', delay: 0.5 }}>

						{/* <div className='img-form3  absolute top-0 bg-slate-700 -rotate-12'></div> */}
						<div className='img-form relative overflow-hidden shadow-lg shadow-orange-200 '>
							<ImageLoading src={DataClub?.club.imageUri!} />
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
									className='text-[#FF0C0C] font-normal text-center lg:text-left uppercase'>
									{ DataClub?.club.title }
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
								{ DataClub?.club.description}
							</motion.p>
							<hr />
							<motion.button
								variants={variantsText}
								initial='initial'
								whileInView='show'
                                viewport={{once:true}}
								transition={{ duration: 0.5, delay: 0.6, type: 'tween' }}
								className='shadow-lg shadow-orange-200 max-w-fit bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-10 py-3 text-white rounded-[45px] text-sm hover:brightness-150 transition-all duration-300 ease-in'>
								Ver beneficios
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
