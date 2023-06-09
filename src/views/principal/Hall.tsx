import { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import '../Views.css'
import { Variants, motion } from 'framer-motion'
import { variantsText } from '../../utils/variants'
import { useCorporateStore } from '../../store/CorporateStore'
import { ImageLoading } from '../../components/ui/ImageLoading'

const variants: Variants = {
	initial: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { ease: 'easeOut', duration: 1.5, type: 'tween' },
	},
}

export const Hall = () => {
	const { dataCorporate } = useCorporateStore()
	const [isPaused, setIsPaused] = useState(false)
	const [transition, setTransition] = useState(2900)

	const handleMouseEnter = () => {
		setIsPaused(true)
		setTransition(1900)
	}

	const handleMouseLeave = () => {
		setIsPaused(false)
		setTransition(1900)
	}
	return (
		<>
			{dataCorporate?.casinos.length === 0 ? null : (
				<div className='ra w-screen h-auto flex flex-col justify-start items-center  pt-16 pb-28' id='hall'>
					<motion.div
						className='text-center'
						variants={variantsText}
						initial='initial'
						whileInView='show'
						transition={{ duration: 0.5, delay: 0.2, type: 'tween' }}
						viewport={{ once: true }}>
						<span className='text-[#FF0C0C] font-normal'>SALAS</span>
						<h2 className='text-[38px] text-[#212529] font-bold  max-w-lg'>
							Sumérgete en la emoción de nuestros{' '}
							<span className='text-[#FF0C0C]'> casinos</span>
						</h2>
					</motion.div>

					<motion.div
						variants={variants}
						initial='initial'
						viewport={{ once: true }}
						whileInView='show'
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						className='w-full mt-16 '>
						<Slide
							slidesToShow={3}
							duration={0}
							arrows={false}
							transitionDuration={transition}
							indicators={true}
							autoplay={!isPaused}
							cssClass='halls'>
							{dataCorporate?.casinos.map((casino) => (
								<div key={casino.name} className=' w-2/4 mx-5 imageHall'>
									<ImageLoading src={casino.logoUri} />
								</div>
							))}

							{/* <div className=' w-50 mx-5 '>
						<img src={image} alt='Imagen 1' className=' mix-blend-luminosity' />
					</div>
					<div className=' w-50 mx-5 '>
						<img src={image} alt='Imagen 1' className=' mix-blend-luminosity' />
					</div>
					<div className=' w-50 mx-5 '>
						<img src={image} alt='Imagen 1' className=' mix-blend-luminosity' />
					</div>
					<div className=' w-50 mx-5 '>
						<img src={image} alt='Imagen 1' className=' mix-blend-luminosity' />
					</div>
					<div className=' w-50 mx-5 '>
						<img src={image} alt='Imagen 1' className=' mix-blend-luminosity' />
					</div>
					<div className=' w-50 mx-5 '>
						<img src={image} alt='Imagen 1' className=' mix-blend-luminosity' />
					</div>
					<div className=' w-50 mx-5 '>
						<img src={image} alt='Imagen 1' className=' mix-blend-luminosity' />
					</div>
					<div className=' w-50 mx-5 '>
						<img src={image} alt='Imagen 1' className=' mix-blend-luminosity' />
					</div> */}
						</Slide>
					</motion.div>
				</div>
			)}
		</>
	)
}
