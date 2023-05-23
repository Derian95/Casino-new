import { Link } from 'react-router-dom'
import { ListAdvertisemen } from '../../components/advertisements/ListAdvertisemen'

export const Promotion = () => {
	return (
		<div className='min-w-screen min-h-fit py-20 bg-white flex flex-col gap-10 justify-center items-center  ' id='anun'>
			<div className='max-w-5xl  w-full px-5'>
			<p className='text-3xl font-bold text-[#333333] text-center mb-20'><span className='text-[#0A47C9]'>Promociones</span> destacadas</p>

				<ListAdvertisemen />
			</div>
			<Link to={'anuncios'} className='hover:font-bold underline'>
				Ver mas {' >'}
			</Link>
		</div>
	)
}
