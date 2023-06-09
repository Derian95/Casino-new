import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Arrow } from './Arrow'

import { AnnoucementMedia } from '../../interfaces/data'
import { FC } from 'react'
import { ImageLoading } from '../ui/ImageLoading'

interface Props {
	images: AnnoucementMedia[]
}

export const Slider: FC<Props> = ({ images }) => {
	return (
		<Slide
			cssClass='sliderClass'
			autoplay
			indicators
			prevArrow={
				<div className='absolute bottom-[10px] left-0 text-white'>
					<Arrow />
				</div>
			}
			nextArrow={
				<div className='absolute bottom-[10px] right-0 text-white rotate-180'>
					<Arrow />
				</div>
			}>
			{images.map((image) => (
				<div key={image.idCorpAnnouncementMedia} className='w-full h-full bg-black relative'>
					<div className='absolute bg-gradient-to-b to-slate-950/40 from-transparent h-full w-full'></div>
					
					<ImageLoading src={image.pathWeb}/>
					{/* <img
						src={image.pathWeb}
						alt=''
						className='h-full w-full object-cover'
					/> */}
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis aspernatur quam unde quos ullam aperiam dolorem aut magni. Magni, nam? Nulla earum tempora rerum deserunt maxime esse? Aperiam, voluptates at.
				</div>
			))}
		</Slide>
	)
}
