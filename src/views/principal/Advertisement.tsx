import { Link} from 'react-router-dom';
import { ListAdvertisemen } from '../../components/advertisements/ListAdvertisemen'

export const Advertisement = () => {
// 	const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [pathname]);



	return (
		<div className='min-w-screen h-auto py-20  mt-20 md:mb-0 bg-[#F5FAFF] flex flex-col gap-10 justify-center items-center  ' id='anun'>
			<div className='flex justify-center items-center flex-col'>
			<p className='text-[#094998] font-medium text-sm mb-20'>ANUNCIOS</p>
			<p className='font-bold text-[#313131] text-[44px] pb-5 mb-10 text-center'>
				Ofertas destacadas
			</p>
			</div>
			<div className='max-w-7xl  w-full px-5'>
			
				<ListAdvertisemen />
			</div>
			<Link to={'anuncios'} className='text-white p-2 w-44 px-5 rounded-md flex items-center justify-center buttonHome'>
				Ver todos {' >'}
			</Link>
		</div>
	)
}
