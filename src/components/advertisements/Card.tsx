// import imagen from '../../assets/aboutImg.png'
import { Link } from 'react-router-dom'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { formatDate } from '../../utils/date'
import arrow from '../../assets/arrowMenu.svg'

interface Props {
	title: 			string
	image: 			string
	type: 			TypeAnnouncement
	id:				number
	startDate:		string
	endDate:		string

}

type TypeAnnouncement = 'EVENTO' | 'PROMOCION'

export const Card: FC<Props> = ({ title, image, type, id, startDate, endDate }) => {

	// const [formatStartDate, setFormatStartDate] = useState('')
	// const [formatEndDate, setFormatEndDate] = useState('')

	const formatStartDate= formatDate(startDate)
	const formatEndDate = formatDate(endDate)

	return (
		<Link to={'/anuncio-detalle/'+id}>
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
				<span className='text-[11px] font-semibold rounded-md bg-[#BDD2FF] text-[#0A47C9] max-w-fit px-2 py-1'>
					{type}
				</span>
				<p className='text-xs text-[#556987]'>{formatStartDate} - {formatEndDate}</p>

				</div>
				<p className='text-[#354154] font-semibold text-2xl'>{title}</p>
				
				
				<div className='flex justify-end'>
					<button className='bg-[#FF0C0C20] text-[#fc6022] rounded-[45px] px-5 py-2 font-normal text-sm flex gap-2 justify-center items-center'>Ver mas <img src={arrow} className='w-0 group-hover:w-4 transition-all duration-200' alt="" /></button>
					
				</div>
				
				</div>
			</motion.div>
		</Link>
	)
}
