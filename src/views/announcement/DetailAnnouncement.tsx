import { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Slider } from '../../components/detail/Slider'
import { useAnouncementData } from '../../hooks/useAnnoucement'
import Skeleton from 'react-loading-skeleton'
import { formatDate } from '../../utils/date'
import arrow from '../../assets/arrowMenu.svg'

export const DetailAnnouncement = () => {
	const { pathname } = useLocation()
	const { idAnnouncement } = useParams()
	const navigate = useNavigate()
	const { data, isSuccess } = useAnouncementData(idAnnouncement!)
	const announcement = data?.data
	console.log(announcement)

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [pathname])

	const formatStartDate= formatDate(announcement?.startDate!)
	const formatEndDate = formatDate(announcement?.endDate!)

	return (
		<div className='w-screen h-auto flex justify-center pt-36 bg-white px-5'>
			<div className='max-w-5xl h-auto w-full '>
				{isSuccess ? (
					<>
						<div onClick={() => navigate(-1)} className='bg-[#FF0C0C20] w-fit px-4 py-2 rounded-2xl cursor-pointer group' >
							{' '}
							<span className='text-2xl flex gap-2'><img src={arrow} alt="" className='w-0 group-hover:w-4 transition-all duration-200 rotate-180'/> <p className='text-[#fc6022] text-sm'>Regresar</p></span> 
						</div>

						<p className='text-xs mb-6 text-[#556987]font-semibold m-auto max-w-fit'>
							{formatStartDate} - {formatEndDate}
						</p>
						<p className='text-3xl text-center font-bold text-[#333333]'>
							{announcement?.title}
						</p>
						<p className='m-auto my-6 text-[10px] text-center font-semibold bg-[#BDD2FF] text-[#0A47C9] max-w-fit px-2 py-1'>
							{announcement?.typeAnnouncement == 0 ? 'EVENTO' : 'PROMOCION'}
						</p>

						<div className='  '>
							<Slider images={announcement?.corpAnnouncementsMedia!} />
						</div>
						<div className='min-h-[50vh]  '>
							<p
								dangerouslySetInnerHTML={{ __html: announcement?.description! }}
								className='text-[#3e4a63] font-normal'>
							</p>
						</div>
					</>
				) : (
					<>
						<span className='text-2xl'>
							<Skeleton count={1} width={80} height={15} />
						</span>
						<p className='mb-6  m-auto max-w-fit'>
							<Skeleton count={1} width={70} height={10} />
						</p>
						<p className='text-center '>
							<Skeleton count={1} width={220} height={30} />
						</p>
						<p className='m-auto my-6  text-center  max-w-fit px-2 py-1'>
							<Skeleton count={1} width={70} height={15} />
						</p>

						<Skeleton count={1} width={'100%'} height={350} className='mb-10' />

						<Skeleton count={20} width={'100%'} height={15} />
					</>
				)}
			</div>
		</div>
	)
}
