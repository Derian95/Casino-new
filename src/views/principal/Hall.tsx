import { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import image from '../../assets/logoDamasco.svg'
import '../Views.css'
import { variantsTitle } from '../../utils/variantsTitles'
import { Variants, motion } from 'framer-motion'

const variants: Variants = {
	initial: { opacity: 0, translateY: 100 },
	show: {
		opacity: 1,
		translateY: 0,
		transition: { ease: 'easeOut', duration: 1.5, type: 'tween' },
	},
}

export const Hall = () => {
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
	console.log(isPaused)
	console.log(transition)
	return (
		<div className='ra w-screen h-auto flex flex-col justify-start items-center  pt-16 pb-28'>
			<motion.div
				className='text-center  '
				variants={variantsTitle}
				initial='initial'
				whileInView='show'
				viewport={{ once: true }}>
				<span className='text-[#FF0C0C] font-normal'>SALAS</span>
				<h2 className='text-[38px] text-[#212529] font-bold  max-w-lg'>
					Sumérgete en la emoción de nuestros <span className='text-[#FF0C0C]'> casinos</span>
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
					slidesToShow={5}
					duration={0}
					arrows={false}
					transitionDuration={transition}
					indicators={true}
					autoplay={!isPaused}
					cssClass='halls'>
					<div className=' w-50 mx-5 '>
						<img src={image} alt='Imagen 1' className=' mix-blend-luminosity' />
					</div>
					<div className=' w-50 mx-5'>
						<img src={image} alt='Imagen 2' />
					</div>
					{/* ... Agrega las imágenes restantes aquí */}
					<div className='w-50 mx-5'>
						<img src={image} alt='Imagen 10' />
					</div>
					<div className='w-50 mx-5'>
						<img src={image} alt='Imagen 10' />
					</div>
					<div className='w-50 mx-5'>
						<img src={image} alt='Imagen 10' />
					</div>
				</Slide>
			</motion.div>
		</div>
	)
}
