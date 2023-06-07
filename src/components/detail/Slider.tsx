import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Arrow } from './Arrow'

import imagen1 from '../../assets/screen2.png'
import imagen2 from '../../assets/screen1.png'
import imagen3 from '../../assets/casino1.jpg'
const images = [

imagen1,
imagen2,
imagen3
]

export const Slider = () => {
	return (
		<Slide
			cssClass='sliderClass'
			autoplay
			indicators
			prevArrow={
				<div className='absolute bottom-[10px] left-0 text-white'>
					<Arrow/>
				</div>
			}
			nextArrow={
				<div className='absolute bottom-[10px] right-0 text-white rotate-180'>
					<Arrow/>
				</div>
			}>
			<div className='w-full h-full bg-black relative'>
				<div className='absolute bg-gradient-to-b to-slate-950/40 from-transparent h-full w-full'></div>
				<img src={images[0]} alt='' className='h-full w-full object-cover' />
			</div>
			<div className='w-full h-full bg-black'>
				<div className='absolute bg-gradient-to-b to-slate-950/40 from-transparent h-full w-full'></div>

				<img src={images[2]} alt='' className='h-full w-full object-cover' />
			</div>
			<div className='w-full h-full bg-black'>
				<div className='absolute bg-gradient-to-b to-slate-950/40 from-transparent h-full w-full'></div>

				<img src={images[1]} alt='' className='h-full w-full object-cover' />
			</div>
		</Slide>
	)
}
