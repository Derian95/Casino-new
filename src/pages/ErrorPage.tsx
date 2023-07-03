import { Link } from "react-router-dom"
import { Navbar } from "../components/common/Navbar"
import { NavBarMobile } from "../components/ui/NavBarMobile"
import {ImgNotFound} from '../components/ui/svgAnimated/imgNotFound'
import arrow from '../assets/arrowWhite.svg'

export const ErrorPage = () => {
  return (
    <div className='relative'>

			<header>
				<Navbar  />
			</header>
			<main  className='overflow-x-hidden h-[90vh] flex justify-center items-center flex-col md:flex-row '>
			<NavBarMobile />
            <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-black max-w-sm">Página no encontrada</h1>
            <Link
						to={''}
						className='shadow-lg flex gap-2 shadow-orange-200  bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-8 py-3  text-white rounded-[45px] text-md hover:brightness-150 transition-all duration-300 ease-in group max-w-[165px]'>
						<img src={arrow} alt="" className='w-0 group-hover:w-4 transition-all duration-200 rotate-180' />Ver todos 
					</Link>
            </div>
            <ImgNotFound/>
			</main>
           
		</div>
  )
}
