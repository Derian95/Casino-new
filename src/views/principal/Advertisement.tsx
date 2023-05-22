import { Link, useLocation } from 'react-router-dom';
import { ListAdvertisemen } from '../../components/advertisements/ListAdvertisemen'
import { useEffect } from 'react';

export const Advertisement = () => {
	const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

	return (
		<div className='min-w-screen min-h-screen bg-white flex flex-col gap-10 justify-center items-center  ' id='anun'>
			<div className='max-w-5xl  w-full'>
			<p className='text-3xl font-bold text-[#333333] text-center mb-20'><span className='text-[#0A47C9]'>Ofertas</span> destacadas</p>
				<ListAdvertisemen />
			</div>
			<Link to={'anuncios'} className='hover:font-bold underline'>Ver mas {' >'}</Link>
		</div>
	)
}
