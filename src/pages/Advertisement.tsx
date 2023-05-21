import { ListAdvertisemen } from '../components/advertisements/ListAdvertisemen'

export const Advertisement = () => {
	return (
		<div className='min-w-screen min-h-screen bg-white flex justify-center items-center py-20 px-14'>
			<div className='max-w-5xl'>
				<p className='text-3xl mb-12 text-center'>Anuncios</p>

				<ListAdvertisemen />
			</div>
		</div>
	)
}
