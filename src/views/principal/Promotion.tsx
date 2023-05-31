import { Link } from 'react-router-dom'
import { ListAdvertisemen } from '../../components/advertisements/ListAdvertisemen'
import '../Views.css'

export const Promotion = () => {
	return (
		<div className='min-w-screen h-auto py-20  pt-20 md:mb-0 bg-[#F5FAFF] flex flex-col gap-10 justify-center items-center  ' id='anun'>
			<p className='font-bold text-[#313131] text-[44px] pb-5 mb-10 text-center'>
				Eventos destacados
			</p>
			<div className='max-w-7xl  w-full px-5'>

				<ListAdvertisemen />
			</div>
			<Link to={'anuncios'} className='text-white p-2 w-44 px-5 rounded-md flex items-center justify-center buttonHome'>
				Ver todos {' >'}
			</Link>
		</div>
	)
}
