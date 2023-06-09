import { Link } from 'react-router-dom'
import { ListAdvertisemen } from '../../components/advertisements/ListAdvertisemen'
import { motion } from 'framer-motion'
import { variantsText } from '../../utils/variants'
import { useCorporateStore } from '../../store/CorporateStore'
import { useMemo } from 'react'

export const Advertisement = () => {
	// 	const { pathname } = useLocation();

	//   useEffect(() => {
	//     window.scrollTo({ top: 0, behavior: 'smooth' });
	//   }, [pathname]);

	const { dataCorporate: event } = useCorporateStore()
	
	const dataEvents = useMemo(() => {
		const data = event?.announcement.events
		return data?.length
	}, [event])

	return (
		<>
			{dataEvents === 0 ? null : (
				<div
					className='ra min-w-screen h-auto py-36  mt-20 md:mb-0 bg-red-900 flex flex-col gap-10 justify-center items-center  '
					id='announcement'>
					<div className='flex justify-center items-center flex-col'>
						<motion.span
							variants={variantsText}
							initial='initial'
							whileInView='show'
							viewport={{ once: true }}
							transition={{ duration: 0.5, type: 'tween' }}
							className='text-[#FF0C0C] font-normal mb-10'>
							ANUNCIOS
						</motion.span>
						<motion.h2
							variants={variantsText}
							initial='initial'
							whileInView='show'
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2, type: 'tween' }}
							className='text-[38px] text-[#212529] font-bold  max-w-lg mb-10 text-center'>
							Los mejores <span className='text-[#FF0C0C] '>eventos</span>
						</motion.h2>
					</div>
					<div className='max-w-7xl  w-full px-5 flex justify-center'>
						<ListAdvertisemen />
					</div>
					<Link
						to={'anuncios'}
						className='shadow-lg shadow-orange-200  bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-8 py-3  text-white rounded-[45px] text-md'>
						Ver todos {' >'}
					</Link>
				</div>
			)}
		</>
	)
}
