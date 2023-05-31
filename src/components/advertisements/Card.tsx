// import imagen from '../../assets/aboutImg.png'
import { Link } from 'react-router-dom'
import { FC } from 'react'
import { motion } from 'framer-motion'

interface Props {
	title: string
	image: string
	type: TypeAnnouncement
}

type TypeAnnouncement = 'EVENTO' | 'PROMOCION'

export const Card: FC<Props> = ({ title, image, type }) => {

	
	return (
		<Link to={'/anuncio-detalle'}>
			<motion.div
				initial={{ opacity: 0, translateY: 30 }}
				whileInView={{ opacity: 1, translateY: 0 }}
				transition={{ type: 'tween', duration: 0.5 }}
				viewport={{ once: true }}
				className='relative flex flex-col gap-y-2 group overflow-hidden h-full w-full rounded-xl bg-white shadow-lg'>
				{/* <div className='h-full w-full absolute bg-gradient-to-t from-slate-950/50 to-transparent  '></div> */}

				<div className='overflow-hidden'>
				<img
					src={image}
					alt=''
					className='group-hover:scale-110 transition-transform duration-500   object-cover w-full h-[200px]'
				/>
				</div>

				<div className='px-5 py-2 pb-4 flex flex-col gap-8'>
				
				<div className='flex  justify-between '>
				<span className='text-[10px] font-semibold rounded-lg bg-[#97faffcb] text-[#31B7BD] max-w-fit px-2 py-1'>
					{type}
				</span>
				<p className='text-xs text-[#556987]'>19 Dic - 27 Ene</p>

				</div>
				<p className='text-[#354154] font-semibold text-2xl'>{title}</p>
				
				
				<div className='flex justify-end'>
					<button className='bg-[#D3E7FF] text-[#094998] rounded-lg px-8 py-3 font-semibold'>Ver mas {'->'}</button>
				</div>

				</div>
			</motion.div>
		</Link>
	)
}
