import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Arrow } from './Arrow'
const images = [
	'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
	'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
	'https://m.media-amazon.com/images/M/MV5BMDI3ZDY4MDgtN2U2OS00Y2YzLWJmZmYtZWMzOTM3YWFjYmUyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
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
