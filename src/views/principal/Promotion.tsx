import { Link } from 'react-router-dom'
import { ListAdvertisemen } from '../../components/advertisements/ListAdvertisemen'
import '../Views.css'

export const Promotion = () => {
	return (
		<div className='ra min-w-screen h-auto py-36 pt-20 md:mb-0 bg-[#fff7f2] flex flex-col gap-10 justify-center items-center  ' id='anun'>
			<h2 className='text-[38px] text-[#212529] font-bold  max-w-lg mb-10'>
				Las mejores <span className='text-[#FF0C0C] '>promociones</span>
				</h2>
			<div className='max-w-7xl  w-full px-5'>

				<ListAdvertisemen />
			</div>
			<Link to={'anuncios'}className='shadow-lg shadow-orange-200  bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-8 py-3  text-white rounded-[45px] text-md'>
				Ver todos {' >'}
			</Link>
		</div>
	)
}
