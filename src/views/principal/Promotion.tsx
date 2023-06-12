import { Link } from 'react-router-dom'
import '../Views.css'
import { variantsText } from '../../utils/variants'
import { motion } from 'framer-motion'
import { ListPromotion } from '../../components/promotion/ListPromotion'
import { useCorporateStore } from '../../store/CorporateStore'
import { useMemo } from 'react'
import arrow from '../../assets/arrowWhite.svg'

export const Promotion = () => {
	const { dataCorporate: promotion } = useCorporateStore()

	const dataPromotion = useMemo(() => {
		const data = promotion?.announcement.promotions
		return data?.length
	}, [promotion])

	return (
		<>
			{dataPromotion === 0 ? null : (
				<div
					className='ra min-w-screen h-auto py-36 pt-20 md:mb-0 bg-[#fff7f2] flex flex-col gap-10 justify-center items-center  '
					id='anun'>
					<motion.h2
						variants={variantsText}
						initial='initial'
						whileInView='show'
						viewport={{ once: true }}
						transition={{ duration: 0.5, type: 'tween' }}
						className='text-[38px] text-[#212529] font-bold  max-w-lg mb-10 text-center'>
						Las mejores <span className='text-[#FF0C0C] '>promociones</span>
					</motion.h2>
					<div className='max-w-7xl  w-full px-5 flex justify-center'>
						<ListPromotion />
					</div>
					<Link
						to={'anuncios'}
						className='shadow-lg flex gap-2 shadow-orange-200  bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-8 py-3  text-white rounded-[45px] text-md hover:brightness-150 transition-all duration-300 ease-in group'>
						Ver todos <img src={arrow} alt="" className='w-0 group-hover:w-4 transition-all duration-200'/>
					</Link>
				</div>
			)}
		</>
	)
}
