import { useEffect, useState } from 'react'
import { ListTotal } from '../components/advertisements/ListtTotal'
import { useLocation } from 'react-router-dom'
import { useCorporateStore } from '../store/CorporateStore'

export const Announcement = () => {
	const { pathname } = useLocation()
	const [filterAnnoucement, setFilterAnnoucement] = useState<number>(2)
	const { dataCorporate } = useCorporateStore()

	const countEvents = dataCorporate?.announcement.events.length
	const countPromotion = dataCorporate?.announcement.promotions.length

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [pathname])

	const changeFilter = (filter: number) => {
		setFilterAnnoucement(filter)
	}
	return (
		<div className='h-full w-full flex justify-center pt-40'>
			<div className='max-w-5xl  w-full h-full flex gap-4 flex-col md:flex-row px-5 relative'>
				<div className='w-full h-fullflex gap-2 py-10 flex-row md:flex-col md:w-64  '>
					<p className='font-bold text-[#354154] mb-4 pl-3 '>CATEGORIA</p>
					<div className='flex flex-row md:flex-col '>
						<h6
							onClick={() => changeFilter(0)}
							className={`hover:bg-[#ffb9a4] hover:text-[#ff5521] text-[#4d4d4d] py-2 px-4 cursor-pointer flex justify-between  ${filterAnnoucement==0 ?'bg-[#ffb9a4] text-[#ff5521]':'' }`}>
							Promoción <p>{countPromotion}</p>
						</h6>
						<h6
							onClick={() => changeFilter(1)}
							className={`hover:bg-[#ffb9a4] hover:text-[#ff5521] text-[#4d4d4d] py-2 px-4 cursor-pointer flex justify-between  ${filterAnnoucement==1 ?'bg-[#ffb9a4] text-[#ff5521]':'' }`}>
							Evento <p>{countEvents}</p>
						</h6>
						<p
							onClick={() => changeFilter(2)}
              className={`hover:bg-[#ffb9a4] hover:text-[#ff5521] text-[#4d4d4d] py-2 px-4 cursor-pointer flex justify-between  ${filterAnnoucement==2 ?'bg-[#ffb9a4] text-[#ff5521]':'' }`}>
							Todos
						</p>
					</div>
				</div>
				<div className='py-8 md:py-10  px-4  border-l-2 w-full'>
					<ListTotal filterData={filterAnnoucement} />
				</div>
			</div>
		</div>
	)
}
