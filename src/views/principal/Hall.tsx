import { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import image from '../../assets/logoDamasco.svg'
import '../Views.css'
import { Variants, motion } from 'framer-motion'
import { variantsTitle } from '../../utils/variantsTitles'


const variants:Variants={
	initial:{opacity:0, translateY:100},
	show:{opacity:1, translateY:0,transition:{ease:'easeOut', duration:2, type:'tween'}}

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
		<div className='w-screen h-auto flex flex-col justify-center items-center py-28 bg-white'>
			<motion.div className='text-center  mb-20'  variants={variantsTitle} initial="initial" whileInView="show" viewport={{once:true}}>
			<p className='text-[#094998] font-medium text-sm mb-5'>SALAS</p>
            <p className='font-bold text-[#313131] text-3xl md:text-4xl xl:text-5xl'>Nuestras salas</p>
			</motion.div>
			
			
            <motion.div  variants={variants} initial="initial" viewport={{once:true}} whileInView="show" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-full'>
				<Slide slidesToShow={5} duration={0} arrows={false} transitionDuration={transition} indicators={true} autoplay={!isPaused} cssClass='halls' >
					<div  className=' w-50 mx-5 '>
						<img src={image} alt='Imagen 1' className=' mix-blend-luminosity' />
					</div>
					<div  className=' w-50 mx-5'>
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
