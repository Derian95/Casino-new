import { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import image from '../../assets/logoDamasco.svg'
import '../Views.css'
export const Hall = () => {
	const [isPaused, setIsPaused] = useState(false)
	const [transition, setTransition] = useState(1900)

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
			<p className='text-[#094998] font-medium text-sm mb-5'>Salas</p>
            <p className='font-extrabold text-[#313131] text-4xl mb-20'>Nuestras salas</p>
			
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-full'>
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
			</div>
		</div>
	)
}
