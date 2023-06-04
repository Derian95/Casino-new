import { Link} from 'react-router-dom';
import { ListAdvertisemen } from '../../components/advertisements/ListAdvertisemen'

export const Advertisement = () => {
// 	const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [pathname]);



	return (
		<div className='ra min-w-screen h-auto py-36  mt-20 md:mb-0 bg-red-900 flex flex-col gap-10 justify-center items-center  ' id='anun'>
			<div className='flex justify-center items-center flex-col'>
			
			<span className='text-[#FF0C0C] font-normal mb-10'>ANUNCIOS</span>
			<h2 className='text-[38px] text-[#212529] font-bold  max-w-lg mb-10'>
				Los mejores <span className='text-[#FF0C0C] '>eventos</span>
				</h2>

			</div>
			<div className='max-w-7xl  w-full px-5'>
			
				<ListAdvertisemen />
			</div>
			<Link to={'anuncios'}className='shadow-lg shadow-orange-200  bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-8 py-3  text-white rounded-[45px] text-md'>
				Ver todos {' >'}
			</Link>
			
		</div>
	)
}
