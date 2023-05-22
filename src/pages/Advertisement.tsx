import { Link, useLocation } from 'react-router-dom';
import { ListAdvertisemen } from '../components/advertisements/ListAdvertisemen'
import { useEffect } from 'react';

export const Advertisement = () => {
	const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

	return (
		<div className='min-w-screen min-h-screen bg-white flex flex-col gap-10 justify-center items-center py-20 px-14' id='anun'>
			<div className='max-w-5xl'>
				<p className='text-3xl mb-12 text-center'>Anuncios</p>

				<ListAdvertisemen />
			</div>
			<Link to={'anuncios'} className='hover:font-bold underline'>Ver mas {' >'}</Link>
		</div>
	)
}
