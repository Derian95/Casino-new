import { Link } from 'react-router-dom'
import { ListAdvertisemen } from '../../components/advertisements/ListAdvertisemen'

export const Promotion = () => {
	return (
		<div
			className='min-w-screen min-h-screen bg-white flex flex-col gap-10 justify-center items-center px-5'
			id='anun'>
			<div className='max-w-5xl'>
				<p className='text-3xl mb-12 text-center'>Promociones</p>

				<ListAdvertisemen />
			</div>
			<Link to={'anuncios'} className='hover:font-bold underline'>
				Ver mas {' >'}
			</Link>
		</div>
	)
}
